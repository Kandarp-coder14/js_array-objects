 
var penguin = {
character : "Whiteblack",
origin    : "Whiteblack the Penguin Sees the World",
author    : "H.A.Rey and Margaret Rey"
  };
  
penguin.outfit = {
hat : "baseball cap",
shirt : "Hawaiian shirt",
pants : "cargo shorts",
shoes : "flip-flops"
}
  console.log(penguin)
  
  var penguinHatType = penguin.outfit.hat;
  console.log(penguinHatType)
  
  penguin.outfit.watch = "pocket watch";
  
  penguin.outfit.hat = "top hat";
  
  delete penguin.pants;
  
  var values = [];
  for (var i in penguin.outfit) values.push(penguin.outfit[i]);
  console.log(values);