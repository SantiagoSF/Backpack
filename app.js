alert("Esto funciona");
	var main = function(){ 
    var palabra = ["t","a","c","o","c","a","t"];
    var coincidencia = 0;
    var reversa = palabra.length - 1; 
    for (i = 0; i < palabra.length; i++) {
        if (palabra[i]=== reversa) {
            coincidencia += 1;
            reversa = reversa - 1;
        }
        else {
            break;
        }
    
    alert(coincidencia);
    console.log(coincidencia);

}

main();