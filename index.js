/* const Caroline = {
    name: "Caroline",
    dob: 2004,
    graduated: false,
    age: function(){
        return 2020 - this.dob //dont use arrow func, will return global
    }
} */

/* const homer = {
    name: "Homer",
    age: 32,
    family: {
        wife: {
            name: "Marge"
        },
        son: {
            name: "Bart"
        }
    },
    pets: ["cat", "dog"]
} */

/* const haoran = {
    name:"Hao",
    dob: 2002,
    year: "senior",
    age: function(){
        return 2020 - this.dob //dont use arrow func, will return global
    }
} */

/* const eric = haoran //references to haoran
eric.name = "eric"
const christian = {}
//christian.dob = haoran.dob
christian.dob = 2003 */

/* const calculator = { //storing func in obj to protect
    add: //func x + y
    subtract: //func x - y
} */

const presidents = [
    { name: "Donald Trump", terms: 1, party: "R" },
    { name: "Barack Obama", terms: 2, party: "D" },
    { name: "George W. Bush", terms: 2, party: "R" },
    { name: "Bill Clinton", terms: 2, party: "D" },
    { name: "George H.W. Bush", terms: 1, party: "R" },
    { name: "Ronald Reagan", terms: 2, party: "R" },
    { name: "Jimmy Carter", terms: 1, party: "D" },
    { name: "Gerlad Ford", terms: 1, party: "R" },
    { name: "Richard Nixon", terms: 2, party: "R" },
    { name: "John F. Kennedy", terms: 1, party: "D" },
    { name: "Lyndon Johnson", terms: 2, party: "D" },
    { name: "Dwight Eisenhower", terms: 2, party: "R" }
  ];
   
  //Challenge Questions
  //1) Filter all presidents, leaving only the Democratic ones

  /*const result = presidents.filter(president => president.party === "D" )
  console.log(result)*/
   
  //2)Filter all presidents to leave only one term Republican presidents HINT use If statement

  /* console.log(presidents.filter(president => president.party === "R" 
  && president.terms === 1 )) */
  
  
  //3) return only the last three presidents
    /* const presLeng = presidents.length
    console.log(presidents.slice(presLeng-3, presLeng))  */
   
  //4) log all dems who served 2 terms. HINT use chain filter, filter and slice

    /* console.log(presidents.filter(president => president.party === "D" 
    && president.terms === 2 )) */

  //BONUS write a script to check if LBJ was a 2 term president. IF he was then alert("LBJ served two terms") else alert "LBJ was one and done"

     const LBJ = presidents[presidents.length-2]
    if(LBJ.terms === 2){
        alert("𝕃𝔹𝕁 𝕤𝕖𝕣𝕧𝕖𝕕 𝕥𝕨𝕠 𝕥𝕖𝕣𝕞𝕤")
    }
    else{
        alert("𝕃𝔹𝕁 𝕨𝕒𝕤 𝕠𝕟𝕖 𝕒𝕟𝕕 𝕕𝕠𝕟𝕖")
    } 

    