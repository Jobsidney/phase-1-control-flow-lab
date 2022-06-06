function scuberGreetingForFeet(distance){
  // Write your code here!
  return distance<=400?"This one is on me!"
  :distance<2400?"I will gladly take your thirty bucks."
  :"No can do.";
    
  }


function ternaryCheckCity(city){
  // Write your code here!
  return city==="NYC"?"Ok, sounds good.":"No go."
}
let tip="generous"

function switchOnCharmFromTip(tip){
  // Write your code here!
  switch (true) {
    case tip==="generous":
      return "Thank you so much.";
      break;
    case tip==="not as generous":
      return "Thank you."
      break;
    default: 
      return "Bye.";

  }

}

