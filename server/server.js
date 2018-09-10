const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const port = process.env.PORT || 5000;
const pool = require('./modules/pool.js');

/** ---------- MIDDLEWARE ---------- **/
app.use(bodyParser.json()); // needed for angular requests
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('build'));

/** ---------- EXPRESS ROUTES ---------- **/

app.get('/feedback', (req,res) => {
    const queryText = `SELECT * FROM "feedback";`;
    pool.query(queryText)
        .then((results)=>{
            console.log(results.rows);
            res.send(results.rows);
        }).catch((error)=> {
            console.log('Error getting data from database', error);
            res.sendStatus(500);
        });
});

app.post('/feedback', (req, res) => {
    console.log('POST success', req.body);
    const queryText = `INSERT INTO "feedback" ("feeling", "understanding", "support", "comments")
                        VALUES ($1, $2, $3, $4);`
    pool.query(queryText, [req.body.feeling, req.body.understanding, req.body.support, req.body.comments])
        .then((results) => {
            console.log('Success inserting into feedback database', results);
            res.sendStatus(201);
        }).catch((error) => {
            console.log('Error inserting into feedback database', error);
            res.sendStatus(500);
        });
});

/** ---------- START SERVER ---------- **/
app.listen(port, function () {
    console.log('Listening on port: ', port);
});