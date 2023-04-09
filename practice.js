
/**
 * @param {number} N
 * @param {number} K
 * @param {number} M
 * @param {number[]} S
 * @return {number}
 */
function getMaxAdditionalDinersCount(N, K, M, S) {
  // Write your code here
    let count = 0;
    let r = [];
    let status = false;
    for(let i =0; i < N; i++){
      status = false;
      for(let x = 0; x < S.length; x++){
        if(i==(S[x]-1)){
          status = true;
        }
      }
      if(status == false){
        r.push(0);
      }else{
        r.push(1);
      }
    }
    for(let x= 0; x < r.length; x++){
      if(r[x]==1){
        for(let t = 1; t <= K; t++){
          if(r[x-t]!= undefined){
          r[x-t] = 7;
          }
          if(r[x+t]!= undefined){
            r[x+t] = 2;
          }
        }
      }
    }  
  // now we have the taken seats and the unavailable seats like the brackets
  // now we just iterate through and for each 0 we add 1 to count, and create more brackets around it.
    for( let y =0; y < r.length; y++){
      if(r[y]==0){
        count++;
        r[y] =1;

        for( let g = 1; g <= K; g++){
          if(r[y+g]!=undefined){
          r[y+g] = 2;
          }
          if(r[y-g]!= undefined){
            r[y-g] = 7;
          }
        }
      }
    }
  return count;
}
