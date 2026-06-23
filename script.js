let distânciaPercorrida // entrada - input
let combustívelEmLitros // entrada - input
let consumoMedío //saída - output

distânciaPercorrida = prompt ("INFORME A DISTÂNCIA A SER PERCORRIDA EM KM");

combustívelEmLitros = prompt ("INFORME A QUANTIDADE DE COMBUSTÍVEL EM LITROS");

alert ("A DISTÂNCIA A SER PERCORRIDA É DE " + distânciaPercorrida + " KM");

distânciaPercorrida = parseFloat(distânciaPercorrida);
combustívelEmLitros = parseFloat(combustívelEmLitros);


consumoMedío = parseFloat(distânciaPercorrida) / parseFloat(combustívelEmLitros);

alert ("o consumo medío do caminhão é de " + consumoMedío)