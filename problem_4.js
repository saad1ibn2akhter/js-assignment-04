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

const obj ={ name: "toky", birthYear: 200, siteName: "Facebook" };
const result = password(obj);
console.log(result);
// let sol = obj.siteName[0].toUpperCase() + pass;
    // let sil = pass.splice(0,0);