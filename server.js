const express = require('express');
const app = express();

app.set("view engine", "ejs");

app.get("/", function (req, res){
    res.render("pages/index")
})


app.get("/sobre", function(req, res){
    res.render("pages/about");
})

app.get("/contact", function (req, res){
    res.render("pages/contact");
})

app.get("/conteudo", function(req,res){
    res.render("pages/contents")
})

app.get("/node", function(req,res){
   res.render("pages/page_contents/node")
})

app.get("/javascript", function(req,res){
    res.render("pages/page_contents/javascript")
})

app.get("/python", function(req,res){
    res.render("pages/page_contents/python")
})

app.get("/ejs", function(req,res){
    const items =[
        {
            title:"D",
            message: "esenvolver aplicações/serviços de forma mais fácil"
        },
        {
            title: "E",
            message: "JS usa javascript para renderizar HTML"
        },
        {
            title: "M",
            message: "UITO fácil de usar"

        },
        {
            title: "A",
            message: "ceita uma espécie de modulos"
        },
        {
            title:"I",
            message: "nstale já"
        },
        {
            title:"S",
            message: "er ou não ser, eis a questão"
        }
    ];
    const subtitle = "uma linguagem de modelagem para criação de páginas HTML que usa JS"
    res.render("pages/page_contents/EJS",{
        qualitys: items,
        subtitle: subtitle,
    });c
})

app.listen(8080)
console.log('servidor rodando, código 200')