const meta = (s)=>{
    let tempword = "";
    let permwords = [];
    for(let i =0; i<s.length; i++){
        if(s[i]==' '){
            permwords.push(tempword);
            tempword = "";
        }else{
            tempword += s[i];
        }
    }
    permwords.push(tempword);
    tempword = "";
    let x = [];
    for(let p = permwords.length-1; p >=0 ; p--){
        x.push(permwords[p]);
    }
    let ans = "";
    for(let z = 0; z < x.length; z++){
        ans+= x[z];
        ans += " ";
    }
    let h = [];
    for (let f = 0; f < ans.length; f++){
        h.push(ans[f]);
    }
    h.pop();
    let final = "";
    for (let g = 0;g < h.length;g++){
        final+=h[g];
    }
    console.log(final);
    return final;
}
meta("i love you");
meta("reverse this string");