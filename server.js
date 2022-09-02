//INSTANCIAMENTO DO EXPRESS
const express = require('express');
const app = express();

//SET DE ENGINE HTML
app.set("view engine", "ejs");

//rota
app.get("/", function (req, res) {
    const items = [
        {
            title: "D",
            message: " ISSO AQUI TA VINDO DO JS"
        },
        {
            title: "E",
            message: " ISSO AQUI VAI TE DAR DINHEIROS"
        },
        {
            title: "M",
            message: " OPALA DIPLOMATA 95"
        }
        ,
        {
            title: "A",
            message: " Twitter > Linkedin"
        }
        ,
        {
            title: "I",
            message: " ISSO AQUI VAI TE DAR DINHEIROS"
        }
        ,
        {
            title: "S",
            message: " PHP COM LARAVEL É MARAVILHOSO"
        }


    ]
    res.render("pages/index",{
        qualidades : items
    })
})

app.get("/sobre", function (req, res) {
    res.render("pages/about")
})

app.listen(8080)