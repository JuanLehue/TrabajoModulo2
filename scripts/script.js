function validar(elem){
    const value = elem.value;
    const name = elem.name;

    if (value === ''){
        document.getElementById('error_'+ name).innerHTML = 'Este campo es obligatorio';
    } else {
        document.getElementById('error_'+ name).innerHTML = '';
    }
    confirmar();
}

function confirmar(){
    const nombre = document.getElementById('nombre').value;
    const apellido = document.getElementById('apellido').value;
    const telefono = document.getElementById('telefono').value;
    const email = document.getElementById('email').value;
    const asunto = document.getElementById('asunto').value;
    const descripcion = document.getElementById('descripcion').value;

    if (nombre && apellido && telefono && email && asunto && descripcion !== ''){
        document.getElementById('botonEnviar').disabled = false;
    } 
}


const getMensaje = ()=>{
    const http = new XMLHttpRequest()
    http.onreadystatechange = ()=>{
        if(http.readyState == 4 && http.status == 200){
            document.getElementById('mensaje').innerHTML = http.responseText
        }
    }
    //Request
    http.open('GET','http://localhost/trabajoMod2/mensaje.txt', true)
    http.send()
}

function obtenerDatos(){
    const nombre = document.getElementById('nombre').value.trim();
    const apellido = document.getElementById('apellido').value.trim();
    const telefono = document.getElementById('telefono').value.trim();
    const email = document.getElementById('email').value.trim();
    const asunto = document.getElementById('asunto').value.trim();
    const descripcion = document.getElementById('descripcion').value.trim();

    if (nombre && apellido && telefono && email && asunto && descripcion !== ''){
        getMensaje()
    }
    event.preventDefault()
}


