const express = require('express');
const bodyparser = require('body-parser');
const cors = require('cors');
const mysql = require('mysql2');
const { throwError } = require('rxjs');

const app = express();

app.use(cors());
app.use(bodyparser.json());
// connecter ma base de donnée
const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'saverdb',
    port: '3306',
})
db.connect(err => {
    if (!err) {
        console.log("connexion reussite");
    } else {
        console.log(err);
    }
})

app.listen(3000, () => {
    console.log("serve running to http://localhost:3000")
})
app.get('/users', (req, resp) => {
    let requete = 'SELECT * FROM `users` WHERE 1';
    db.query(requete, (err, result) => {
        if (err) {
            console.log(err);
        } else {
            if (result.length > 0) {
                resp.send(
                    {
                        message: 'all users',
                        data: result,
                    }
                )
                console.log("data reclaim");
            }
        }
    })
})
app.get('/login', (req, resp) => {
    console.log('fffffffffffffffffffffffffffffff');
    let email = req.query.email;
    console.log(email);
    let password = req.query.password;
    let requete = "SELECT * from `users` WHERE  `email`= '" + email + "' and `password`= '" + password + "'";
    db.query(requete, (err, result) => {
        if (err) {
            console.log(err);
            return err;
        } else {
            console.log(result.data);
            if (result.length > 0) {
                resp.send(
                    {
                        message: 'user ',
                        data: result,
                    }
                )
                console.log("data reclaim");
            } else {
                console.log("introuver");
                return err = new Error("pas trouver");
            }
        }
    })
})
app.post('/add-user', (req, res) => {
    const data = req.body;
    let requete = " INSERT INTO`users`( `name`, `lastname`, `email`, `password`) VALUES('" + data.firstname + "', '" + data.lastname + "', '" + data.email + "', '" + data.password +"')";
    db.query(requete, (err, result) => {
        if (err) {
            console.log(err);
        } else {
            res.status(201).json({ message: "reussir" });
        }
    });
})