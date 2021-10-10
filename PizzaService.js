module.exports = function(pizzaList) {

	const pizzas = pizzaList || [];
	let cost = 0;

	function listAll() {

	}

	function addPizza(pizza) {
		if (pizzaType==="mediumPizza"){
			cost+=65  
		}
		else if (pizzaType==="largePizza"){
			cost+=85
		}
		else if (pizzaType==="smallPizza"){
			cost+=35
		}
		

	}

	function deletePizza(pizzaId){

	}

	function updatePizza(pizzaId) {

	}

	return {
		addPizza,
		deletePizza,
		updatePizza,
		listAll,
	}

}