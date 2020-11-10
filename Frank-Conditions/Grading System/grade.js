const result =[];
let grade;
// Grade A= 80-100
// Grade B = 70-79
// Grade c = 60-69
// Grade D = 50-59
// Grade F = 49-0

$("button").click(function(){
    let result = $(".marks").val();
    $(".marks").text(result);
if(result >= 80 && result <= 100){
    Grade = A
} else if ( result >=70 && result <=79){
    Grade = B
}else if( result >=60 && result <= 69){
    Grade = C
}else if( result >=50 && result <= 59){
    Grade =D
}else if(result <=49 && result >=0 ){
     Grade = F
}else{
    Grade = undefined
}

});