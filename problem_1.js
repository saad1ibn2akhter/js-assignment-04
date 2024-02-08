
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
const rs = calculateMoney(10);
console.log(rs);

