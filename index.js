const express=require("express");
const exphbs = require("express-handlebars");
const bodyParser=require("body-parser"); 
const PizzaCart = require("./pizza-cart");
const session = require('express-session');


const app = express();
const pizzaCart=PizzaCart();

app.engine("handlebars",exphbs({
    partialsDir: "./views/partials",
    viewPath:  './views',
    layoutsDir : './views/layouts'
}));


app.set("view engine","handlebars");

app.use(express.static("public"));

app.use(bodyParser.urlencoded({ extended: false }))

app.use(bodyParser.json())

app.use(session({ secret: 'keyboard cat', cookie: { maxAge: 60000 }}))

app.get("/", function(req, res){
    //create landing
    //box for user to enter name 
    //make it form has submit button
    res.render("landingpage")
    
})

app.post("/login", function(req, res){
    req.session.user=req.body.user
    // console.log(req.body.user)
    // console.log(req.body.password)
    // console.log(req.session)
    res.redirect("/pizzas")

})

app.get("/pizzas", function(req, res){
    res.render("index", {
        totals: pizzaCart.totals()
    });
})

app.get("/pizza/add", function(req,res){
	res.render("add-pizza")

})

app.post("/pizza/add/", function(req,res){
    pizzaCart.add(req.body.size);

	res.redirect("/pizzas")
	
})

app.get("/pizza/edit/:pizza_id", function(req,res){
    res.render("pizza/edit")
	let idPizza=req.params.pizza_id;

    res.send(idPizza)

	
})

app.post("/pizza/edit", function(req,res){
	let idPizza=req.params.pizza_id;
    res.send(idPizza)
	res.redirect("/pizzas")
	
}) 



// app.get("/pizza", function(req, res){
//     res.render("pizzas")
// })


const PORT = process.env.PORT || 7008;
app.listen(PORT, function(){
	console.log('started');
});
