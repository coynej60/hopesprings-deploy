const express = require('express');
const bodyParser = require("body-parser");
const cors = require('cors');
const request = require('request');
const router = express.Router();
const app = express();
const port = process.env.port || 3001;

app.use(cors());
app.options('*', cors());
app.use(bodyParser.urlencoded({ extended: false}));
app.use(bodyParser.json());
app.use("/", router);

router.get('/', (req, res) => res.send('Hello World'));

router.post('/email', (req, res) => {
    console.log(req.body);
    request.post({
        headers: { 'Content-Type': 'application/json', 
                   'api-key': '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', 
                   'Accept': 'application/json'
                 },
        url: 'https://api.sendinblue.com/v3/smtp/email',
        body: JSON.stringify(req.body)
    }, function(error, response, body) {
        console.log(body);
        res.send(response);
    });
});

app.listen(port, () => console.log(`http://localhost:${port}`));