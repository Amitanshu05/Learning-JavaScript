const myObject = {
    js : 'javascript',
    cpp: 'c++',
    rb: 'ruby',
    swift: 'swift by apple'
}

for (const key in myObject) {
//   console.log(`${key} shortcut is for ${myObject[key]}`);
}

const programming = ["js","cpp","java","rb","swift"]

for (const key in programming) {
    // console.log(programming[key]);
}

// const map = new Map();

// map.set("IN", "INDIA");
// map.set("USA", "UNITED STATES");
// map.set("FR", "FRANCE");

// for (const key in map) {
//    console.log(key);
// }


//**********************summary************************/


// Use for...of → When you want values from arrays, strings, etc.

// Use for...in → When you want keys/properties from objects.