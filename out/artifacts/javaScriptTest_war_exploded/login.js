function login() {
    // document.getElementById('noteField').style.display="block";
    // document.getElementById('userName').style.display="none";
    // document.getElementById('password').style.display="none";

    $(document).ready (function() {
        console.log('here========');
        $('#loginButton').hide();
        $('#userName').hide();
        $('#password').hide();
        $('#noteField').show().val('');

        autosize($('textarea'));
    });

    }

$("textarea").focus(function(){  //works with both click and tab
    var noteField =document.getElementById("noteField");
    var text=$("textarea").val();
   // $("textarea").animate({ height: "70px" }, 0);
    console.log("FOCUSED!______________"+text);



    if(text=='' || text==null){
         console.log("FOCUSED!_____INSIDE_________"+text);
         $("textarea").animate({ height: "70px" }, 0);   }


});
$("textarea").blur(function(){  //works with both click and tab
    var noteField =document.getElementById("noteField");
    var text=$("textarea").val();
   if(text=='' || text==null)
   {         console.log("BLUR!________IN______");
       $("textarea").animate({ height: "40px" }, 0);
   }


});






console.log('Loaded');
document.getElementById('loginButton').addEventListener('click',login);