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


















































let case7 = document.querySelectorAll('#exo-4 input')[0]
let case8 = document.querySelectorAll('#exo-4 input')[1]
let buttEquals = document.querySelector('#exo-4 button')





let rep4 = document.querySelector('#response4')
console.log(case7,case8,rep4);


let opePlus = document.querySelector('#operatorsExo4 i')
let opeMinus = document.querySelectorAll('#operatorsExo4 i')[1]
let opeMulti = document.querySelectorAll('#operatorsExo4 i')[2]
let opeDiv= document.querySelectorAll('#operatorsExo4 i')[3]
console.log(opePlus,opeMinus,opeDiv,case7,case8);

let span2 = document.querySelector('#exo-4 span i')
console.log(span2);


 
 
opePlus.addEventListener('click',()=>{
    span2.setAttribute('class','fas fa-plus')
})

opeMinus.addEventListener('click',()=>{
    span2.setAttribute('class','fas fa-minus')
})

opeDiv.addEventListener('click',()=>{
    span2.setAttribute('class','fas fa-divide')
})

opeMulti.addEventListener('click',()=>{
    span2.setAttribute('class','fas fa-times')
})



 


let divExo4 = document.querySelectorAll('#numbersExo4 button')
let buttChiff = divExo4.textContent
divExo4.forEach(element => {
     
    case7.addEventListener('focus',()=>{
   element.addEventListener('click',()=>{

        case7.value+= element.textContent.trim()
         
        console.log((element.textContent));
        console.log(case7);

   })})

 
    
    case8.addEventListener('focus',()=>{
        element.addEventListener('click',()=>{
     
             case8.value+=element.textContent.trim()
            
             console.log((element.textContent));
             console.log(case8);
     
        })})
   
});

 


buttEquals.addEventListener('click',()=>{
    console.log('button cliquer');
    console.log(rep4);
        switch (span2.className) {
            case "fas fa-plus":
                rep4.textContent=parseInt(case7.value)+parseInt(case8.value)
            console.log("plis");
                
                break;

                case "fas fa-minus":
                    rep4.innerHTML= parseInt(case7.value)-parseInt(case8.value)
                    console.log('moin');
                    
                    break;

                    case "fas fa-times":
                        rep4.innerHTML= parseInt(case7.value)*parseInt(case8.value)
                        console.log('moin');
                        
                        break;


                        case "fas fa-divide":
                    rep4.innerHTML= parseInt(case7.value)/parseInt(case8.value)
                    console.log('moin');
                    
                    break;
        
            default:
                break;
        }
        
    });
 