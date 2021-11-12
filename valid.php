<?php

$name=$_REQUEST['name'];
$age=$_REQUEST['age'];
$mobile=$_REQUEST['mobile'];
$cond=$_REQUEST['cond'];
$email=$_REQUEST['email'];
$r=valid($name,$age,$mobile,$cond,$email);
echo $r;
function valid($name,$age,$mobile,$cond,$email){
    $name_db="";
    $age_db=0;
    $mobile_db=0;
    $cond_db="";
    $email_db="";
$status= array() ;
    if($age<=16){$status[0]='InValid';}
    if($age>=16&&$age<24){$status[0]='Youre elgible for extra support';}
    else{$status[0]='Valid Details';}

    $moblen=strlen($mobile);
    if($moblen>=10&&$moblen<=11){$status[1]='Valid Details';}
    else{$status[1]='InValid';
    setcookie("Mobile", $mobile, time() + (86400 * 30), "/");}

    if($cond=='Physical'||$cond=='Mental'||$cond=='Nutritional'){$status[2]='Valid Details';}
    else{$status[2]='InValid';}
    
    $regex = '/^[_a-z0-9-]+(\.[_a-z0-9-]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,3})$/';
    if(preg_match($regex,$email)){$status[3]='Valid Details';}
    else{$status[3]='InValid';}

    if(!isset($_COOKIE['Mobile'])) {
        if($_COOKIE['Mobile']==$mobile){
            $status[4]="MobileInserted";
        }
        }
    

if(in_array('InValid',$status)){return 'Not Inserted';}

else{
    if(in_array("MobileInserted",$status)){return 'Mobile number previously inserted';}
    else{

return 'Details Inserted';
}}}

?>