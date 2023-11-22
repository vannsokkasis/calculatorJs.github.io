var value1=document.getElementById("value1");
var value2=document.getElementById("value2");
document.getElementById("+").onclick=function(){
    var myResult=parseFloat(value1.value) + parseFloat(value2.value);
    document.getElementById("result").value=myResult;
}
document.getElementById("-").onclick=function(){
    var myResult=parseFloat(value1.value) - parseFloat(value2.value);
    document.getElementById("result").value=myResult;
}
document.getElementById("*").onclick=function(){
    var myResult=parseFloat(value1.value) * parseFloat(value2.value);
    document.getElementById("result").value=myResult;
}
document.getElementById("/").onclick=function(){
    var myResult=parseFloat(value1.value) / parseFloat(value2.value);
    document.getElementById("result").value=myResult;
}