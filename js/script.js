function lendoosdados(){
    var pessoa = document.getElementById("lerdoc").value;
    document.getElementById("resp1").innerHTML = pessoa;
    var c1 = pessoa[0];
    var c2 = pessoa[1];
    var c3 = pessoa[2];
    var c4 = pessoa[3];
    var c5 = pessoa[4];
    var c6 = pessoa[5];
    var c7 = pessoa[6];
    var c8 = pessoa[7];
    var c9 = pessoa[8];
    var c10 = pessoa[9];
    aux = c1 * 10 + c2 * 9 + c3 * 8 + c4 * 7 + c5 * 6 + c6 * 5 + c7 * 4 + c8 * 3 + c9 * 2;
    aux2 = aux * 10;
    d1 = aux2 % 11;
    aux1 = c1 * 11 + c2 * 10 + c3 * 9 + c4 * 8 + c5 * 7 + c6 * 6 + c7 * 5 + c8 * 4 + c9 * 3 + c10 * 2;
    aux3 = aux1 * 10;
    d2 = aux3 % 11;    
    if(pessoa[10] == undefined) { 
        document.getElementById("resp2").innerHTML = "não"; 
    } else if(pessoa[11] != undefined) { 
        document.getElementById("resp2").innerHTML = "não"; 
    } else if(d1 != pessoa[9] || d2 != pessoa[10]) {
        document.getElementById("resp2").innerHTML = "não"; 
    } else if(d1 == pessoa[9] && d2 == pessoa[10]) {
        document.getElementById("resp2").innerHTML = "sim";
    } else {
        document.getElementById("resp2").innerHTML = "não";
    }
}

function lendoosdados2(){
    var juridica = document.getElementById("lerdocJ").value;
    document.getElementById("resp4").innerHTML = juridica;

    var j1 = juridica[0];
    var j2 = juridica[1];
    var j3 = juridica[2];
    var j4 = juridica[3];
    var j5 = juridica[4];
    var j6 = juridica[5];
    var j7 = juridica[6];
    var j8 = juridica[7];
    var j9 = juridica[8];
    var j10 = juridica[9];
    var j11 = juridica[10];
    var j12 = juridica[11];
    var j13 = juridica[12];

    var auxJ = j1*5 + j2*4 + j3*3 + j4*2 + j5*9 + j6*8 + j7*7 + j8*6 + j9*5 + j10*4 + j11*3 + j12*2;
    var auxJ1 = auxJ % 11;

    if(auxJ1 < 2) { var dJ1 = 0; } else { var dJ1 = 11 - auxJ1 }

    var auxJ2 = j1*6 + j2*5 + j3*4 + j4*3 + j5*2 + j6*9 + j7*8 + j8*7 + j9*6 + j10*5 + j11*4 + j12*3 + j13*2;
    var auxJ3 = auxJ2 % 11;

    if(auxJ3 < 2) { var dJ2 = 0; } else { var dJ2 = 11 - auxJ3 }


    if(juridica[13] == undefined) { 
        document.getElementById("resp5").innerHTML = "não"; 
    } else if(juridica[14] != undefined) { 
        document.getElementById("resp5").innerHTML = "não"; 
    } else if(dJ1 != juridica[12] || dJ2 != juridica[13]) {
        document.getElementById("resp5").innerHTML = "não"; 
    } else if(dJ1 == juridica[12] && dJ2 == juridica[13]) {
        document.getElementById("resp5").innerHTML = "sim";
    } else {
        document.getElementById("resp5").innerHTML = "não";
    }

    if(dJ1 == juridica[12] && dJ2 == juridica[13] && juridica[11] == 1) {document.getElementById("resp6").innerHTML = "sede";} else if(dJ1 == juridica[12] && dJ2 == juridica[13] && (juridica[11] == 1 || juridica[11] == 2 || juridica[11] == 3)) {document.getElementById("resp6").innerHTML = "filial";}
}