// We will launch this in Node's watch mode
// 1) Open the terminal in VS Code
// 2) Change directory to this folder
//    cd src/A
// 3) Launch Node in Watch Mode
//    node --watch more-javascript.js
console.log('Ad-hoc JavaScript Samples');
console.log('=========================');

const log = console.log;
log('\nArrow Function Demo');
const greet =
    // Parameter list
    (speaker = 'JavaScript', audience = 'the world') =>
        // Function result 
        `[${speaker}] Hello to ${audience}`;

log(greet('Dan', 'DMIT-2008, Section A04'));
log(greet());

