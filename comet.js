function returnMax(x){
    let mx = 0;
    for(let i =0; i < x.length; i++){
        if(x[i] > mx){
            mx = x[i];
        }
    }
    return mx;
}

function asteroid(r){
    let z = returnMax(r);
    console.log(`z is ${z}`);
}

asteroid([3,-2,1,5,-2,8,-3,0]);
// returnMax([3,-2,1,5,-2,8,-3,0]);

// answer is [3,1,5,8,0]

// ideas:   Find max, delete all negative numbers to the right of it.

