// const express = require('express');
// const exphbs  = require('express-handlebars');
// const bodyParser=require("body-parser"); 

// const app = express();


// app.engine('handlebars', exphbs());
// app.set('view engine', 'handlebars');

// app.use(express.json());
// app.use(express.urlencoded());
// app.use(express.static('public'));

// add your routes here...

const express=require("express");
const exphbs = require("express-handlebars");
const bodyParser=require("body-parser"); 

const app = express();

app.engine("handlebars",exphbs({
    partialsDir: "./views/partials",
    viewPath:  './views',
    layoutsDir : './views/layouts'
}));


app.set("view engine","handlebars");

app.use(express.static("public"));

app.use(bodyParser.urlencoded({ extended: false }))

app.use(bodyParser.json())


app.get("/pizzas", function(req, res){
	res.render("index")
})



const PORT = process.env.PORT || 7008;
app.listen(PORT, function(){
	console.log('started');
});
