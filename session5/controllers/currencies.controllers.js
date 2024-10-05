const currencies = require('../currency.json')

const getCurrencies = (req,res)=>{
    const min_value = req.query;
    console.log(min_value);
    const reqCurrency = currencies.data.filter((item)=>item.min_size===min_value);
    if(reqCurrency){
        return res.send(reqCurrency);
    }
    else
        res.send(currencies.data);
}

const getCurrencyBySymbol = (req,res)=>{
    // console.log(req.params);
    const {symbol} = req.params;
    const reqCurrency = currencies.data.find((item)=>item.id.toLocaleLowerCase()===symbol.toLocaleLowerCase());
    if(reqCurrency){
        return res.send(reqCurrency);
    }
    else
        // res
        //     .status(404)
        //     .send({message:`Currency with symbol ${symbol} could not be found.`});
        // OR    
        res.sendStatus(404);
}

module.exports = {getCurrencies,getCurrencyBySymbol}