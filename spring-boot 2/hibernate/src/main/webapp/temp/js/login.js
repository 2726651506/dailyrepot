/**
 * Created by Elsa on 2017/9/14.
 */

function LogForm(){
    if(document.getElementById("UserName").value == ''){
        console.log("username empty");
    }
    else if(document.getElementById("Password").value == ''){
        console.log("password empty");
    }
    else {
        $.ajax({
            url: contextPath+"/loginUser",
            type: "POST",
            data:{'username':$("#UserName").val(),'password':$("#Password").val()},
            success: function(data) {
                console.log(data);
            }
        });
    }
}
$(function(){
    $(".cover-wrapper").css("opacity","1");
    $(".cover-wrapper").css("-webkit-transform","scale(1) translateY(-50%)");
    $(".cover-wrapper").css("-moz-transform","scale(1) translateY(-50%)");
    $(".cover-wrapper").css("-ms-transform","scale(1) translateY(-50%)");
    $(".cover-wrapper").css("transform","scale(1) translateY(-50%)");
});
