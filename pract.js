// N number of seats
// K is social distancing required distance
// M is number of people sitting already
// S is array of where their sitting down.
function cafeteria(N, K, M, S){
    let r = [];
    for(let i =0; i < N; i++){
        if(S.includes(i+1)){
            r.push(1);
            for(v = 1; v <= K; v++){
                console.log('try');
                if(r[i-K]!= undefined){

                    r[i-K] = 3;
                }
                r.push(3);
                i++;
            }
        }else{
            r.push(0);
        }
    }
    console.log(r);
    let count = 0;
    for (let x =0; x < r.length; x++){
        if(r[x] == 0){
            count++;
            x+=K;
        }
    }
    console.log(count);
    return count;
}

// cafeteria(10, 1, 2, [2,6]);

// cafeteria(15,2,3,[11,6,14]);

function wtf(S){
    for(const hiker of S){
        console.log(hiker);
    }
}
wtf([2,3,6]);