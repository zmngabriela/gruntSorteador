document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('formSorteador').addEventListener('submit', function(e) {
        e.preventDefault();
        const numeroMaximo = parseInt(document.getElementById('numeroMaximo').value);
    
        let numeroAleatorio = Math.random() * numeroMaximo;
        numeroAleatorio = Math.floor(numeroAleatorio + 1);
        
        document.getElementById('resutValue').innerHTML = parseInt(numeroAleatorio);
        
        document.querySelector('.result').style.display = 'block';
    })
})