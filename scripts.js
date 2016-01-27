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
    });

    $("#table-calc").click(function(e){
        var rv1_1 = parseFloat($("#t1_1").val()),
            rv1_2 = parseFloat($("#t1_2").val()),
            rv2_1 = parseFloat($("#t2_1").val()),
            rv2_2 = parseFloat($("#t2_2").val()),
            resultRow1 = rv1_1*rv1_2,
            resultRow2 = rv2_1*rv2_2,
            resultSum = resultRow1 + resultRow2;

        $("#table-result1").text(resultRow1);
        $("#table-result2").text(resultRow2);
        $("#table-result").text(resultRow1+resultRow2);
    })
});
