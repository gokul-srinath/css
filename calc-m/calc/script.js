let sol="";
const display = document.getElementsByClassName("display");



const add=(num)=>{
    // const display = document.getElementsByClassName("display");
    // display[0].value = num;
        if(num == 'clear'){
            sol="";
            display[0].value = "0";
            return;
        }

        sol+=num;
        // alert(sol);
        display[0].value = sol;
}

const calc=()=>{
    // const display = document.getElementsByClassName("display");
    try {
        sol = eval(sol);    
        display[0].value = sol;
    } catch (error) {
        display[0].value = "Syntax Error";
        sol="";
        setTimeout(()=>{
            display[0].value = "0";
        },1300);
        
    }
    

    
}

