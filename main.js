const form = document.getElementById('form');

form.addEventListener('submit', function(e) {
    e.preventDefault();

    const campoA = parseInt(document.getElementById('a').value);
    const campoB = parseInt(document.getElementById('b').value);
    const menssagemJs = document.querySelector('.mensagem');

    if (campoA > campoB) {
        menssagemJs.innerHTML = 'Aprovado';
        menssagemJs.style.display = 'block';  
        menssagemJs.style.backgroundColor = 'green';  

    } else if(campoA == campoB){
        menssagemJs.innerHTML = 'Igual';
        menssagemJs.style.display = 'block';
        menssagemJs.style.backgroundColor = 'grey'; 

    } else {
        menssagemJs.innerHTML = 'Reprovado';
        menssagemJs.style.display = 'block';
        menssagemJs.style.backgroundColor = 'red'; 
    }
    
})
