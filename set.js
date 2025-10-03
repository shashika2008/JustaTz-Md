const fs = require("fs-extra");
if (fs.existsSync("set.env")) {
  require("dotenv").config({
    'path': __dirname + "/set.env"
  });
}
const path = require("path");
const databasePath = path.join(__dirname, "./database.db");
const DATABASE_URL = process.env.DATABASE_URL === undefined ? databasePath : process.env.DATABASE_URL;
module.exports = {
  'session': process.env.SESSION_ID || "nFBEgLSb#htrRXt3xUHpMhBK7hctriTVg_aibpocKdjbeaqjwEt8",
  'PREFIXE': process.env.PREFIX || '+',
  'OWNER_NAME': process.env.OWNER_NAME || "J𝖀𝗦𝐓Λ𝗧𝙕-MD",
  'NUMERO_OWNER': process.env.NUMERO_OWNER || "94705104830",
  'AUTO_READ_STATUS': process.env.AUTO_READ_STATUS || "non",
  'AUTO_DOWNLOAD_STATUS': process.env.AUTO_DOWNLOAD_STATUS || "non",
  'BOT': process.env.BOT_NAME || "J𝖀𝗦𝐓Λ𝗧𝙕-MD",
  'URL': process.env.BOT_MENU_LINKS || "https://files.catbox.moe/s326s2.jpg",
  'MODE': process.env.PUBLIC_MODE || 'yes',
  'PM_PERMIT': process.env.PM_PERMIT || 'no',
  'HEROKU_APP_NAME': process.env.HEROKU_APP_NAME,
  'HEROKU_APY_KEY': process.env.HEROKU_APY_KEY,
  'WARN_COUNT': process.env.WARN_COUNT || '3',
  'ETAT': process.env.PRESENCE || '',
  'CHATBOT': process.env.PM_CHATBOT || 'no',
  'ANTICALL': process.env.ANTICALL || "non",
  'AUTO_REACT_STATUS': process.env.AUTO_REACT_STATUS || "yes",
  'DP': process.env.STARTING_BOT_MESSAGE || "yes",
  'ADM': process.env.ANTI_DELETE_MESSAGE || "yes",
  'DATABASE_URL': DATABASE_URL,
  'DATABASE': DATABASE_URL === databasePath ? "postgres://db_7xp9_user:6hwmTN7rGPNsjlBEHyX49CXwrG7cDeYi@dpg-cj7ldu5jeehc73b2p7g0-a.oregon-postgres.render.com/db_7xp9" : "postgres://db_7xp9_user:6hwmTN7rGPNsjlBEHyX49CXwrG7cDeYi@dpg-cj7ldu5jeehc73b2p7g0-a.oregon-postgres.render.com/db_7xp9"
};
let fichier = require.resolve(__filename);
fs.watchFile(fichier, () => {
  fs.unwatchFile(fichier);
  console.log("mise à jour " + __filename);
  delete require.cache[fichier];
  require(fichier);
});
