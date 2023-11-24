const express = require('express');
const bodyparser = require('body-parser');
const cors = require('cors');
const mysql = require('mysql2');
const { throwError } = require('rxjs');

const app = express();

app.use(cors());
app.use(bodyparser.json());
// connecter ma base de donnée
// const db = mysql.createConnection({
//     host: 'localhost',
//     user: 'root',
//     password: '',
//     database: 'saverdb',
//     port: '3306',
// })
// db.connect(err => {
//     if (!err) {
//         console.log("connexion reussite");
//     } else {
//         console.log(err);
//     }
// })
const sqlite3 = require('sqlite3').verbose();

// Ouvrir une connexion à la base de données (ou créer un nouveau fichier si la base de données n'existe pas)
const db = new sqlite3.Database('data.db', (err) => {
    if (err) {
        console.error('Erreur lors de l\'ouverture de la base de données', err.message);
    } else {
        console.log('Connexion à la base de données réussie');
    }
});

app.listen(3306, () => {
    console.log("serve running to http://localhost:3306")
})
app.get('/users', (req, resp) => {
    let requete = 'SELECT * FROM `user` WHERE 1';
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
    let requete = "SELECT * from `user` WHERE  `email`= '" + email + "' and `password`= '" + password + "'";

    db.each(requete, (err, result) => {
        if (err) {
            console.log(err);
            return err;
        } else {
            console.log(result);
            if (result.length != 0) {
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
    let requete = " INSERT INTO`user`( `firstname`, `lastname`, `email`, `password`) VALUES('" + data.firstname + "', '" + data.lastname + "', '" + data.email + "', '" + data.password + "')";
    db.run(requete, (err, result) => {
        if (err) {
            console.log(err);
        } else {
            res.status(201).json({ message: "reussir" });
        }
    });
})
app.post('/add-file', (req, res) => {
    const data = req.body;
    console.log("toppppppppp");
    let requete = " INSERT INTO `files`( `name_file`, `categories`, `filePath`, `user_id`) VALUES('" + data.fileName + "', '" + data.fileCategory + "', '" + data.filePath + "', '" + data.userId + "')";
    db.run(requete, (err, result) => {
        if (err) {
            console.log(err);
        } else {
            res.status(201).json({ message: "reussir" });
        }
    });
})
app.get('/select-file', (req, res) => {
    let user_id = req.query.user_id;
    console.log(user_id);
    let requete = 'SELECT * FROM `files` WHERE `user_id`='+user_id ;

    db.all(requete, (err, result) => {// utiliser le all pour recuperer beaucoup d'info a la fois 
        if (err) {
            console.log(err);
            return err;
        } else {
            // console.log(result.length);
            if (result.length != 0) {
                console.log(result);
                res.send(
                    {
                        message: "yours files",
                        data: result,
                    }
                )
                return true;
            } else {
                res.send(
                    {
                        message: "you haven't data",
                        data: result,
                    }
                )
                return false;
            }
        }

    }
    )
})