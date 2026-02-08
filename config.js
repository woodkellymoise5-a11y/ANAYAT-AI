const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID || "ANAYAT-AI~eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiMENna05tZlpWM3Y1Y3NhcU52RTN3alVBaHFXdW56Z1hPaHFlM0pkRFdsQT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiZFlYWnBpYnFvc3hNUTV6Q2UzamZJSkFjbG1lYVdpR3FYQWc3VzBQWnpsOD0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJXTmxVOHR5MjBHZWpJc2ZWS3cxVzdWN0s0RThlNmMvZFhEQmF6cDAzT0VVPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiI5S2M1QU5PZWs5alhrOHZOUmh1MU03UnBLTUdWSVVXbWlzdGdMQVkxZjI0PSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IndCWTRSN0IxSkhRaVAxaHd6aThsSUJ1bnJqck0zZVEvUEFqcFByRkZJbU09In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Im00NU1xbmY1RWhSSktpN2ZwVG51bGhmaGtxMlQ5bkZLTTFkQlJrek9ham89In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiVU9CZnFvMTFEMmNHdENuZTI5NXpWTTI0QzBudWRNVjRRQmJlNFEvb3VWYz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiS2FPQTB6cDBnZVcxWUNNNG1rYStGMnk5bFpHNkFaVU9zZS9JeVpObG5WZz0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjFGdnM4MHhYYzE5QnlmNkE4dHBsYm5OVTZ5elFZYjlyZHoxSU9RMjR5RCt6M0h4UnYwcjFMQ3JuSURTdTZZK2RGRk5QUGU0RmoxTFBUSDJLMXRxdmdnPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MjEwLCJhZHZTZWNyZXRLZXkiOiJCSUV0dTdMekI3SW1sd01pSksremN5dnoyd1FZMHh1cm5sZHFIZ3cySUJjPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W3sia2V5Ijp7InJlbW90ZUppZCI6IjUwOTMxNzcyMDcwQHMud2hhdHNhcHAubmV0IiwiZnJvbU1lIjp0cnVlLCJpZCI6IkFDNzQ3MTMwQzE0NjZFQjhBRThERjMwNUY0MjIwODBGIn0sIm1lc3NhZ2VUaW1lc3RhbXAiOjE3NzA1MjA3ODh9LHsia2V5Ijp7InJlbW90ZUppZCI6IjUwOTMxNzcyMDcwQHMud2hhdHNhcHAubmV0IiwiZnJvbU1lIjp0cnVlLCJpZCI6IkFDOTBEMDk4NTkwMzJDNTA3NzM5M0YxN0RGN0EzNjVGIn0sIm1lc3NhZ2VUaW1lc3RhbXAiOjE3NzA1MjA3ODh9LHsia2V5Ijp7InJlbW90ZUppZCI6IjUwOTMxNzcyMDcwQHMud2hhdHNhcHAubmV0IiwiZnJvbU1lIjp0cnVlLCJpZCI6IkFDQzFGOUNEREJGN0NGQkYzM0Q1N0U4Q0QwQ0I0NzVDIn0sIm1lc3NhZ2VUaW1lc3RhbXAiOjE3NzA1MjA3OTB9XSwibmV4dFByZUtleUlkIjo4MTMsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjo4MTMsImFjY291bnRTeW5jQ291bnRlciI6MCwiYWNjb3VudFNldHRpbmdzIjp7InVuYXJjaGl2ZUNoYXRzIjpmYWxzZX0sInJlZ2lzdGVyZWQiOnRydWUsInBhaXJpbmdDb2RlIjoiWVVQUkFERVYiLCJtZSI6eyJpZCI6IjUwOTMxNzcyMDcwOjhAcy53aGF0c2FwcC5uZXQiLCJsaWQiOiIxNjM5MTM2Njg3NTk3MzM6OEBsaWQifSwiYWNjb3VudCI6eyJkZXRhaWxzIjoiQ09uODVKZ0NFTUdCb013R0dBRWdBQ2dBIiwiYWNjb3VudFNpZ25hdHVyZUtleSI6ImJXaERtUTBEN09wYk1HWWp3ajFabWxNT21kS2lIQ3FBV3R1dUw3ZG01azA9IiwiYWNjb3VudFNpZ25hdHVyZSI6IlJ2YUxRNHkwaWNZN2gxVlcydDZHNUxTQ05pc1BQVktOVEcwS3pqWEI2bVAyK1JhZHI1Z2RZRU9nekFmK3VVTkN2c0l4NGJ2alVVMXNEU0QwbWwrY0FRPT0iLCJkZXZpY2VTaWduYXR1cmUiOiJBcjhpcXdNdUtleStlOFkvMFBOWjdJOFpFZ3BKSzBSbFQyczBETkxZRlFScHNWOCtZM3RKTnAranBJZEhxRmcxYkpVZnVMME0zTlp0S2RQWHlHa0ZoUT09In0sInNpZ25hbElkZW50aXRpZXMiOlt7ImlkZW50aWZpZXIiOnsibmFtZSI6IjUwOTMxNzcyMDcwOjhAcy53aGF0c2FwcC5uZXQiLCJkZXZpY2VJZCI6MH0sImlkZW50aWZpZXJLZXkiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJCVzFvUTVrTkErenFXekJtSThJOVdacFREcG5Tb2h3cWdGcmJyaSszWnVaTiJ9fV0sInBsYXRmb3JtIjoiYW5kcm9pZCIsInJvdXRpbmdJbmZvIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQ0FVSUVnZ0MifSwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wIjoxNzcwNTIwNzgyLCJsYXN0UHJvcEhhc2giOiIyRzRBbXUifQ==",
// add your Session Id 
AUTO_STATUS_SEEN: process.env.AUTO_STATUS_SEEN || "false",
// make true or false status auto seen
AUTO_STATUS_REPLY: process.env.AUTO_STATUS_REPLY || "false",
// make true if you want auto reply on status 
AUTO_STATUS_REACT: process.env.AUTO_STATUS_REACT || "false",
// make true if you want auto reply on status 
AUTO_STATUS_MSG: process.env.AUTO_STATUS_MSG || "*𝚂𝙴𝙴𝙽 𝚈𝙾𝚄𝚁 𝚂𝚃𝙰𝚃𝚄𝚂 𝙱𝚈 𝙰𝙽𝙰𝚈𝙰𝚃-𝙰𝙸 🤍*",
// set the auto reply massage on status reply  
ANTI_DELETE: process.env.ANTI_DELETE || "false",
// set true false for anti delete     
ANTI_DEL_PATH: process.env.ANTI_DEL_PATH || "inbox", 
// change it to 'same' if you want to resend deleted message in same chat     
WELCOME: process.env.WELCOME || "false",
// true if want welcome and goodbye msg in groups    
ADMIN_EVENTS: process.env.ADMIN_EVENTS || "false",
// make true to know who dismiss or promoted a member in group
ANTI_LINK: process.env.ANTI_LINK || "false",
// make anti link true,false for groups 
MENTION_REPLY: process.env.MENTION_REPLY || "false",
// make true if want auto voice reply if someone menetion you 
MENU_IMAGE_URL: process.env.MENU_IMAGE_URL || "https://files.catbox.moe/adhn5v.jpg",
// add custom menu and mention reply image url
PREFIX: process.env.PREFIX || ".",
// add your prifix for bot   
BOT_NAME: process.env.BOT_NAME || "ANAYAT-AI",
// add bot namw here for menu
STICKER_NAME: process.env.STICKER_NAME || "ANAYAT-AI",
// type sticker pack name 
CUSTOM_REACT: process.env.CUSTOM_REACT || "false",
// make this true for custum emoji react    
CUSTOM_REACT_EMOJIS: process.env.CUSTOM_REACT_EMOJIS || "💝,💖,💗,❤️‍🩹,❤️,🧡,💛,💚,💙,💜,🤎,🖤,🤍",
// chose custom react emojis by yourself 
DELETE_LINKS: process.env.DELETE_LINKS || "false",
// automatic delete links witho remove member 
OWNER_NUMBER: process.env.OWNER_NUMBER || "923452401207",
// add your bot owner number
OWNER_NAME: process.env.OWNER_NAME || "𝙰𝙽𝙰𝚈𝙰𝚃 𝙷𝙰𝙲𝙺𝙴𝚁",
// add bot owner name
DESCRIPTION: process.env.DESCRIPTION || "*© ᴘᴏᴡᴇʀᴇᴅ ʙʏ 𝙰𝙽𝙰𝚈𝙰𝚃-𝙰𝙸 ❣️*",
// add bot owner name    
ALIVE_VID: process.env.ALIVE_VID || "https://files.catbox.moe/2myos8.mp4",
// add img for alive msg
LIVE_MSG: process.env.LIVE_MSG || "𝚉𝙸𝙽𝙳𝙰 𝙷𝚄𝙽 𝚈𝙰𝚁 🤖",
// add alive msg here 
READ_MESSAGE: process.env.READ_MESSAGE || "false",
// Turn true or false for automatic read msgs
AUTO_REACT: process.env.AUTO_REACT || "false",
// make this true or false for auto react on all msgs
ANTI_BAD: process.env.ANTI_BAD || "false",
// false or true for anti bad words  
MODE: process.env.MODE || "public",
// make bot public-private-inbox-group 
ANTI_LINK_KICK: process.env.ANTI_LINK_KICK || "false",
// make anti link true,false for groups 
AUTO_STICKER: process.env.AUTO_STICKER || "false",
// make true for automatic stickers 
AUTO_REPLY: process.env.AUTO_REPLY || "false",
// make true or false automatic text reply 
ALWAYS_ONLINE: process.env.ALWAYS_ONLINE || "false",
// maks true for always online 
PUBLIC_MODE: process.env.PUBLIC_MODE || "true",
// make false if want private mod
AUTO_TYPING: process.env.AUTO_TYPING || "false",
// true for automatic show typing   
READ_CMD: process.env.READ_CMD || "false",
// true if want mark commands as read 
DEV: process.env.DEV || "923452401207",
//replace with your whatsapp number        
ANTI_VV: process.env.ANTI_VV || "false",
// true for anti once view 
AUTO_RECORDING: process.env.AUTO_RECORDING || "false"
// make it true for auto recoding 
};
