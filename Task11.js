// Step 1: Build a class User
// The constructor parameters are name, xp and log. The name will be, trivially, the username. The xp is the
// accumulator that stores the XP points earned. The log is a sort of diary of the user: is an array that will
// store the id of the challenges solved by the user.
 
// Step 2: Build a method for the class User
// The name of the method to implement inside the class User is newSolvedChallenge() and as a parameter, it will
// accept an object of the Challenge class. 
// The method must increment the xp of the user and store the challenge id into the array log

// "VE" = "Very Easy"
// "EA" = "Easy"
// "ME" = "Medium"
// "HA" = "Hard"
// "VH" = "Very Hard"
// "EX" = "Expert"
var obj = {
    "VE": 5,
    "EA": 10,
    "ME": 20,
    "HA": 40,
    "VH": 80,
    "EX": 120
};
class User {
    constructor(name, xp, log) {
      this.name = name;
      this.xp = xp;
      this.log = log;
    }
    newSolvedChallenge(challenge) {
      this.xp += obj[challenge.level]
      this.log.push(challenge.id);
    }
  }

  class challenge{
    constructor(id,level){
    this.id =id;
    this.level=level;
  } }

  var user1 = new User("JAD", 0, []);
  console.log(user1);
  
  user1.newSolvedChallenge(new challenge(1,"ME"));
  // let o = {
  //   id: 2,
  //   level: 'ME'
  // };
  user1.newSolvedChallenge(new challenge(2,"ME"))
  user1.newSolvedChallenge(new challenge(3,"EA"))
  console.log(user1.xp);
  console.log(user1.log);
  
