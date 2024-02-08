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
const sol = checkName("jhankar");
console.log(sol);
