const express = require("express");
const app = express();
const port = 3000;
const path = require("path");
const carData = require('./data.json');
let car;
let carimg;

app.use(express.static(path.join(__dirname, 'public')))
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, '/views'))

app.get('/', (req, res)=>{
    car = carData.map(carname => {
        return carname.Name;
    })
    res.render('home', {car})
})

app.get('/chevroletchevellemalibu', (req, res)=>{
    car = carData[0].Name
    carimg = carData[0].image;
    res.render('car1', {car, carimg})
})

app.get('/buickskylark320', (req, res)=>{
    car = carData[1].Name
    carimg = carData[1].image;
    res.render('car2', {car, carimg})
})


app.get('/plymouthsatellite', (req, res)=>{
    car = carData[2].Name
    carimg = carData[2].image;
    res.render('car3', {car, carimg})
})

app.get('/amcrebelsst', (req,res)=>{
    car = carData[3].Name
    carimg = carData[3].image;
    res.render('car4', {car, carimg})
})

app.listen(port, (err)=>{
    if (err) {
        console.log("error")
    } else {
        console.log(`listining to the port: ${port}`)
    }
})