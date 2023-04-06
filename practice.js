
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
    
    
    console.log(r);
    // Create an array with 0s and 1s, 1s representing people already there
    
    // [0,1,0,0,0,1,0,0,0,0]
    
    // This is that hard part
    let newstatus = false;
    
    for(let z = 0; z < r.length; z++){
      newstatus = false;
      for(let y = 0; y <= K; y++){
        // something wrong here
        if(r[(z+y)] == 0 && r[(z-y)]==0){
          newstatus = true;
        }else{
          newstatus = false;
        }
      }
      
      if(newstatus == true && r[z] == 0){
        r[z] =1;
        count++;
      }
    }
    console.log(r);
    return count;
    // Go through that array and change 0 to 1 if it's > K from a 1
                        
    // Count how often you change the array
    // return count
  }