// function getArtisticPhotographCount(N, C, X, Y) {
//     // Write your code here
//     let count = 0;
//     let artistics = 0;
//     let ps = 0;
//     let bs = 0;
//     let px = 0;
//     let bx = 0;
   
//     for(let i =0; i < N; i++){
//       if(C[i] == "A"){
//         console.log(`possible artistic actor ${C[i]}`);
//         for(let z = i-X; z >= i-Y; z-- ){
//           if(C[z] =="P"){
//             console.log(`p`);
//             ps++;
//           }
//           if(C[z] == "B"){
//             console.log('bx');
//             bx++;
//           }
//         }
//         for(let k = i+X; k <= i+Y; k++){
//           if(C[k]== "B"){
//             console.log(`b`);
//             bs++;
//           }
//           if(C[k]=="P"){
//             console.log('px');
//             px++;
//           }
//         }
//         if(ps >= bs && bs > 0){
//           artistics += ps*bs;
//         }
//         if(bs > ps && ps > 0){
//           artistics += bs*ps;
//         }
//         if(px >= bx && bx > 0){
//             artistics += px*bx;
//         }
//         if(bx > px && px > 0){
//             artistics += bx*px;
//         }
//       }
//       console.log(`artistics is at ${artistics}`);
//       count+= artistics;
//       console.log(`count is at ${count}`);


//       artistics = 0;
//       bs = 0;
//       ps = 0;
//       bx = 0;
//       px = 0;
//     }
//     console.log(count);
//     console.log("******");
//     return count;
//   }
//   getArtisticPhotographCount(11,["P",".","A","P",".","A","B", "A",".",".","B"], 1, 11);

  //A   2
  //A   4
  //A   2


//   function getMaximumEatenDishCount(N, D, K) {
//     // Write your code here
//     let dishesIrecentlyate = [];
//     let count = 0;
//     for(let i =0; i < N; i++){
//       if(dishesIrecentlyate.includes(D[i])!= true){
//         dishesIrecentlyate.push(D[i]);
//         count++;
//         if(dishesIrecentlyate.length > K){
//           dishesIrecentlyate.shift();
//         }
//       }
//     }
//     return count;
//   }

  function getMaximumEatenDishCount(N, D, K) {
    // Write your code here
       let dishesIrecentlyate = [];
       let count = 0;
       for(let i =0; i < N; i++){
         if(dishesIrecentlyate.includes(D[i])!= true){
           dishesIrecentlyate.push(D[i]);
           count++;
           if(dishesIrecentlyate.length > K){
             dishesIrecentlyate.shift();
           }
         }
       }
       return count;
   }

  

    getMaximumEatenDishCount(5,[12,13,2,1,2], 2);