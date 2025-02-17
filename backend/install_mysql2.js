const { exec } = require("child_process");

console.log("🚀 Instalando mysql2 manualmente en Vercel...");

exec("npm install mysql2 --force", (error, stdout, stderr) => {
  if (error) {
    console.error("❌ Error instalando mysql2:", error);
    process.exit(1);
  }
  console.log("✅ mysql2 instalado correctamente:");
  console.log(stdout);
});
