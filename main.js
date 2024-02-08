function calculateMoney(ticketSale){
    if(ticketSale<=0 || isNaN(ticketSale)){
        return "Number must be positive or this data type is not acceptable";
    }
    let total_ticket_price = ticketSale*120;
    let care_taker =1;
    let stuffs = 8; 
    let expanse = (stuffs*50)+(care_taker*500);
    const solution = total_ticket_price - expanse;
    return solution;

}

function checkName(name){
    if(typeof name !== "string"){
        return "Your data type is invalid";
    }
    let identity = name.toLowerCase();
    let letter = identity[identity.length-1];
    // console.log(letter);
    let result = "";
    
    if( letter === 'a' || letter === 'y' || letter ==='i' || letter === 'e' || letter === 'o' || letter === 'u' || letter === 'w'){
        result = "Good Name";
    }
    else{
        result = "Bad Name";
    }
    return result;
}

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

function password(obj) {
    if (typeof obj !== "object" || Object.keys(obj).length !== 3 || obj.birthYear <= 999) {
        return "invalid data type or inapproprieate information";
    }
    let first = obj.siteName[0].toUpperCase();
    let xay = "";
    for(let i =1;i<obj.siteName.length;i++){
        xay+=(obj.siteName[i]);
    }
    let pass =first + xay + "#" + obj.name + "@" + obj.birthYear;
    
    return pass;
}

function monthlySavings(arr , livingCost){
    if(!Array.isArray(arr) || isNaN(livingCost)){
        return "Invalid input . check input datas and resubmit and compile ";
    }
    let total_earning = 0;
    let state;
    for(let i =0;i<arr.length;i++){
        if(arr[i]>=3000){
            arr[i] = arr[i] - (arr[i]*(20/100));
        }
    }
    for(let i = 0;i<arr.length;i++){
        total_earning +=arr[i];
    }
    let result = total_earning - livingCost;
    if(result >=0){
        return result;
    }
    else if(result<0){
        return "earn more";
    }
    
}
