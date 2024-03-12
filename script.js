const numeros = [3, 1, 1, 10, 5, 7, 2];

let suma = 0;
let menor = numeros[0];
let mayor = numeros[0];

for (numeroPosicion of numeros){
  suma = suma + numeroPosicion;
  if (numeroPosicion > mayor) {
      mayor = numeroPosicion;
  } 
  if (numeroPosicion < menor) {
      menor = numeroPosicion;
  }
}

// console.log(suma, mayor, menor);

const parrafo = document.querySelector("#parrafo");
// console.log (parrafo);
parrafo.innerHTML = "La suma total es " + suma + ", el número menor es " + menor + " y el número mayor es " + mayor + ".";

parrafo.classList.add("Parrafo--azul");
parrafo.classList.add("Parrafo--titulo");