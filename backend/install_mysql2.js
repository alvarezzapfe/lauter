const { exec } = require("child_process");

console.log("🚀 Instalando mysql2 manualmente en Vercel...");

exec("npm install mysql2", (error, stdout, stderr) => {
  if (error) {
    console.error(`❌ Error al instalar mysql2: ${error.message}`);
    return;
  }
  if (stderr) {
    console.error(`❗ Advertencia: ${stderr}`);
  }
  console.log(`✅ mysql2 instalado correctamente:\n${stdout}`);
});
