
// 1. English Section:
$(".englishButton").click(function(){
    let englishInput = $(".english").val();
    if(englishInput==="Mon"){
      $(".englishMessage").text("Correct!");
         $(".english").css("color","green");
    }
        else {
       $(".englishMessage").text("Wrong! Try again.");
             $(".english").css("color","red"); 
        }
    
});
        
   


// 2. Social Studies section
$(".ssButton").click(function(){
    let ssInput = $(".socialStudies").val();
    if(ssInput==="Albany"){
        $(".ssMessage").text("Correct!");
        $(".socialStudies").css("color","green");
    }
else{
 $(".ssMessage").text("Wrong Try again!");
     $(".socialStudies").css("color","red");
}

    
});


// 3. Math section
$(".mathButton").click(function(){
    let mathInput = $(".math").val();
     if(mathInput==="30" ){
     $(".mathMessage").text("Correct!");
         $(".math").css("color","green");
        
    }
    else{
        $(".mathMessage").text("Wrong Try again!");
     $(".math").css("color","red");
}
    
    // below, we are using the parseInt() function to convert the input value (a string) into a number
    mathInput = parseInt(mathInput);


});


// 4. Science section
$(".scienceButton").click(function(){
    let scienceInput = $(".science").val();
    if(scienceInput==="solid" ){
     $(".scienceMessage").text("Correct!");
         $(".science").css("color","green");
        
    }
    else{
        $(".scienceMessage").text("Wrong Try again!");
     $(".science").css("color","red");
}
});





