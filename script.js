function verificar(){
    let numberRANDOM = document.querySelector('.number-area--left').innerHTML;
    let numberInput = document.querySelector('.number-area--right-input').value;
    let result = document.querySelector('.result').innerHTML;
    
    

    if(numberRANDOM == numberInput){
        document.querySelector('.result').innerHTML = "ACCEPT";
        document.querySelector('.result').style.color = "green";
    }else if(numberInput>100 || numberInput<0){
        document.querySelector('.result').innerHTML = "INVALID NUMBER";
        document.querySelector('.result').style.color = "gray";
    }else{
        document.querySelector('.result').innerHTML = "ERROR";
        document.querySelector('.result').style.color = "red";
    }
    resetar();
}
function resetar(){

    document.querySelector('.number-area--right-input').value = '';

    numberRANDOM = Math.floor(Math.random() * 100);
    document.querySelector('.number-area--left').innerHTML = numberRANDOM;
}