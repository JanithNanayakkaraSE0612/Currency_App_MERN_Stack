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
});

app.get("/convert",async(req,res)=>{
    const {date, sourceCurrency,targertCurrency,amountInSourceCurrency} =req.query;
    try {
        
        const dataUrl = `https://openexchangerates.org/api/historical/${date}.json?app_id=b62a2f9c1f1649af8cbd403d2dd3ae1c`
        const dataResponse = await axios.get(dataUrl);
        const rates = dataResponse.data.rates;

        const sourceRate = rates[sourceCurrency];
        const targetRate = rates[targertCurrency];

        const targetAmount = (targetRate / sourceRate) * amountInSourceCurrency;

        return res.json(targetAmount);
    } catch (error) {
        console.log(error);
    }
})
//listen to a part
app.listen(5000,()=>{
    console.log("Server started");
})