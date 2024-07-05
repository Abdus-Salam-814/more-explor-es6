const numbers = [24, 55, 79.99, 80, 88, 99, 77, 20];
const selectResult = numbers.filter(n => n < 79.99);

console.log(selectResult);


const friends = ['Tom', 'Johan', 'Micheal', 'Oliver', 'Tim', 'joshna'];

const oddFriends = friends.filter(name => name.length % 2 === 1);
const friendLength = oddFriends.map(f => f.length);

console.log(oddFriends, '==', friendLength);


