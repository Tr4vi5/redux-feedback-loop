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
    const queryText = `SELECT * FROM "feedback" ORDER BY "date" DESC;`;
    pool.query(queryText)
        .then((results)=>{
            res.send(results.rows);
        }).catch((error)=> {
            console.log('Error getting data from database', error);
            res.sendStatus(500);
        });
}); // end get route

app.post('/feedback', (req, res) => {
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
}); // end post route

app.delete('/feedback/delete/:id', (req,res) => {
    const queryText = `DELETE FROM "feedback" WHERE "id" = $1;`;
    pool.query(queryText, [req.params.id])
        .then((results) => {
            console.log('Success deleting from database');
            res.sendStatus(200); 
        }).catch((error)=>{
            console.log('Error deleting from database', error);
            res.sendStatus(500);
        });
});// end delete route

app.put('/feedback/flag/:id', (req,res) =>{
    const queryText = `UPDATE "feedback" SET "flagged" = NOT "flagged" WHERE "id" = $1;`;
    pool.query(queryText, [req.params.id])
        .then((results)=>{
            console.log('Success in put request');
            res.sendStatus(200);
        }).catch((error)=>{
            console.log('Error in put request', error);
            res.sendStatus(500);
        });
}); // end put route

/** ---------- START SERVER ---------- **/
app.listen(port, function () {
    console.log('Listening on port: ', port);
});