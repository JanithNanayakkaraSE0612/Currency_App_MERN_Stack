const express = require("express");
const cors = require("cors");
const axios = require("axios");

const app = express();

//middle wares
app.use(express.json());
app.use(cors());

app.get("/getAllCurrencies",async(req,res)=>{
    const namesUrl = 'https://openexchangerates.org/api/currencies.json?app_id=b62a2f9c1f1649af8cbd403d2dd3ae1c';
  
    try {
        const namesResponse = await axios.get(namesUrl);
        const nameData = namesResponse.data;
        return res.json(nameData);
    } catch (error) {
        console.error(error);
    }
})
//listen to a part
app.listen(5000,()=>{
    console.log("Server started");
})