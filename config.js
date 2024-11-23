//#ENJOY
const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });
global.audio = "";
global.video = "";
global.port = process.env.PORT;
global.appUrl = process.env.APP_URL || "";
global.email = "frediezra60@gmail.com";
global.location = "Dar Es Salam,Tanzania.";
global.mongodb = process.env.MONGODB_URI || "";
global.allowJids = process.env.ALLOW_JID || "null";
global.blockJids = process.env.BLOCK_JID || "null";
global.DATABASE_URL = process.env.DATABASE_URL || "";
global.timezone = process.env.TZ || process.env.TIME_ZONE || "Africa/Dar es salaam";
global.github = process.env.GITHUB || "https://github.com/Frecyber/Frecyber-md";
global.gurl = process.env.GURL || "https://whatsapp.com/channel/0029VaihcQv84Om8LP59fO3f";
global.website = process.env.GURL || "https://whatsapp.com/channel/0029VaihcQv84Om8LP59fO3f";
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://telegra.ph/file/1d4a42b28790d0f7a7195.jpg";
global.devs = "255620814108,255764182801,255776663848,255752593977";
global.sudo = process.env.SUDO || "255620814108,255764182801,255776663848,255752593977";
global.owner = process.env.OWNER_NUMBER || "2347084089944";
global.style = process.env.STYLE || "3";
global.gdbye = process.env.GOODBYE || "true";
global.wlcm = process.env.WELCOME || "true";
global.warncount = process.env.WARN_COUNT || 3;
global.disablepm = process.env.DISABLE_PM || "false";
global.disablegroup = process.env.DISABLE_GROUPS || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG || "true";
global.userImages = process.env.USER_IMAGES || "";
global.waPresence = process.env.WAPRESENCE || "composing";
global.readcmds = process.env.READ_COMMAND || "false";
global.readmessage = process.env.READ_MESSAGE || "false";
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "";
global.read_status = process.env.AUTO_READ_STATUS || "true";
global.save_status = process.env.AUTO_SAVE_STATUS || "false";
global.save_status_from = process.env.SAVE_STATUS_FROM || "";
global.read_status_from = process.env.READ_STATUS_FROM || "";

global.api_smd = "https://api-smd-1.vercel.app";
global.scan = "https://rb.gy/3keql8";

global.SESSION_ID =
  process.env.SESSION_ID ||
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiT0wyRDV3dy9qa3ljSGgrSk0yakRYRXcyMEFsODNpbjJRMnY0M21HSDRuRT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoic0NmcUhXK3pWUVpOY2F3cUtOK3ZBLzdOc0lER0s0Ym9ueWdMNmtITkVTTT0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJjUHUwbERHbXp6T2plOTI0Qk1tUjBaakk0NGFZYkEvUjdMZHZGNTRQVjNJPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiI2dUJ2clRQNC9sVlRSQlV0L2k5RU9iVXd0Q0ZGa1dlWW9KbEFLZWN6WWs0PSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IktKQjZ2NnhnajVPZHh3dE1kQmZ2OHMrUkIzVjZsNklibjZ4Q21lZTdoVUE9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlRDRHVPTDFrU1pEMFFRRlRBaFFzeU54LzNjbFBjVGdVRXBCUU9saWkyMWc9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiYU9GM2ExdHBlRDBKa3lxSHhPYUxITThSRnI3d1ovZHdaaml0MlgycGNGbz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiMEtPOGVaVm5LYzliL3Flcmc0Q2VuRFhGa1k0SmpBNmw3RUd5eUdLeGNTZz0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Ijh1TGMwKzdRWjBUTmFFVDh5Mm1TUDhjeS9PTlprOUc3azZSOXJCM3BxbUdFaUNBelcycmF5MFhWd1had0I4SDVya2Y5bS9idXlUQnFSenVBQ2tuWENnPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTE2LCJhZHZTZWNyZXRLZXkiOiJDQk4wL2s0d1FZTkFCd2JodXFhY3I1cno2Vkl3ZThxY255d0J1TE1UelNZPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W10sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjowLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiJBTFl2cndBRVJmcWZITkdMM1JPWnh3IiwicGhvbmVJZCI6IjVlMmZjNDBhLWFiMTgtNGY1Zi1hYzE0LThkN2EzZDA4NDdhNyIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJFV1ZOa01PUFpTQ0JwQmlyR0UrL1lsSHBBSDA9In0sInJlZ2lzdGVyZWQiOnRydWUsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoib1VFaXpEeW9nZ0llMTk3akFtYmVlODVvMXNrPSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJwYWlyaW5nQ29kZSI6IjZCNlRQS1AxIiwibWUiOnsiaWQiOiIyMzQ3MDg0MDg5OTQ0OjNAcy53aGF0c2FwcC5uZXQiLCJuYW1lIjoiR0lOVEhVQihHRU5JVVMgSU5OT1ZBVElWRSBURUNITk9MT0dZIEhVQikifSwiYWNjb3VudCI6eyJkZXRhaWxzIjoiQ0lQRnI3QURFUHZSaUxvR0dBMGdBQ2dBIiwiYWNjb3VudFNpZ25hdHVyZUtleSI6IktwbWJwUkpIeGtJQUI3b1NSRUtiNXVMNDVyaTJwZGl1Y0tZZi9WZlJTMTQ9IiwiYWNjb3VudFNpZ25hdHVyZSI6Im1uc0xzV3hOOFlIbnNOWXdwTXhYakFySnRvT1k5VVpsNWtJanFkTXpQMjZCV1JpaGhmL3BydjBaT0pRVCszQThIN04wNFZOMmlRTittQWdmbFBTSER3PT0iLCJkZXZpY2VTaWduYXR1cmUiOiJBTmVYbjErQ3JhNG1VaDBCL2Z0eTlUS1pvRGlQb0F5dFY0cWN2UmVTOUJIZVllN0hrN0ZoMHFmaVFjREFiQ01FUzFDUzhhK005aEd1V2Z5cHQ2RERDUT09In0sInNpZ25hbElkZW50aXRpZXMiOlt7ImlkZW50aWZpZXIiOnsibmFtZSI6IjIzNDcwODQwODk5NDQ6M0BzLndoYXRzYXBwLm5ldCIsImRldmljZUlkIjowfSwiaWRlbnRpZmllcktleSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkJTcVptNlVTUjhaQ0FBZTZFa1JDbStiaStPYTR0cVhZcm5DbUgvMVgwVXRlIn19XSwicGxhdGZvcm0iOiJzbWJhIiwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wIjoxNzMyMzg5MTI4LCJteUFwcFN0YXRlS2V5SWQiOiJBQUFBQUNJcyJ9"
module.exports = {
  menu: process.env.MENU || "",
  HANDLERS: process.env.PREFIX || ".",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.0.0",
  caption: process.env.CAPTION || "you're using first powerful bot to be released in Tanzania| enjoy your time| this is 𝐅𝚪𝚵𝐂𝐘𝚩𝚵𝚪 𝚳𝐃",
  author: process.env.PACK_AUTHER || "FRECYBER",
  packname: process.env.PACK_NAME || "♥️",
  botname: process.env.BOT_NAME || "FRECYBER-𝐌𝐃",
  ownername: process.env.OWNER_NAME || "FRECYBER",
  errorChat: process.env.ERROR_CHAT || "",
  KOYEB_API: process.env.KOYEB_API || "false",
  REMOVE_BG_KEY: process.env.REMOVE_BG_KEY || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "sk-proj-MLNkacQOWsMSwtBZZf0XT3BlbkFJqfgJYOOkiikW5Y4ynpM5",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || "",
  antilink_values: process.env.ANTILINK_VALUES || "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,
  aitts_Voice_Id: process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "",
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || "private",
  LANG: (process.env.THEME || "FRECYBER").toUpperCase(),
};
global.rank = "updated";
global.isMongodb = false;
let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(`Update'${__filename}'`);
  delete require.cache[file];
  require(file);
});
