/**Funciones para validar los siguientes campos: NombreyApellido, DNI, Email */

function validarNyA(nya){
    //Explicacion de la expresion regular
        
        const exreg=  /^(?!.*\s{2})[\p{L}'.-]{2,}(?:\s+[\p{L}'.-]{2,})+$/u;
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
    
    //integro las funciones al formulario
    document.getElementById('form-ticket').addEventListener('submit', function(e){
        e.preventDefault();
    
        //obtengo los valores
        const nya=document.getElementById('nombre').value;
        const dni=document.getElementById('dni').value;
        const email=document.getElementById('email').value;
    
        //valido los datos
        const esNyAValido=validarNyA(nya);
        const esDNIValido=validarDNI(dni);
        const esEmailValido=validarEmail(email);
    
        //muestro por consola pa verificar (BORRAR DESPUES Y HACERLO POR LA INTERFAZ)
        console.log('Nombre y Apellido valido:', esNyAValido);
        console.log('DNI valido:', esDNIValido);
        console.log('Email valido:', esEmailValido);
        //me aparecen errores por consola y no me sale si tuvo los datos validos
        
        //si todo es valido se envia el form, agregar los de dani!!
    
        if(esNyAValido && esDNIValido && esEmailValido){
            //son validos guardar en un txt
        } else {
            //mostrar en la interfaz de que no se puede enviar el form
        }
    });