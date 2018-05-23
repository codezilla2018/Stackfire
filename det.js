(function (w, d, u) {
aboutButton = d.getElementById("login-button"),
c        = d.getElementById("c"),

window.onload = function() {
  var c=localStorage.getItem("c");

  if(c==null){
      var c = prompt("Please Stackoverflow Userid", "");
      localStorage.setItem("d", c);
      localStorage.setItem("c", c);
    }
  var d = localStorage.getItem("d");

$.ajax({
         url: "https://api.stackexchange.com/2.2/users/"+d+"?order=desc&sort=reputation&site=stackoverflow",
         type: 'GET',
         dataType: 'json',
         success: function(res) {

 var a = ((res.items[0]));

 document.getElementById("a").innerHTML = "<b>"+(a.display_name)+"<b>";

 document.getElementById("myimg").src = a.profile_image;
  document.getElementById("b").innerHTML = "<b>"+(a.location)+"<b>";
    document.getElementById("c").innerHTML += "<b>Age "+(a.age)+"<b>";
 document.getElementById("gold").innerHTML += "<b>"+(a.badge_counts.gold)+"<b>";
 document.getElementById("silver").innerHTML += "<b>"+(a.badge_counts.silver)+"<b></font>";
 document.getElementById("bronze").innerHTML += "<b>"+(a.badge_counts.bronze)+"<b></font>";
document.getElementById("repu").innerHTML += "<b>"+(a.reputation)+"<b>";

document.getElementById("gold").style.color = "#000000";
document.getElementById("silver").style.color = "#000000";
document.getElementById("bronze").style.color = "#000000";

         }
     });
     $.ajax({
              url: "https://api.stackexchange.com/2.2/users/"+d+"/questions?order=desc&sort=activity&site=stackoverflow",
              type: 'GET',
              dataType: 'json',
              success: function(qus) {

      var count = qus.items.length;


      document.getElementById("e").innerHTML = "<b>"+(count)+" Questions<b><br>";


              }
          });

          $.ajax({
                   url: "https://api.stackexchange.com/2.2/users/"+d+"/answers?order=desc&sort=activity&site=stackoverflow",
                   type: 'GET',
                   dataType: 'json',
                   success: function(ans) {


           var nans = ans.items.length;

           document.getElementById("f").innerHTML = "<b>"+(nans)+" Answers<b>";


                   }
               });



}
})(window, document);
