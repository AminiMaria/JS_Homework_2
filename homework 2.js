//exercice 02:
function diffrence (x,y){
    const arr3  =[];
   for(let i=0;i<x.length;i++){
       j=0;
       while(j<y.length ){
           if(x[i] == y[j]){
               arr3.push(x[i]);
           }
           j++;
       }
      
   }

    return(arr3);
}
console.log(diffrence([1, 2, 3], [100, 2, 1, 10]));
// exercice 01:
var P1 = {
    name : "maria",
    school: "USTHB",
    "birth-day": 28/01/2002
};
var p2 = {
    name : "maria",
    school: "USTHB",
    "birth-day" : 28/01/2002
};
console.log(JSON.stringify(P1) == JSON.stringify(p2));