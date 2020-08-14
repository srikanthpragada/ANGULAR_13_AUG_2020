function isMajor(age : number) : boolean {
    return age > 18;
}


var numbers = [45, 4, 9, 16, 25];
var over18 = numbers.filter(isMajor);

console.log(over18)

// Lambda Expression 
var under18 = numbers.filter(age => age <= 18);
console.log(under18)
