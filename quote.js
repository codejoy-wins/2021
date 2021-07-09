console.log("Created By Max Jann");
let people =[];
// Ideally Person would be an object and their vehicle would be a nested object so they can have more than one.  Also I think I could Use SQL to store different submissions securely.
// reset form code:
// document.getElementById("master").reset();
document.getElementById("reset").addEventListener(
    "click", function(){
        console.log("resetting form");
        document.getElementById("master").reset();
    }
)
document.getElementById("master").addEventListener("submit", function(event){
    event.preventDefault();
    let first = document.getElementById("first").value;
    let last = document.getElementById("last").value;
    let dob = document.getElementById("dob").value;
    let person = {};
    if(first.length <1){
        alert("Enter First Name");
    }
    person.first = first;
    person.last = last;
    person.dob = dob;
    person.xp = document.getElementById("xp").value;
    person.year = document.getElementById("year").value;
    person.make = document.getElementById("make").value;
    person.model = document.getElementById("model").value;
    person.val = document.getElementById("val").value;
    person.length = document.getElementById("length").value;
    person.slides = document.getElementById("slides").value;
    person.vin = document.getElementById("vin").value;
    person.cc = document.getElementById("cc").value;
    person.safety = document.getElementById("safety").value;
    person.street = document.getElementById("street").value;
    person.city = document.getElementById("city").value;
    person.state = document.getElementById("state").value;
    person.zip = document.getElementById("zip").value;
    person.storestreet = document.getElementById("storestreet").value;
    person.storecity = document.getElementById("storecity").value;
    person.storestate = document.getElementById("storestate").value;
    person.storezip = document.getElementById("storezip").value;
    person.you = document.getElementById("you").value;
    person.secondfirst = document.getElementById("secondfirst").value;
    person.secondlast = document.getElementById("secondlast").value;
    person.seconddob = document.getElementById("seconddob").value;
    person.married = document.getElementById("married").value;
    person.single = document.getElementById("single").value;
    person.dlr = document.getElementById("dlr").value;



    // alert(`submitted data of ${first} ${last} to Access -- beta phase`);
    console.log(`submitting data of ${first} ${last}`);
    console.log(person);
    console.log(person.first);
    console.log(person.xp);
    console.log(`person.xp is ${person.xp}`);
    people.push(person);
    console.log(people);
    document.getElementById("info").innerHTML=`
    <h2>Past Submissions (complete info in console = right click and inspect element, click console tab, and expand the object arrow)</h2>
    `;
    for(var i =0; i<people.length; i++){
        document.getElementById("info").innerHTML+=`
        <div class="peep">
        <p>Name: ${people[i].first} ${people[i].last}</p>
        <p>Year, Make, Model and Value: ${people[i].year} ${people[i].make} ${people[i].model} $ ${people[i].val} </p>
        <p>${people[i].first} has ${people[i].xp} years of experience</p>
        </div>
        `
    }
    
  });

let timing = new Date;

let theHour = timing.getHours();

console.log(`the hour is ${theHour}`)

let msg = "Hello";

if(theHour>=12&&theHour<=16){

    msg = "Good Afternoon"

}else if(theHour>16 && theHour <24){

    msg = "Good Evening"

}else if(theHour>0 && theHour <12){

    msg = "Good Morning"

}

console.log(`msg is ${msg}`)

 

document.getElementById("heading").innerHTML=`${msg}`



// checkbox could activate or hide 2nd driver info

// document.getElementById("you").addEventListener()