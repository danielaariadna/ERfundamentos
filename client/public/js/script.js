//funciones para validar los campos

function validarNyA(nya){
        const exreg =  /^(?!.*\s{2})[\p{L}'.-]{2,}(?:\s+[\p{L}'.-]{2,})+$/u;
        return exreg.test(nya.trim()); //retorna verdadero o falso si cumple con la expresion regular planteada en la linea anterior
                               //.trim elimina los espacios al principio o al final que pueda llegar a tener el string             
    }
    
    function validarDNI(dni){
    //expresion regular solo valida para argentina
        const exreg= /^\d{7,8}$/; //solo digitos del 0 al 9 y entre 7 y 8 digitos porq hay algunos dni que son de 7
        return exreg.test(dni.trim());
    }
    
    function validarEmail(email){
        const exreg= /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        return exreg.test(email.trim());
    }

    function validarNumeroTicket(numero) {
        const exreg = /^AA-\d{5}$/;
        return exreg.test(numero.trim());
      }
    
    function validarMonto(monto) {
        const exreg = /^\d+(\.\d{2})$/; // Número con decimales obligatorios (2 cifras)
        if (!exreg.test(monto.trim())) return false;
      
        const montoNumerico = parseFloat(monto);
        return montoNumerico > 1000;
      }
      
    function validarFechaConRegex(fecha) {
        // Formato esperado: AAAA-MM-DD
        const exreg = /^2025-04-(0[1-9]|1[0-9]|2[0-2])$/; //solo fechas del 1 al 22 de abril
        return exreg.test(fecha.trim());
      }
    
    //integro las funciones al formulario
    document.getElementById('form-ticket').addEventListener('submit', function(e){
        e.preventDefault();
    
        //obtengo los valores
        const numero = document.getElementById('num-ticket').value;
        const monto = document.getElementById('monto').value;
        const fecha = document.getElementById('fecha').value;
        const nya=document.getElementById('nombre').value;
        const dni=document.getElementById('dni').value;
        const email=document.getElementById('email').value;
    
        //valido los datos
        const esNumeroValido = validarNumeroTicket(numero);
        const esMontoValido = validarMonto(monto);
        const esFechaValida = validarFechaConRegex(fecha);
        const esNyAValido=validarNyA(nya);
        const esDNIValido=validarDNI(dni);
        const esEmailValido=validarEmail(email);
    
        //corroboro por consola que sean validos
        console.log('Número de ticket válido:', esNumeroValido);
        console.log('Monto válido:', esMontoValido);
        console.log('Fecha válida:', esFechaValida);
        console.log('Nombre y Apellido valido:', esNyAValido);
        console.log('DNI valido:', esDNIValido);
        console.log('Email valido:', esEmailValido);
        
    
       // limpiar mensajes anteriores
      document.querySelectorAll('.error').forEach(el => el.textContent = '');

      // mostrar errores en pantalla
      if (!esNyAValido) {
          document.getElementById('error-nombre').textContent = '❌ Nombre y apellido inválido';
      }
      if (!esDNIValido) {
          document.getElementById('error-dni').textContent = '❌ DNI inválido (solo números, 7 u 8 cifras)';
      }
      if (!esEmailValido) {
          document.getElementById('error-email').textContent = '❌ Email inválido';
      }
      if (!esNumeroValido) {
          document.getElementById('error-num-ticket').textContent = '❌ El número debe ser formato AA-00000';
      }
      if (!esMontoValido) {
          document.getElementById('error-monto').textContent = '❌ Monto inválido (debe superar los 1000.00)';
      }
      if (!esFechaValida) {
          document.getElementById('error-fecha').textContent = '❌ Solo se permiten fechas del 1 al 22 de abril del 2025';
      }
      if (esNyAValido && esDNIValido && esEmailValido && esNumeroValido && esMontoValido && esFechaValida) {
        alert('✅ ¡Todos los datos son válidos! Guardando...');
        document.getElementById('form-ticket').reset(); //limpia los campos
        document.querySelectorAll('.error').forEach(el => el.textContent = ''); //limpio por las dudas los mensajes de error
      } else {
        alert('❌ Algunos datos no son válidos. Por favor, revisalos.');
      }

    });

    
    //movimiento de las pestañas
    function openTab(tabId,event=null) {
        // oculta todos los contenidos de pestañas
        const tabContent = document.querySelectorAll('.tab-content');
        tabContent.forEach(content => {
          content.style.display = 'none';
        });
        
        // desactiv todos los botones de pestañas
        const tabBtn = document.querySelectorAll('.tab-btn');
        tabBtn.forEach(button => {
          button.classList.remove('active');
        });
        
        // muestra la pestaña actual y activa su botón
        document.getElementById(tabId).style.display = 'block';
        if(event && event.classList){
        event.currentTarget.classList.add('active');
        }else{
            document.querySelector(`.tab-btn[data-tab="${tabId}"]`).classList.add('active');
        }
    }
      
   
    ///DOM
    document.addEventListener('DOMContentLoaded', function() {
        openTab('cargar-ticket'); 
    });