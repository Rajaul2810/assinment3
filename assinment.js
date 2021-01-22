
// number1 problem
function kilometerToMeter(kilometer){
    if( kilometer > 0 ){
        var meter = kilometer*1000;
        return meter;
    }
   else{
       return "invoid number";
   }

}
var result1 = kilometerToMeter(8);
console.log(result1);

//number2 problem

function budgetCalculator(number1,number2,number3){
   if( number1 < 0 || number2 < 0 || number3 < 0){
         return "invoid number";
   }
   else{
       var watch = number1*50;
       var mobile = number2*100;
       var laptop = number3*500;
       var totalBudget = watch + mobile + laptop;
       return totalBudget;
   }
}
var result2 = budgetCalculator(2,4,2);
console.log(result2);

// number3 problem

function hotelCost(day){

   if( day > 0 ){

        if( day <= 10 ){
            var first = day*100;
            return first;
        }
        else if( day <=20 ){
            var first10 = 10*100;
            var second = day - 10;
            var second10 = second*80;
            var total20 = first10 + second10;
            return total20;
        }
        else{
           var firstTen = 10*100;
           var secondTen = 10*80;
            var third = day-20;
            var thirdPart = third*50;
           var totalPart = firstTen + secondTen + thirdPart;
           return totalPart;

        }
   }
   else{
       return "invoid number";
   }
}
var result3 = hotelCost(21);
console.log(result3);

//number4 problem

function megaFriend(array){

        var max = array[0];
        var number = array.length;
        
        for(var i = 0; i < number; i++){
            if(array[i].length > max.length){
              max = array[i];
              
            }
        }
        return max;
  
}
var result4 = megaFriend(["Karim","Rahim","rejaul hira"]);
console.log(result4);
