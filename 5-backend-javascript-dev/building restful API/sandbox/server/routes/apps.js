const express = require('express');
const appStore = require('../filestore');

let router = express.Router();


router.get('/:id?', (req, res) => {
    // let id = req.params.id;
    // if (id) {
        res.json(appStore.GetApp(id));
        // res.send('apps if echo ' + id);
    // } else {
        // res.send(appStore.GetApps());
        // res.send('apps else echo ' + id);
    // }
});

router.post('/',(req, res)=> {
    appStore.CreateApp(req.body);
    res.sendStatus(200);
});

module.exports = router;

