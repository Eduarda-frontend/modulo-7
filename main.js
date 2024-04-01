const campoA = document.getElementById('campoA');
const campoB = document.getElementById('campoB');
const form = document.querySelector('.formulario');
const resultado = document.querySelector('.resultado');

form.addEventListener('submit', function(e){
    e.preventDefault();
    


    if(campoA.value < campoB.value){
        resultado.innerHTML = `Parabéns o número ${campoB.value} é <b>maior</b> do que o ${campoA.value}!`;

        campoA.value = '';
        campoB.value = '';
    }else{

        resultado.innerHTML = `Por favor, tente novante pois o número <b>${campoB.value}</b> é menor do que o número <b>${campoA.value}!</b>`
        campoA.value = '';
        campoB.value = '';
    }
})

