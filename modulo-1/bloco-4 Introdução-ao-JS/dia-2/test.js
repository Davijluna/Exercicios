let fruits = [3, 4, 10, 1, 12];
let valor = false;
//
for (contador = 0; contador < fruits.length; contador+=1){
    valor = valor + fruits[contador];
    console.log(fruits[contador]);
        
   
} 
if(valor == 15){
    console.log(valor);
}else if(valor <= 15){
    console.log('Menor que 16');
}


