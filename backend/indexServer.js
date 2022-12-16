const express = require('express');
const { Client } = require('pg')

const port = 2612;
const app = express();

const simonDb = new Client({
    user: 'postgres',
    host: 'localhost',
    database: 'postgres',
    password: '',
    port: 5432

})


app.post('/leaderboard', (req, response) => {
    simonDb.query(`INSERT INTO leaderboard (pseudo, score) VALUES ($1, $2)`, [req.name, req.score], (err, res) => {
        if(err){
            console.error(err.stack)
            response.status(500)
        }else{
            response.send(res.rows)
        }
    })
})



app.get('/leaderboard', (req, res) => {
    simonDb.query('SELECT * FROM leaderboard ORDER BY score ASC', (err, res) => {
        if(err){
            console.error(err.stack)
            res.status(500)
        } else {
            // res.json(res.rows)
            console.log(res.rows)
        }
    })
})

simonDb.connect((err) => {
    if(err){
        console.log('Erreur de connexion à la base de données')
    } else {
        console.log('Connexion réussi à la base de données.')
    }
})

app.listen(port, () => {
    console.log(`Le serveur est démarée sur le port: ${port}`)
})