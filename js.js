var check=0, check1=0;
let result;
let arr=[];

function educValue() //educ level value
{
var select =document.getElementById('education');
var value=select.options[select.selectedIndex].value;

switch(value)
{
  case '1.5':
    arr[0]=value;
    break;

    case '1.2':
    arr[0]=value;
    break;

    case '1.05':
    arr[0]=value;
    break;

    case '0.9':
    arr[0]=value;
    break;

    default:
    arr[0]=1;

}
console.log(arr[0]);
}


function networthValue()//networth value
{
var select =document.getElementById('networth');
var value=select.options[select.selectedIndex].value;
//condition for choosing 
switch(value){
case '2':
arr[1]=value;
break;

case '1.5':
  arr[1]=value;
break;

case '1.2':
  arr[1]=value;
break;

default:
    arr[1]=1;
}
console.log(arr[1]); //to check the calculation
}


function casteValue()
{
var select =document.getElementById('caste');
var value=select.options[select.selectedIndex].value;
//condition for choosing 
if(value=="100")
{
 arr[2]= parseInt(value);
}
if(value=="50")
{
  arr[2]= parseInt(value);}
if(value=="20")
{
  arr[2]= parseInt(value);}
if(value=="10")
{
  arr[2]= parseInt(value);}
if(value=="-50")
{
  arr[2]= parseInt(value);
}
console.log(arr[2]); //to check the calculation
}


let res1=0; //skills
function checkfunc(choosen) {
  // If the checkbox is checked
  if (choosen.checked == true){
    //The parseInt() function parses a string and returns an integer
    res1+=parseInt(choosen.value);
  } else {
    res1-=parseInt(choosen.value);
  }
  arr[3]=res1;
  console.log(arr[3]); //to check the calculation
}

//tried to do with array.filterReduce method


//const startingBid = document.getElementById("startingbid"); // element with id startingbid
//skill= document.getElementsByClassName("skills"); // HTMLCollection (like an array of elements, but not an actual array)
//const calculate1 = () => {
  //  let price = Number(startingBid.value) // turns your starting bid string into number
   // price = getCheckboxValuesReduce(skill, price)
//}
//const getCheckboxValuesFilterReduce = (html_collection, skill) => { // create a function that accepts your HTMLCollection of elements and the current price
  //  let list = Array.from(html_collection).filter(filteration) // this method turn your HTMLCollection into array
    //let result = list.reduce(reducer, skill)
    //return result;
//}

//const reducer = (accumulator, item) => {
  //  return accumulator + Number(item.value);
//}
//const filteration = (item) => {
  //  return item.checked;
//}

function radioCheck() //radiobuttons 
{
    var inp = document.getElementsByName('age');
    for (var i = 0; i < inp.length; i++) {
   if (inp[i].type == "radio"&& inp[i].checked) {
        if (inp[i].value==document.getElementById("young").value) {
       var val = document.getElementById("young").value;
      arr[4]=val;
        }
          else if (inp[i].value== document.getElementById("young1").value) {
            var val = document.getElementById("young1").value;
            arr[4]=val;
          }
          else if (inp[i].value==document.getElementById("young2").value) {
            var val = document.getElementById("young2").value;
            arr[4]=val;
        }
          console.log(arr[4]);}}}

  
  //tried to do with FOR EACH loop

//const age = document.getElementsByName("age"); // get NodeList with input radio elements
//const getRadioValue = (node_list, age) => {  
  //  node_list.forEach(item => {
   //     if (item.checked) {
     //       age=item.value; }  })
    //return age;}


    //composition
 const startingBid = document.getElementById("startingbid"); // element with id startingbid

 const multiply=(a,b,c)=>(a*b*c);
 const add=(a,b,c)=>(a+b+c);
 add(multiply((startingBid,arr[0], arr[1]), arr[2], arr[3]))
 p=add();

 
//tried to do with for loop
reput = document.getElementsByClassName("reputation"); // HTMLCollection (like an array of elements, but not an actual array)
const calculate = () => {
    let p = Number(startingBid.value) // turns your starting bid string into number
    p = getCheckboxValuesForLoop(skill, p)
}
   const getCheckboxValuesForLoop = (html_collection, p) => { 
      // Check this one, it should work for values with coefficients and with integers
      for (let i=0; i < html_collection.length; i++) {  
          if (html_collection[i].checked && Number.isInteger(Number(html_collection[i].value))) {
              p = p + Number(html_collection[i].value)
          }
          else if (html_collection[i].checked && !Number.isInteger(html_collection[i].value)) {
              p = p * Number(html_collection[i].value)
          }
      }
      return p;}

      const calculate = () => {
document.getElementById("myTextarea").maxLength = "500";
var x = document.getElementById("fname");

document.getElementById("demo").innerHTML = `The price for groom ${x} is ${result}. Your love letter is "${myTextarea}"`;
}
document.getElementById("btn").addEventListener("click", calculate);


let person = {

  Groom_name: fname,
  
  Groom_price: result,
  
  letter_to_groom: myTextarea
  
  }