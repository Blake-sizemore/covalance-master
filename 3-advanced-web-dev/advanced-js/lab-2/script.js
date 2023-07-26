$(document).ready(function () {
    $("main").addClass("row text-center");

    var friends = ["Kevin","Steve","John","Bill","Randy"]
    var locations = ["Port-O-Potty","living room","barber shop","Whole Foods Market","library","clown college bathroom","studio","White House","garden","office"]
    var weapons = ["fish","knife","rubber wheel","tire","car","hair dryer","dog","cat","bike chain","paperclip","banana","rock","rocking chair","pipe","candle stick","street sign","used diaper","typewriter","Dodge Neon","entire collection of Stephen King Novels"];
    
    for (i = 1; i <= 100; ++i) {
        $("main").append("<h3 class=accusation id=" + i + ">")
        $("#"+i).text("Accusation: "+i+" ").on("click", function(){
            var accusation = "I accuse "+random(friends)+", with the "+random(weapons)+" in the "+random(locations)+"!"
            alert(accusation);
            function random(arr) {
                var num = Math.floor(Math.random()*arr.length);
                return arr[num];
            }
        });
    }
});