var number1;
var number2;
var result;
var inputdata;
var check="";
var operator;
function Clear(){
    document.getElementById("txt1").value="";
}
// function Clear1(){
//     document.getElementById("txt1").value="";
//     document.getElementById("txt2").value="";
// }
 
function add(val)
{       
        document.getElementById("txt1").value+=val;
        //document.getElementById("txt2").value+=val;
}

function decimalcheck()
{
   let comp=document.getElementById("txt1").value;
    
    if(comp.includes("."))return
    else
    document.getElementById("txt1").value+=".";
}

function Calculation(optr)
{   
    operator=optr;
    //document.getElementById("txt1").value+=optr;
    number1=document.getElementById("txt1").value;
    this.Clear();
}
function getResult()
{   
    number2=document.getElementById("txt1").value;
    console.log(number2);
    if(operator=='+')
    {
        result=parseFloat(number1)+parseFloat(number2);
        document.getElementById("txt1").value=result;
    }
    else if(operator=='-')
    {
        result=parseFloat(number1)-parseFloat(number2);
        document.getElementById("txt1").value=result;
    }
    else if(operator=='x')
    {
        result=parseFloat(number1)*parseFloat(number2);
        document.getElementById("txt1").value=result;
    }
    else if(operator=='/')
    {
        result=parseFloat(number1)/parseFloat(number2);
        document.getElementById("txt1").value=result;
    }

    number1="";
    number2="";
    operator=undefined;
}