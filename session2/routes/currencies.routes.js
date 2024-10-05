
const router = require('express').Router();
const { getCurrencies, getCurrencyBySymbol } = require('../../session3/controllers/currencies.controllers.js');
const currencies = require('../../currency.json')

router.get('/',(req,res)=>{
    const min_value = req.query;
    const reqCurrency = currencies.data.filter((item)=>item.min_size===min_value);
    if(reqCurrency){
        return res.send(reqCurrency);
    }
    else
        res.send(currencies.data);
});
router.get('/:symbol',getCurrencyBySymbol);

module.exports = router;


