


     
        addEventListener('submit', function(event) {
        event.preventDefault();
        const num1 = Number(document.getElementById('numero1').value);
        const num2 = document.getElementById('numero2').value;
        const mensaje1 = num1 - num2;
        const mensaje2 = num1 + num2;
        const mensaje3 = num1 / num2;
        const mensaje4 = num1 * num2;
        document.getElementById('mensajer').textContent = mensaje1;
         document.getElementById('mensajes').textContent = mensaje2;
          document.getElementById('mensajed').textContent = mensaje3;
           document.getElementById('mensajem').textContent = mensaje4;
        })