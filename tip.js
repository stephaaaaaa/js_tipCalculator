var slider = document.getElementById("myRange");
var mealCost = document.getElementById("mealCost");
mealCost.oninput = function() {
  inputPercentField();
};
var total = document.getElementById("total");
mealCost.value = 0;
value.value = 0;

inputPercentField();
slider.oninput = function() {
  inputPercentField()
};

function inputPercentField() {

  var field = document.getElementById("percent");
  field.value = slider.value + "%";

  var mc = parseFloat(mealCost.value);
  var tip = parseFloat(mealCost.value * (slider.value * 0.01));
  var total = mc + tip;

  value.value = total.toFixed(2);
}
