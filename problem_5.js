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
const sol = monthlySavings(100, [ 900 , 2700 , 3400]);
console.log(sol);