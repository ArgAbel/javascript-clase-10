let aprod= [];
addEventListener('submit', function(event) {
        event.preventDefault();
        const num1 = document.getElementById('prod1').value;
        const num2 = document.getElementById('prod2').value;
        const num3 = document.getElementById('prod3').value;
       aprod[0]=num1;
       aprod[1]=num2;
       aprod[2]=num3;
       for (let i=0; i<aprod.length; i++) {
        console.log(aprod[i]);
       }
 } )
 