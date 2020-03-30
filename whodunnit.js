console.log("Episode 1: Miss Scarlet");

const scenario = {
  murderer: 'Miss Scarlet',
  room: 'Library',
  weapon: 'Rope'
};

const declareMurderer = function() {
  return `The murderer is ${scenario.murderer}.`;
}

const verdict = declareMurderer();
console.log(verdict);

console.log("Episode 2: Mrs. Peacock")
console,log("Error, identifier 'declareMerderer' has already been declared.")

let murderer = 'Professor Plum';

let changeMurderer = function() {
  murderer = 'Mrs. Peacock';
}

let declareMurderer = function() {
  return `The murderer is ${murderer}.`;
}

changeMurderer();
let verdict = declareMurderer();
console.log(verdict);

console.log("Episode 3: firstVerdict is Mrs. Peacock and secondVerdict is Professor Plum");

let murderer = 'Professor Plum';

const declareMurderer = function() {
  let murderer = 'Mrs. Peacock';
  return `The murderer is ${murderer}.`;
}

const firstVerdict = declareMurderer();
console.log('First Verdict: ', firstVerdict);

const secondVerdict = `The murderer is ${murderer}.`;
console.log('Second Verdict: ', secondVerdict);

console.log("Episode 4: Colonel Mustard is suspect three");

let suspectOne = 'Miss Scarlet';
let suspectTwo = 'Professor Plum';
let suspectThree = 'Mrs. Peacock';

// suspect three was changed to Colonel Mustard within the code block but outside suspect three was unchanged
const declareAllSuspects = function() {
  let suspectThree = 'Colonel Mustard';
  return `The suspects are ${suspectOne}, ${suspectTwo}, ${suspectThree}.`;
}

const suspects = declareAllSuspects();
console.log(suspects);
console.log(`Suspect three is ${suspectThree}.`);

console.log("Episode 5: The weapon is the Candle Stick");

const scenario = {
  murderer: 'Miss Scarlet',
  room: 'Kitchen',
  weapon: 'Candle Stick'
};

const changeWeapon = function(newWeapon) {
  scenario.weapon = newWeapon;
}

const declareWeapon = function() {
  return `The weapon is the ${scenario.weapon}.`;
}
// Revoler value is hoisted to string interpoltian
changeWeapon('Revolver');
const verdict = declareWeapon();
console.log(verdict);

console.log("Episode 6: The murderer is Mr. Green");

let murderer = 'Colonel Mustard';

const changeMurderer = function() {
  murderer = 'Mr. Green';

  const plotTwist = function() {
    murderer = 'Mrs. White';
  }

  plotTwist();
}
// plotTwist function changes the murderer to Mrs. White within the changeMurderer function.

const declareMurderer = function () {
  return `The murderer is ${murderer}.`;
}

changeMurderer();
const verdict = declareMurderer();
console.log(verdict);

console.log("Episode 7: The murderer is Colonel Mustard")

let murderer = 'Professor Plum';

const changeMurderer = function() {
  murderer = 'Mr. Green';

  const plotTwist = function() {
    let murderer = 'Colonel Mustard';

    const unexpectedOutcome = function() {
      murderer = 'Miss Scarlet';
    }

    unexpectedOutcome();
  }

  plotTwist();
}
// murderer changes from Professor Plum to Mr. Green, plotTwist changes it to Colonel Mustard then unexpectedOutcome changes it to Miss Scarlet which calls unexpectedOutcome then plotTwist which changes it back to Colonel Mustard with the let variable then finsihes back with Mr. Green.
const declareMurderer = function() {
  return `The murderer is ${murderer}.`;
}

changeMurderer();
const verdict = declareMurderer();
console.log(verdict);

console.log("Episode 8: The weapon is Candle Stick");

const scenario = {
  murderer: 'Mrs. Peacock',
  room: 'Conservatory',
  weapon: 'Lead Pipe'
};

const changeScenario = function() {
  scenario.murderer = 'Mrs. Peacock';
  scenario.room = 'Dining Room';

  const plotTwist = function(room) {
    if (scenario.room === room) {
      scenario.murderer = 'Colonel Mustard';
    }

    const unexpectedOutcome = function(murderer) {
      if (scenario.murderer === murderer) {
        scenario.weapon = 'Candle Stick';
      }
    }

    unexpectedOutcome('Colonel Mustard');
  }

  plotTwist('Dining Room');
}

const declareWeapon = function() {
  return `The weapon is ${scenario.weapon}.`
}

changeScenario();
const verdict = declareWeapon();
console.log(verdict);

console.log("Episode 9: Error on murderer assignment ");

let murderer = 'Professor Plum';

// change happens in code block so murderer vairable is not affected by change from Professor Plum
if (murderer === 'Professor Plum') {
  let murderer = 'Mrs. Peacock';
}

const declareMurderer = function() {
  return `The murderer is ${murderer}.`;
}

const verdict = declareMurderer();
console.log(verdict);

console.log("Episode 10");

const scenario = {
  murderer: 'Colonel Mustard',
  room: 'Study',
  weapon: 'Revolver',
  victim: 'Mr. Green'
};

const changeRoom = function(room) {
  scenario.room = 'Bathroom'
}

const changeMurderer = function(newMurderer) {
 scenario.murderer = newMurderer;
 scenario.victim = 'The Monopoly Guy';

 const changeWeapon = function(newWeapon) {
   scenario.weapon = newWeapon
 }
 changeRoom();

 const plotTwist = function(room) {
   if (scenario.room === room) {
     scenario.murderer = 'Ronald McDonald';
   }
 }
 changeWeapon('Sledge Hammer');
}


changeMurderer('Mrs. White')
const declareWeapon = function() {
  return `${scenario.victim} was killed with the ${scenario.weapon} in the ${scenario.room} by ${scenario.murderer}`
}

const verdict = declareWeapon();
console.log(verdict);
