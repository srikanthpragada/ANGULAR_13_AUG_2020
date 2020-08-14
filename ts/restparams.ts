// Rest parameters
function printMessage(message : string , ... names : string[])
{
  for(let n of names)
       console.log(message + " " + n);
}

printMessage("Hello", "Ben", "Joe");
printMessage("Hi", "Scott","Anders","Tom");
