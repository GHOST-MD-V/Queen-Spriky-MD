const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}

module.exports = {
    SESSION_ID: process.env.SESSION_ID || 'PRABATH-MD~IvkU3TpD#w86wDgivD1YePT6QGzk-TUn4wCQ7RvtS4h-ESvomdQU', // Enter Your Session ID
    MONGODB: process.env.MONGODB || '',// Enter Your MongoDB URL
    OWNER_NUMBER: process.env.OWNER_NUMBER || '94715898396',    // Enter Your Owner Number
};
