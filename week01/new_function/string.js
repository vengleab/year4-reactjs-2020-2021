console.log("Is start with 'ello' ",  "Hello".startsWith('ello'));


console.log("Repeat", "he".repeat(3))

let n =5
let txt = "";
for(let i =0; i<n;i++) {
  
  for(let j = 0; j<n; j++ ) {
    txt += "* "
  }
  txt += "\n"
}
console.log(txt)
let txt2 = "";
for(let i=0; i<n; i++){
  txt2+= "* ".repeat(n); 
  txt2+= "\n";
}

console.log("===========")
console.log(txt2)