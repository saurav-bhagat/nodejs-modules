
const express = require('express');
const bodyParser = require('body-parser');
const path = require("path");

const app  = express();


app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// app.use(express.static(path.join(__dirname, 'public')));
app.set("view engine", "ejs");

// app.get('/', (req, res) => {
    
//     res.write("<h1>First line</h1>");
//     res.write("<h2>Second name</h2>");

//     res.send();
// });

app.get('/', (req, res) => {
    res.render('index', {
        name: 'rohit',
        state: 'Jharkhand'
    });
});

app.get('/about', (req, res) => {

    var mascots = [
        { name: 'Sammy', organization: "DigitalOcean", birth_year: 2012},
        { name: 'Tux', organization: "Linux", birth_year: 1996},
        { name: 'Moby Dock', organization: "Docker", birth_year: 2013}
    ];

    res.render('about', {
        mascots: mascots
    });
});

app.get('/contact', (req, res) => {
    res.render('contact');
});

app.listen(3200, () => {
    console.log("App is listening at port 3200");
});