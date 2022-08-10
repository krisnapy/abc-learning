function validateForm() {
    let password = document.querySelector('.password').value;
    let confirmpassword = document.querySelector('.confirmpassword').value;
    let red = document.getElementById("validpass");

    if(password.length != 0){
        if(password == confirmpassword){
            alert("THANKS YOU FOR JOIN US")
            return true     
        }else{
            red.textContent="PASSWORD DIDN'T MATCH";
            alert("PASSWORD DIDN'T MATCH");
            return false
        }
    }
}
document.addEventListener('DOMContentLoaded', function () {
    cookieconsent.run({"notice_banner_type":"headline","consent_type":"express","palette":"dark","language":"en","page_load_consent_levels":["strictly-necessary"],"notice_banner_reject_button_hide":false,"preferences_center_close_button_hide":false});
    });
function alertpdf(){
    alert("Sorry, Schedule for 2022 is coming soon");
}
// jquery

$(document).ready(function(){
    $(".tab_container:first").show();

    $(".tab_navi li").click(function(event){
        index = $(this).index();
        $(".tab_navi li").removeClass("active");
        $(this).addClass("active");
        $(".pageContent").hide();
        $(".pageContent").eq(index).show();
    });
});