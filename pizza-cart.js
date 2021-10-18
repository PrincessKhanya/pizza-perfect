module.exports = function PizzaCart() {
	var totalCost = 0;
	var totalCostSmall=0;
	var totalCostMedium=0;
	var totalCostLarge=0;
	var countSmall=0;
	var countMedium=0;
	var countLarge=0;

	function add(pizzaId) {
		if(pizzaId==="small"){
			countSmall++;
			pizzaCalcValue();
		}else if (pizzaId==="medium"){
			countMedium++;
			pizzaCalcValue();
		}else if(pizzaId==="large"){
			countLarge++;
			pizzaCalcValue();
		}else if(pizzaId==="smallSub"){
			if(countSmall<=0){
				countSmall=0;
			}else{
				countSmall--;
			}
			pizzaCalcValue();
		}else if (pizzaId="mediumSub"){
			if(countMedium<=0){
				countMedium=0;
			}else{
				countMedium--;
			}
			pizzaCalcValue();
		}else if (pizzaId==="largeSub"){
			if(countLarge<=0){
				countLarge=0;
			}else{
				countLarge--;
			}
			pizzaCalcValue();
		}

	}

	function pizzaCalcValue(){
		totalCostSmall=countSmall*20;
		var totalCostSmall1=totalCostSmall.toFixed(2);
	
		totalCostMedium=countMedium*90;
		var totalCostMedium1=totalCostMedium.toFixed(2);
	
		totalCostLarge=countLarge*140;
		var totalCostLarge1=totalCostLarge.toFixed(2);
	
		totalCost = totalCostSmall + totalCostMedium + totalCostLarge;
		var totalCost1=totalCost.toFixed(2);
	};

	function remove(pizzaId) {

	}

	function list() {
		
	}

	return {
		add,
		remove,
		list
	}

}