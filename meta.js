const meta = (s)=>{
    console.log("anna graham");
    console.log(s);
    console.log(`${s} is ${s.length} long`);
    let x= 2**(s.length-1);
    console.log(`${x} is x`);
    let answers = [];
    answers.push(s);
    let rev = "";
    for(let i =s.length-1; i>=0; i--){
        rev += s[i];
    }
    answers.push(rev);
    console.log(`ans = ${answers}`);
}

meta("cat");
