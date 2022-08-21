// const findTheOldest = function(people) {
//   return people.reduce((oldest, person) => {
//     const oldestAge = getAge(oldest.yearOfBirth, oldest.yearOfDeath);
//     const personAge = getAge(person.yearOfBirth, person.yearOfDeath);
//     return personAge > oldestAge ? person : oldest;
//   });
// };

const findTheOldest = function(people) {
  return people.reduce((oldest, person) => {
    const age = getAge(person.yearOfBirth, person.yearOfDeath);
    if (oldest.name) {
      const oldestAge = getAge(oldest.yearOfBirth, oldest.yearOfDeath);
      return age > oldestAge ? person : oldest;
    }
    else {
      return person;
    }
  }, {});
};

const getAge = function(birth, death) {
  if (!death) {
    death = (new Date()).getFullYear();
  }
  return death - birth;
}

/* My sort solution */
// const findTheOldest = function(people) {
//   return people.sort((a, b) => {
//     let aAge = (!a.yearOfDeath) ? (new Date()).getFullYear() - a.yearOfBirth :
//         a.yearOfDeath - a.yearOfBirth;
//     let bAge = (!b.yearOfDeath) ? (new Date()).getFullYear() - b.yearOfBirth :
//         b.yearOfDeath - b.yearOfBirth;

//     return aAge > bAge ? -1 : 1;
//   })[0];
// };

// Do not edit below this line
module.exports = findTheOldest;
