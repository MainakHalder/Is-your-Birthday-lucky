const dateOfBirth = document.querySelector("#date-of-birth");
const luckyNumber = document.querySelector("#lucky-number");
const checkNumberButton = document.querySelector("#check-number");
const outputBox = document.querySelector("#output-box");
function compareValues(sum,luckyNumber){
  if(sum%luckyNumber=== 0){
    outputBox.innerText = "Your birthdate is lucky" ;
  }
  else{
    outputBox.innerText ="Make your own day lucky" ;
  }
}
function checkBirthDateIsLucky(){
  const dob =dateOfBirth.value;
  const sum = calculateSum(dob);
  if(dob&&sum)
  compareValues(sum,luckyNumber.value);
  else
    outputBox.innerText ="Please enter both the fields" ; 
}
function calculateSum(dob){
  dob = dob.replaceAll("-","");
  let sum= 0;
  for(let i = 0; i<dob.length; i++){
    sum = sum + Number(dob.charAt(i));
  }
  return sum;
}
checkNumberButton.addEventListener('click',checkBirthDateIsLucky);
