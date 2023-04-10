/**
 * @param {number} N
 * @param {number} K
 * @param {number} M
 * @param {number[]} S
 * @return {number}
 */
function getMaxAdditionalDinersCount(N, K, M, S) {
    let r = [];
        for(let i =0; i < N; i++){
            if(S.includes(i+1)){
                r.push(1);
                for(v = 1; v <= K; v++){
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
        let count = 0;
        for (let x =0; x < r.length; x++){
            if(r[x] == 0){
                count++;
                x+=K;
            }
        }
      return count;
    }    