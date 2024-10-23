let ac    = document.getElementById('ac');
let text = document.getElementById("text");
let c  = document.getElementById("c");
let equals = document.getElementById("=");

// for all clear
ac.addEventListener('click',(event)=>{
    text.value ='0';
})
// for clear
c.addEventListener("click",(event)=>{
    text.value = text.value.slice(0,-1);
    
})
//for equals
equals.addEventListener("click",(event)=>{
    try{
        text.value=(eval(text.value));
        }
        catch(error){
           text.value = "Syntax Error";
        }
})
//for other keys
function func(x){
    if(Number(text.value)=== 0){
            text.value = String(x);
    }
    else{
        text.value += String(x);
        }
}

document.addEventListener("keydown",(event)=>{
console.log(event.key)

    if(event.key=='0'){
        if(Number(text.value)=== 0){
            text.value = '0';
        }
        else{
        text.value+='0';
        }
        
    }
    else if(event.key=='1'){
        if(Number(text.value)=== 0){
            text.value = '1';
        }
        else{
        text.value+='1';
        }
    }
    else if(event.key=='2'){
        if(Number(text.value)=== 0){
            text.value = '2';
        }
        else{
        text.value+='2';
        }
    }
    else if(event.key=='3'){
        if(Number(text.value)=== 0){
            text.value = '3';
        }
        else{
        text.value+='3';
        }
    }
    else if(event.key=='4'){
        if(Number(text.value)=== 0){
            text.value = '4';
        }
        else{
        text.value+='4';
        }
    }
    else if(event.key=='5'){
        if(Number(text.value)=== 0){
            text.value = '5';
        }
        else{
        text.value+='5';
        }
    }
    else if(event.key=='6'){
        if(Number(text.value)=== 0){
            text.value = '6';
        }
        else{
        text.value+='6';
        }
    }
    else if(event.key=='7'){
        if(Number(text.value)=== 0){
            text.value = '7';
        }
        else{
        text.value+='7';
        }
    }
    else if(event.key=='8'){
        if(Number(text.value)=== 0){
            text.value = '8';
        }
        else{
        text.value+='8';
        }
    }
    else if(event.key=='9'){
        if(Number(text.value)=== 0){
            text.value = '9';
        }
        else{
        text.value+='9';
        }
    }
    else if(event.key=='+'){
        if(Number(text.value)=== 0){
            text.value = '+';
        }
        else{
        text.value+='+';
        }
    }
    else if(event.key=='-'){
        if(Number(text.value)=== 0){
            text.value = '-';
        }
        else{
        text.value+='-';
        }
    }
    else if(event.key=='*'){
        if(Number(text.value)=== 0){
            text.value = '*';
        }
        else{
        text.value+='*';
        }
    }
    else if(event.key=='/'){
        if(Number(text.value)=== 0){
            text.value = '/';
        }
        else{
        text.value+='/';
        }
        
    }
    else if(event.key=='%'){
        if(Number(text.value)=== 0){
            text.value = '%';
        }
        else{
        text.value+='%';
        }
    }
    else if(event.key=='='||event.key=='Enter'){
        try{
            text.value=(eval(text.value));
            }
            catch(error){
                text.value='';
               text.value = "Syntax Error";
            }
    }
    else if(event.key=='Backspace'){
        text.value = text.value.slice(0,-1);
        if(text.value==''){
            text.value = '0';
        }
    }
    else if(event.key=='.'){
        if(Number(text.value)=== 0){
            text.value = '.';
        }
        else{
        text.value+='.';
        }
    }
})