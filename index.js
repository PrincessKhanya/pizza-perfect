const express=require("express");
const exphbs = require("express-handlebars");
const bodyParser=require("body-parser"); 
const PizzaCart = require("./pizza-cart");


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

app.get("/", function(req, res){
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



const PORT = process.env.PORT || 7008;
app.listen(PORT, function(){
	console.log('started');
});
