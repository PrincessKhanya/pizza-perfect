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

app.get("/pizza/add", function(req,res){
	res.render("add-pizza")

})
let cost=0
app.post("/pizza/add/", function(req,res){
    let pizzaType=req.body.size;
    
    if (pizzaType==="medium"){
        cost+=65  
    }
    else if (pizzaType==="large"){
        cost+=85
    }
    else if (pizzaType==="small"){
        cost+=35
    }
    else if (pizzaType==="smallSub"){
        cost-=35
    }
    else if (pizzaType==="mediumSub"){
        cost-=65
    }
    else if (pizzaType==="largeSub"){
        cost-=85
    }
    console.log(cost)


    console.log(pizzaType)

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
