let case1 = document.querySelector('#sum1 input')
console.log(case1);
let case2 = document.querySelectorAll('#sum1 input')[1]
console.log(case2);

let egale1 = document.querySelector('button')
console.log(egale1);

let rep = document.getElementById('response1')
console.log(rep);



egale1.addEventListener('click',()=>{

    rep.innerHTML= parseInt(case1.value)+parseInt(case2.value)
})


let case3 = document.getElementById('case3')
let case4 = document.getElementById('case4')
console.log(case3, case4);
let select = document.querySelector('select')
console.log(select);
let rep2 = document.getElementById('response2')
let egale2 = document.getElementById('egale2')


egale2.addEventListener('click', () =>{


    switch (select.value) {
        case "+" :
            rep2.innerHTML = parseInt(case3.value) + parseInt(case4.value)
            
            break;

            case "-" :
                rep2.innerHTML = parseInt(case3.value) - parseInt(case4.value)
                
                break;

                case "/" :
                    rep2.innerHTML = parseInt(case3.value) / parseInt(case4.value)
                    
                    break;

                    case "*" :
                        rep2.innerHTML = parseInt(case3.value) * parseInt(case4.value)
                        
                        break;
    
        default:
            alert('ddd')
            break;
    }
})


let case5 = document.querySelector('#operatorsExo3 input')
console.log(case5);
let case6 = document.querySelectorAll('#operatorsExo3 input')[1]
console.log(case6);

let span = document.querySelector('#operatorsExo3 span i')
let buttonSum = document.querySelectorAll('#operatorsExo3 button')[1]
let buttonSous = document.querySelectorAll('#operatorsExo3 button')[2]
let buttonMulti = document.querySelectorAll('#operatorsExo3 button')[3]
let buttonDiv = document.querySelectorAll('#operatorsExo3 button')[4]
let equals3 = document.querySelector('#operatorsExo3 button')
let rep3 = document.getElementById('response3')
console.log(buttonSum,buttonSous,buttonMulti,buttonDiv,equals3);


buttonSum.addEventListener('click',()=>{
    span.setAttribute('class','fas fa-plus')
})

buttonSous.addEventListener('click',()=>{
    span.setAttribute('class','fas fa-minus')
})

buttonDiv.addEventListener('click',()=>{
    span.setAttribute('class','fas fa-divide')
})

buttonMulti.addEventListener('click',()=>{
    span.setAttribute('class','fas fa-times')
})

equals3.addEventListener('click',()=>{

    switch (span.className) {
        case "fas fa-times":
            rep3.innerHTML= parseInt(case5.value)*parseInt(case6.value)
            break;
        case "fas fa-divide":
            rep3.innerHTML= parseInt(case5.value)/parseInt(case6.value)
            break;
        case "fas fa-minus":
            rep3.innerHTML= parseInt(case5.value)-parseInt(case6.value)
            break;
        case "fas fa-plus":
            rep3.innerHTML= parseInt(case5.value)+parseInt(case6.value)
            break;

    
        default:
            break;
    }
})