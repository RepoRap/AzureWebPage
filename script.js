window.onload=viewer1();
function viewer1(){
    var elem_1=document.getElementById('Trauma');
    var elem_2=document.getElementById('Abuse');
    var elem_3=document.getElementById('Mental Stress');
    elem_1.style.display='block';
    elem_2.style.display='none';
    elem_3.style.display='none';
}
function viewer2(){
    var elem_1=document.getElementById('Trauma');
    var elem_2=document.getElementById('Abuse');
    var elem_3=document.getElementById('Mental Stress');
    elem_1.style.display='none';
    elem_2.style.display='block';
    elem_3.style.display='none';
}
function viewer3(){
    var elem_1=document.getElementById('Trauma');
    var elem_2=document.getElementById('Abuse');
    var elem_3=document.getElementById('Mental Stress');
    elem_1.style.display='none';
    elem_2.style.display='none';
    elem_3.style.display='block';
}
function BMICalc(){
    var output=document.getElementById('BMIOutput');
    output.innerHTML='Your BMI is:'; 
    var weight=document.getElementById('weight');
    var height=document.getElementById('height');
    //console.log(weight.value());
    var output=document.getElementById('BMIOutput');
    var weight_act=parseInt(weight.value);
    var height_act=parseFloat(height.value);
    var BMI=weight_act/(height_act*height_act);
    output.innerHTML+=BMI; 
    if(BMI>=34){alert('Please contact Obstretacian ASAP!!');}

}
function BookApp(){
    //import email-validation from 'email-validation';

    //var email=new email-validation;

    var elem_1=document.getElementById('Name');
    document.cookie="MID_Name="+elem_1.value;
    var cookieCheck=getCookie('MID_Name');
    //if(cookieCheck!=""){
        //alert('You have already submitted a form');
    //}
    //else{
        //alert('Form Submitted Successfully');
    var elem_2=document.getElementById('Age');
    var elem_3=document.getElementById('mobile');
    var elem_4=document.getElementById('condition');
    var elem_5=document.getElementById('email');

    //assert.ok(email.valid(elem_5.value, function(err) {
        //if(err){console.log(err);}}));
      //Throw exceptions around!
      //try {
        //assert.ok(email.valid("lol+this.is.fun@tld", true));
      //} catch (err) {
        //console.log(err);
     // }
    //alert('ButtonClicked');
    const xmlhttp = new XMLHttpRequest();
    xmlhttp.onload = function() {
    //alert(this.responseText);
    document.getElementById("response").innerHTML = this.responseText;
    }
    xmlhttp.open("GET", "valid.php?name=" + elem_1.value+"&"+"age=" + elem_2.value+"&"+"mobile=" + elem_3.value+"&"+"cond=" + elem_4.value+"&"+"email=" + elem_5.value);
    xmlhttp.send();
}

function getCookie(cname) {
    let name = cname + "=";
    let decodedCookie = decodeURIComponent(document.cookie);
    let ca = decodedCookie.split(';');
    for(let i = 0; i <ca.length; i++) {
      let c = ca[i];
      while (c.charAt(0) == ' ') {
        c = c.substring(1);
      }
      if (c.indexOf(name) == 0) {
        return c.substring(name.length, c.length);
      }
    }
    return "";
  }

