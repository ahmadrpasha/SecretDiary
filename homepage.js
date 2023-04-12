var url = "http://localhost:3000/post";
//for Homepage
function newEntry(){
        window.location.href = "newEntry.html";
} 

/*function allEntries(){
    window.location.href = "allEntries.html";
}
*/
function openWeather(){
    window.location.href = "index.html";
}

function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
}
  
  /* Set the width of the side navigation to 0 */
function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
}

//for All Entries
//var noOfEntry = 0;
var bolD = false;
var italiC = false;
var underline = false;
const content=[];
/*function backNewEntry() {
  window.location.href = "newEntry.html";
}*/

window.onload = function() {    
    $.post(url+'?data='+JSON.stringify({
        'action':'sendContent',
        'required':'allContent'
    }),
    response);
  }
function response(data,status) {
  var response = JSON.parse(data);
    console.log(data);
    /*if (response['action'] == 'checkPassword') {
        passwordList.push(response['passwordList']);
        if (checkPassword(returnPassword,passwordList) == true) {
            //alert(passwordList)
            alert("Accessing all entries");
        }
        else {
            //alert(passwordList);
            alert("The password does not match, please refresh the page");
        }
    }*/
    if (response['action'] == 'sendContent') {
        list = response['content'];
        for (var j = 0; j < list.length; j ++) {
          content.push(list[j]);
        }
        bolD = response['bold'];
        italiC = response['italic'];
        undelinE = response['underline'];
        //content = Object.values(list);
        //console.log(content);
        //alert(typeof content);
        for (var i = 1; i <= content.length; i = i + 1) {
          var newSpan = document.createElement("span");
          $(newSpan).attr("id","Title" + i);
          $(newSpan).text("Entry " + i);
          $(newSpan).css({"font-family":"Copperplate, Papyrus, fantasy","text":"black",
          "text-align":"center","font-style":"bold","font-size":"25px"});
          $("#listOfEntries").append(newSpan);

          var newEntry = document.createElement("p");
          $(newEntry).attr("id","Entry" + i);
          $(newEntry).text(content[i-1]);
          $(newEntry).css({"border":"solid 2px goldenrod","font":" 18px Copperplate, Papyrus, fantasy ",
          "text":"black","text-align":"left", "margin-left":"100px","background":"white"});
          $(newEntry).css({"overflow":"scroll"});
          $(newEntry).height("80px");
          $(newEntry).width("1100px");

          //set text style set by user:
          /*if (bolD == true) {
            $(newEntry).css({"font-weight":"700"});
          }
          if (italiC == true) {
            $(newEntry).css({"font-style":"italic"});
          }
          if (underlinE == true) {
            $(newEntry).css({"text-decoration":"underline"});
          }*/
          $(newSpan).append(newEntry);
          //content.push(response['content']);
          //localStorage.setItem("content",content);
        }
        
        $("#listOfEntries").css({"background-size":"cover"});
    }
}

function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
}
  
  /* Set the width of the side navigation to 0 */
function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
}
/*function openAllEntries() {
  $.post(url+'?data='+JSON.stringify({
    'action':'sendContent',
    'required':'allContent'
}),
response);
}*/