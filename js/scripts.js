function mensaje() {
    alert('Hola Mundo');
}

function validarFormulario() {
    var resp = validaRut();
    if (resp == false) {
        return false;
    }
    resp = validaFecha();
    if (resp == false) {
        return false;
    }
    return true;
}

function validaFecha() {
    var fechaUsuario = document.getElementById('txtFechaNaci').value;
    var fechaSistema = new Date();
    console.log('Fecha Usuario: ' + fechaUsuario);
    console.log('Fecha Sistema: ' + fechaSistema);

    var ano = fechaUsuario.slice(0, 4);
    var mes = fechaUsuario.slice(5, 7);
    var dia = fechaUsuario.slice(8, 10);
    console.log('Año: ' + ano);
    console.log('Mes: ' + mes);
    console.log('Día: ' + dia);

    var fechaNuevaUsuario = new Date(ano, (mes - 1), dia);
    console.log('Nueva Fecha: ' + fechaNuevaUsuario);
    ///fecha ingresada menor a la actual
    if (fechaNuevaUsuario > fechaSistema) {
        alert('Fecha Incorrecta');
        return false;
    }
    //mínimo 18 años
    var unDia = 24 * 60 * 60 * 1000; // UN día en milisegundos
    var diferencia = Math.trunc((fechaSistema.getTime() - fechaNuevaUsuario.getTime()) / unDia);
    console.log('Días: ' + diferencia);
    var anos = Math.trunc(diferencia / 365);
    console.log('Edad: ' + anos);
    if (anos < 18) {
        alert('Es menor de edad, usted tiene ' + anos + ' años de edad');
        return false
    }
    return true;
}

function validaRut() {
    var rut = document.getElementById('txtRut').value;
    //alert(rut);
    console.log(rut);
    var num = 3;
    var suma = 0;
    for (let index = 0; index < 8; index++) {
        var caracter = rut.slice(index, index + 1);
        console.log(caracter + 'x' + num);
        suma = suma + (caracter * num)
        num = num - 1;
        if (num == 1) {
            num = 7;
        }
    }
    console.log('suma: ' + suma);
    var resto = suma % 11;
    var dv = 11 - resto;
    if (dv > 9) {
        if (dv == 10) {
            dv = 'K';
        } else {
            dv = 0;
        }
    }
    console.log(dv);
    var dv_usuario = rut.slice(-1).toUpperCase();
    if (dv != dv_usuario) {
        alert('El rut es incorrecto');
        return false;
    }
    return true;
}