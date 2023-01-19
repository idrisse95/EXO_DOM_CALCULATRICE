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
let rep2 = document.getElementById('response3')


select.addEventListener('click', () =>{


    switch (select.value) {
        case "+" :
            rep2.innerHTML = parseInt(case3.value) + parseInt(case4.value)
            
            break;
    
        default:
            break;
    }
})