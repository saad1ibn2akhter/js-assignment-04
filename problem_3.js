function deleteInvalids(array){
    if(!Array.isArray(array)){
        return "data type not acceptable or invalid array";
    }
    let array2 =[];
    for(let i =0;i<array.length;i++){
        if(typeof array[i] === "number" && !isNaN(array[i])){
            array2.push(array[i]);
        }
    }
    return array2;
}
const sol = deleteInvalids({num: [ 1 , 2 , 3 ]});
console.log(sol);