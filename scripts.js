/**
 * Created by tsh on 27-Jan-16.
 */

$( document ).ready(function() {
    $("#calc").click(function(e){
        var m = parseFloat($("#1").val()),
            Zoi = parseFloat($("#2").val()),
            Wd = parseFloat($("#3").val()),
            Wc = parseFloat($("#4").val()),
            Wh = parseFloat($("#5").val()),
            Cm = parseFloat($("#6").val()),
            Me = parseFloat($("#7").val()),
            result1 = parseFloat((1 + Wd)*(1 + Wc) + Wh),
            result2 = 0;
        for (i=0; i<=m; i++){
            result2 += Zoi + Cm + Me;
        }
        $("#calcResult").text(result1*result2);
    })
});
