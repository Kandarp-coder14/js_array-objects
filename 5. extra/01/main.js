// Your solution
1. var AnimalTestUser = function (username) {
    return {
    username: username  
  };
  }

  var testSheep = AnimalTestUser('CottonBall');
  console.log(testSheep);

1. var testSheep  = ('CottonBall',{'loves dancing': true}, [1,2,3] );
 console.log(testSheep);


1. var AnimalCreator = function(username, species, tagline, noises) {
  return {
  username: username, 
  species: species,
  tagline:tagline,
  noises: noises, 
  friends: []
  };
 }

 var sheep = AnimalCreator('Cloud', 'sheep', 'You can count on me!', ['baahhh', 'arrgg', 'chewchewchew']); 

  console.log(sheep);


1. function addFriend(animal, friend) {  
 animal.friends.push(friend.username);

1. var cow = {username: 'Moo', species: 'cow'}; 

  addFriend(sheep, cow);       

  console.log(sheep); 

1. var cow2 = AnimalCreator('pp', 'cow', 'You love me!', ['baahhh']); 
  var llama = AnimalCreator('pp', 'llama', 'me!', ['Moo']); 

  var myFarm = [sheep, cow2, llama]; 

  addFriend(cow2, sheep); 
  addFriend(llama, sheep); 

  console.log(myFarm); 


1. function addMatchesArray (farm, item) {
  for(var i = 0; i < farm.length; i++) {
    farm[i].matches = [];  
  }; 
  }

  addMatchesArray(myFarm, 'matches'); 

  console.log(myFarm[0]); 

1. function giveMatches(farm) {
    for (var i = 0; i < farm.length ; i++) {
      farm[i].matches.push(farm[i].friends[0]); 
    }
   }

  giveMatches(myFarm);
  console.log(myFarm);

  var arr = []; 
  console.log(arr.push([]));