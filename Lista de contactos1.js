//Crea una lista de contactos con datos predefinidos, cada contacto debe contener el nombre y apellido como una sola cadena de caracteres
var arreglopersonas = [
    "carlos ramires",
    "pedro sanshes",
    "jose peres"

];
console.log(arreglopersonas);

//Crea una función para añadir un nuevo contacto a una lista
arreglopersonas.push("sergio peres");
console.log(arreglopersonas);

//Crea una función para borrar un contacto existente de la lista
var removed = arreglopersonas.splice(2);
console.log(arreglopersonas);

//Crea una función para imprimir en consola los contactos presentes en la lista
console.log(arreglopersonas)
alert("los cantactos son :" +arreglopersonas)


