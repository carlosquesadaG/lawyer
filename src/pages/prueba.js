const path = require("path");
const os = require("os");
const fs = require("fs");
const functions = require("@google-cloud/functions-framework");
const Busboy = require("busboy");
const { Storage } = require("@google-cloud/storage");
const { BigQuery } = require("@google-cloud/bigquery");
const { v4: uuidv4 } = require("uuid");
const { OAuth2Client } = require("google-auth-library");
const nodemailer = require("nodemailer");

const VALID_AUDIENCES = [
  "618104708054-9r9s1c4alg36erliucho9t52n32n6dgq.apps.googleusercontent.com",
  "https://us-central1-proy-lago-de-datos-428221.cloudfunctions.net/enviarDenuncia",
];

const ALLOWED_ORIGINS = [
  "http://localhost:9001",
  "http://localhost:9001/",
  "https://mag-dot-emuclient.uc.r.appspot.com",
  "https://mag-dot-emuclient.uc.r.appspot.com/",
  "https://proy-lago-de-datos-428221.uc.r.appspot.com",
  "https://proy-lago-de-datos-428221.uc.r.appspot.com/",
  "https://geoportal.mag.gob.sv",
  "https://geoportal.mag.gob.sv/",
];

const storage = new Storage();
const bigquery = new BigQuery();
const oauth2Client = new OAuth2Client();

async function verifyToken(token) {
  try {
    const ticket = await oauth2Client.verifyIdToken({
      idToken: token,
      audience: VALID_AUDIENCES,
    });
    return ticket.getPayload();
  } catch (error) {
    console.error("Token verification error:", error);
    return null;
  }
}

const BUCKET_NAME = "denuncia-ciudadana";
const DATASET_ID = "denuncia_ciudadana";
const TABLE_ID = "denuncia_ciudadana_v2";

//tipoos de cultivos, tipo afectacion
const DOMINIO_TIPO_CULTIVO = "tipo_cultivo";
const DOMINIO_TIPO_AFECTACION = "tipo_afectacion";

async function enviarCorreoDenuncia(destinatario, nombreUsuario) {
  const transporter = nodemailer.createTransport({
    service: "gmail", // O el servicio SMTP que uses
    auth: {
      user: "soporte.endi@goes.gob.sv",
      pass: "xjjf yrkq zdcm lltf",
    },
  });

  const htmlBody = `
    <html>
      <body style="font-family: Arial, sans-serif; background-color: #313945; padding: 20px; color: #f4f4f4;">
        <div style="max-width: 600px; margin: auto; background-color: #313945; padding: 30px; border-radius: 10px; box-shadow: 0 0 10px rgba(0,0,0,0.3);">
          <div style="text-align: center; margin-bottom: 30px;">
            <img src="https://storage.googleapis.com/files-vice/logo_vice_horizontal.png"
              alt="Gobierno de El Salvador"
              style="max-width: 100%; height: auto; padding: 0 30px;">
          </div>
          <h2 style="color: #ffffff; text-align: center;">Denuncia Ciudadana Enviada</h2>
          <p style="color: #dcdcdc;">Estimado(a) ${nombreUsuario || "usuario"},</p>
          <p style="color: #dcdcdc;">Su denuncia ciudadana ha sido enviada correctamente. Pronto será revisada por nuestro equipo.</p>
          <hr style="border: 1px solid #444; margin: 30px 0;">
          <div style="font-size: 13px; color: #bbb;">
            <p><strong>Vicepresidencia del Salvador</strong></p>
            <div style="text-align: center; margin: 20px 0;">
              <a href="https://www.facebook.com/vicepresidenciaelsalvador" target="_blank" style="margin: 0 10px;">
                <img src="https://cdn-icons-png.flaticon.com/24/733/733547.png" alt="Facebook">
              </a>
              <a href="https://x.com/VCpresidenciaSV" target="_blank" style="margin: 0 10px;">
                <img src="https://cdn-icons-png.flaticon.com/24/733/733579.png" alt="Twitter">
              </a>
            </div>
          </div>
        </div>
      </body>
    </html>
  `;

  await transporter.sendMail({
    from: '"Denuncia Ciudadana" <TU_CORREO@gmail.com>',
    to: destinatario,
    subject: "Denuncia enviada correctamente",
    html: htmlBody,
  });
}

functions.http("denuncia-ciudadana", async (req, res) => {
  const origin = req.get("Origin");
  const allowOrigin = ALLOWED_ORIGINS.includes(origin)
    ? origin
    : ALLOWED_ORIGINS[0];

  res.set("Access-Control-Allow-Origin", allowOrigin);
  res.set("Access-Control-Allow-Credentials", "true");

  if (req.method === "OPTIONS") {
    res.set("Access-Control-Allow-Methods", "GET,POST,OPTIONS");
    res.set("Access-Control-Allow-Headers", "Content-Type, Authorization");
    return res.status(204).send("");
  }

  if (req.method !== "POST") {
    return res.status(405).send("Método no permitido");
  }

  // Autenticación con Bearer Token
  const authHeader = req.get("Authorization");
  if (!authHeader || !authHeader.startsWith("Bearer ")) {
    return res
      .status(401)
      .json({ message: "Token de autorización faltante o inválido" });
  }

  const token = authHeader.split("Bearer ")[1];
  if (!(await verifyToken(token))) {
    return res.status(401).json({ message: "Token inválido" });
  }

  const busboy = Busboy({ headers: req.headers });
  const tmpdir = os.tmpdir();
  const fileUploads = [];

  let reportData = {
    id: uuidv4(),
    nombre: "",
    correo: "",
    departamento: "",
    municipio: "",
    descripcion: "",
    archivos: "",
    finca_nombre: "",
    telefono: "",
    ubicacion: "",
    tipo_cultivo: "",
    area_cultivo: "",
    fase_fenologica: "",
    tipo_afectacion: "",
    sintomas: "",
    descripcion_problema: "",
  };

  let archivosLista = [];

  // Manejar archivos
  busboy.on("file", (fieldname, file, { filename }) => {
    const filepath = path.join(tmpdir, filename);
    const writeStream = fs.createWriteStream(filepath);
    file.pipe(writeStream);

    fileUploads.push(
      new Promise(async (resolve, reject) => {
        file.on("end", () => writeStream.end());
        writeStream.on("close", async () => {
          try {
            const bucket = storage.bucket(BUCKET_NAME);
            const destination = `denuncias/${Date.now()}_${filename}`;

            await bucket.upload(filepath, { destination });
            fs.unlinkSync(filepath); // Eliminar archivo local

            const fileUrl = `https://storage.googleapis.com/${BUCKET_NAME}/${destination}`;
            archivosLista.push(fileUrl);

            resolve();
          } catch (error) {
            reject(error);
          }
        });
        writeStream.on("error", reject);
      })
    );
  });

  // Manejar otros campos del formulario
  busboy.on("field", (fieldname, val) => {
    reportData[fieldname] = val;
  });

  busboy.on("finish", async () => {
    try {
      await Promise.all(fileUploads);

      // Convertir la lista de archivos en una cadena separada por comas
      reportData.archivos = archivosLista.join(", ");

      // Insertar en BigQuery
      await bigquery.dataset(DATASET_ID).table(TABLE_ID).insert([reportData]);

      // Enviar correo de confirmación
      if (reportData.correo) {
        await enviarCorreoDenuncia(reportData.correo, reportData.nombre);
      }

      res.status(200).send({
        status: "success",
        message: "Denuncia guardada con éxito",
        data: reportData,
      });
    } catch (error) {
      console.error("Error al guardar en BigQuery:", error);
      res.status(500).send("Error interno al procesar la denuncia.");
    }
  });

  busboy.end(req.rawBody);
});
