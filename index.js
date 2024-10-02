// Code your solution here
// const drivers = ['Bobby', 'Sammy', 'Sally', 'Annette', 'Sarah', 'Bobby'];

function findMatching(drivers, name) {
    return drivers.filter(driver => driver.toLowerCase() === name.toLowerCase());
}
console.log(findMatching(drivers, 'Bobby'))


function fuzzyMatch(drivers, members) {
    return drivers.filter(driver => driver.toLowerCase().startsWith(members.toLowerCase()));
}
console.log(fuzzyMatch(drivers, 'Sa'))


const drivers = [
    { name: 'Bobby', hometown: 'Pittsburgh' },
    { name: 'Sammy', hometown: 'New York' },
    { name: 'Sally', hometown: 'Cleveland' },
    { name: 'Annette', hometown: 'Los Angeles' },
    { name: 'Bobby', hometown: 'Tampa Bay' }
];

function matchName(drivers, name) {
    return drivers.filter(driver => driver.name === name);
}
console.log(matchName(drivers, 'Bobby'))
