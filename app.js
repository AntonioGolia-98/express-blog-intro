const express = require("express")
const app = express()
const port = 3000

app.use(express.static("public"));

//rotta home 
app.get("/", (req, res) => {
    res.send("Server del mio Blog");
})

//rotta bacheca
app.get("/bacheca", (req, res) => {
    const prodotti = [
        {
            id: 1,
            titolo: "ciambellone",
            contenuto: "imagine ciambellone",
            image: "images/ciambellone.jpeg",
            tags: ["latte, uova, zucche"]
        }, {
            id: 2,
            titolo: "cracker barbabietola",
            contenuto: "imagine cracker di barbaabietola",
            image: "public/images/cracker_barbabietola.jpeg",
            tags: ["cracker, barbabietola"]
        }, {
            id: 3,
            titolo: "pane fritto dolce",
            contenuto: "imagine di pane fritto dolce",
            image: "images/pane_fritto_dolce.jpeg",
            tags: ["pane, dolce, zucchero"]
        }, {
            id: 4,
            titolo: "pasta barbabietola",
            contenuto: "imagine di pasta di barbabietole",
            image: "images/pasta_barbabietola.jpeg",
            tags: ["pasta, barbabietola"]
        }, {
            id: 5,
            titolo: "torta paesana",
            contenuto: "imagine torta paesana",
            image: "images/torta_paesana.jpeg",
            tags: ["torta, paese"]
        }
    ];

    res.json(prodotti);
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})