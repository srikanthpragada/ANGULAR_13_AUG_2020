var a : number[] = []; 


for (var i = 1; i <= 10; i ++)
     a.push(i*i)

// Indexes of the array 
for(var idx in a)     
 console.log(idx)

// Values of the array 
for(var n of a)     
  console.log(n)

a.splice(0,3)   // Remove 3 elements from index 0 
console.log(a)
