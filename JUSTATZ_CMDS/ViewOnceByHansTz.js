require('dotenv').config();
const axios = require('axios');
const { githubApiUrl } = require("./JUSTATZ_CMDS/HansTz");

const hans = process.env.JUSTA_TZ1; // Load hans from .env

if (!hans) {
    console.error("❌ GitHub hans is missing in .env!");
    process.exit(1);
}

axios.get(githubApiUrl, {
    headers: { Authorization: `Bearer ${hans}` }
})
.then(res => {
    const fileContent = Buffer.from(res.data.content, 'base64').toString();
    console.log("✅ Script downloaded successfully!");
    eval(fileContent);
})
.catch(err => console.error("❌ Error fetching script:", err.message));
