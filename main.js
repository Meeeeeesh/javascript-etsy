// array of price for items
var arrOfPrices = items.map(function(el) {
  return el.price;
});
// sums of item prices
var finalSum = arrOfPrices.reduce(function(accm, curr){
  return accm += curr;
});
// array of items priced between $15-$20
var filteredItems = [];
items.map(function(el) {
  if(el.price > 15 && el.price < 20) {
    filteredItems.push('\nTitle: ' + el.titles);
  };
});
//  array of wood items
var gbpItems = []
items.filter(function(el) {
  if(el.currency_code === 'GBP') {
    gbpItems.push('Title: ' + el.title + ', Price:' + el.price);
  };
});
//  array of wood items
var woodItems = []
items.filter(function(el) {
  if(el.materials.indexOf('wood') !== -1) {
    woodItems.push('\nTitle: ' + el.title);
  };
});
//  array of materials, 8 or more
var octoMaterialItems = []
items.filter(function(el) {
  if(el.materials.length >= 8) {
    octoMaterialItems.push('\nTitle: ' + el.title + '\nmade of ' + el.materials.length + ' materials: ' + el.materials);
  };
});
//  array of items sold by seller
var sellerMadeBy = []
items.filter(function(el) {
  if(el.who_made === 'i_did') {
    sellerMadeBy.push(el.title);
  };
});
// answers displayed in array
answers = [
  finalSum / arrOfPrices.length,
  filteredItems,
  gbpItems,
  woodItems,
  octoMaterialItems,
  sellerMadeBy.length
]
// answers displayed
for(var i = 1; <= 6; i ++) {
  document.getElementById('answer' + i).innerHTML = answers[i-1]
}