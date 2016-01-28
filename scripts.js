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
    });


    $("#3t_5_btn").click(function(e){
        var r1 = parseFloat($("#3t1_1").val()),
            r2 = parseFloat($("#3t2_1").val()),
            r3 = parseFloat($("#3t3_1").val());

        $("#3t_4_res").text(r1*r2*r3);
    });


    $("#4t_5_btn").click(function(e){
        $("#4t1_3").val(parseFloat($("#4t1_1").val()) * parseFloat($("#4t1_2").val())),
        $("#4t2_3").val(parseFloat($("#4t2_1").val()) * parseFloat($("#4t2_2").val())),
        $("#4t3_3").val(parseFloat($("#4t3_1").val()) * parseFloat($("#4t3_2").val())),
        $("#4t4_3").val(parseFloat($("#4t4_1").val()) * parseFloat($("#4t4_2").val())),
        $("#4t_result").text(
            parseFloat($("#4t1_3").val()) +
            parseFloat($("#4t2_3").val()) +
            parseFloat($("#4t3_3").val()) +
            parseFloat($("#4t4_3").val())
        );
    })
});
