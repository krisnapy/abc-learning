var state = false;
function toggle(){
  var show = document.getElementById('password');
    if(show.type=='password'){
    show.type='text';
    }else{
    show.type='password';
    }
}
function validatename(){
    var Characters= /^[A-Z a-z]+$/
    var Fullname=document.userDetails.Fullname.value
    var Password=document.userDetails.Password.value
    var valname=document.getElementById('errorname')
    var valpass=document.getElementById('errorpass')

    if (Password.length < 8){
      valpass.style.display="inline"
        }else{valpass.style.display="none"
        }
    if ( Fullname.match(Characters)){
      valname.style.display="none"
    }else{
      valname.style.display="inline"
    }
  }

  function validation(){
    var Characters= /^[A-Z a-z]+$/
    var Fullname=document.userDetails.Fullname.value
      var Email=document.userDetails.Email.value
      var Country=document.userDetails.Country.value
      var Password=document.userDetails.Password.value
      var Gender=document.userDetails.Gender.value

          
        if(Fullname==""||Fullname==null || Email==""|| Email==null || Country==""||Country==null || Password==""|| Password==null || Gender==""|| Gender==null)
          {
          alert("Please input the field");
        return false;
        }
        if (Password.length > 8 && Fullname.match(Characters)){
          return true;
        }else{
          return false;
        }
  }