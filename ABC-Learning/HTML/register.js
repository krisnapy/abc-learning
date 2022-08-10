var jQueryScript = document.createElement('script')  
jQueryScript.setAttribute('src','https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js')
document.head.appendChild(jQueryScript)
$(document).ready(function(){
    $(".send").click(function(){
        alert("THANKS YOU FOR MESSAGE US, WAIT INFORMATION FROM US ON YOUR EMAIL")
    });
    $("form")[0].reset();
    
    $("#checkbox1").click(function(){
        if($(this).is(":checked")){
            $(".password").attr("type","text");
        }else{
            $(".password").attr("type","password");
        }
    });
    $("#checkbox2").click(function(){
        if($(this).is(":checked")){
            $(".confirmpassword").attr("type","text");
        }else{
            $(".confirmpassword").attr("type","password");
        }
    });
});
function formValidation() {
    // Get the HTML elements
    var userName = document.userDetails.user_name;
    var email = document.userDetails.email;
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
function randomString(length= 6) {
	var result= "";
	var characters= "ABCDEFGHIJKLMNPQRSTUVWXYZabcdefghijklmnpqrstuvwxyz123456789";
	var charactersLength = characters.length;

	for ( var i = 0; i < length; i++ ) {
		result += characters.charAt(Math.floor(Math.random() * charactersLength));
	}
	return result;
}

// for the administration system

function mustFillValidation(value) {
	if (!value.trim().length) 
		return false

	return true
}


function addData(){
		var key= randomString();
        var name = document.forms.userDetails.name.value;
        var email = document.forms.userDetails.email.value;
        var gender = document.forms.userDetails.gender.value;
        var password = document.forms.userDetails.password.value;
        var courses = document.forms.userDetails.courses.value;

		if (!mustFillValidation(email) || !mustFillValidation(name) || !mustFillValidation(password) || !mustFillValidation(gender) || !mustFillValidation(courses)){
        alert("please fill out all form")
			return
		}

    const detail = JSON.stringify([email, name, password, gender, courses])
    localStorage.setItem(key, detail);
    location.href="thankyou.html";
}

function addDataAdmin(){
    var key= randomString()
    var name = document.forms.userDetails.name.value;
    var email = document.forms.userDetails.email.value;
    var gender = document.forms.userDetails.gender.value;
    var password = document.forms.userDetails.password.value;
    var courses = document.forms.userDetails.courses.value;

    if (!mustFillValidation(email) || !mustFillValidation(name) || !mustFillValidation(password) || !mustFillValidation(gender) || !mustFillValidation(courses)){
    alert("please fill out all form")
        return
    }

const detail = JSON.stringify([email, name, password, gender, courses])
localStorage.setItem(key, detail);
showAll();
}

function editData(key) {
		$("#addBtn").hide()
        $("#updateBtn").show()
		localStorage.setItem("currentKey", key)

		const {email, name, password, gender, courses}= document.forms.userDetails

    let data = JSON.parse(localStorage.getItem(key));
    name.value = data[1];
    email.value = data[0];
    password.value = data[2];
    gender.value = data[3];
    courses.value = data[4];
}

function deleteData(name){
    localStorage.removeItem(name);
    showAll();
    document.forms.userDetails.name.value = null;
    document.forms.userDetails.email.value = null;
    document.forms.userDetails.password.value = null;
    document.forms.userDetails.gender.value = null;
    document.forms.userDetails.courses.value = null;
}

function updateData() {
    var name = document.forms.userDetails.name.value;
	var email = document.forms.userDetails.email.value;
    var gender = document.forms.userDetails.gender.value;
    var password = document.forms.userDetails.password.value;
    var courses = document.forms.userDetails.courses.value;

	var currentKey= localStorage.getItem("currentKey")

	var detail = JSON.stringify([email, name, password, gender, courses])

	localStorage.setItem(currentKey, detail)
	localStorage.removeItem("currentKey")

	$("#updateBtn").hide()

    document.forms.userDetails.name.value = null;
	document.forms.userDetails.email.value = null;
    document.forms.userDetails.password.value = null;
    document.forms.userDetails.gender.value = null;
    document.forms.userDetails.courses.value = null;

	showAll();
}

function clearAll(){
    localStorage.clear();
    showAll();
    document.forms.userDetails.name.value = null;
    document.forms.userDetails.email.value = null;
    document.forms.userDetails.password.value = null;
    document.forms.userDetails.gender.value = null;
    document.forms.userDetails.courses.value = null;
}

function showAll() {
    document.getElementById('list').innerHTML = "";
    var key = "";
    var list = `<tr>
                    <th>Name</th>
                    <th>Email</th>
                    <th>password</th>
                    <th>Gender</th>
                    <th>Course Selected</th>
                    <th colspan="10">Action</th>
                </tr> \n`;
    var i = 0;

    if (localStorage.length == 0) {
        list += `<tr>
                    <td colspan="100"><i>empty</i></td>
                </tr>\n`;
      } else {
        for (i = 0; i < localStorage.length; i++) {
          key = localStorage.key(i)

					if(key=="currentKey") continue
          let data = JSON.parse(localStorage.getItem(key));

        list += `<tr>
            <td>${data[1]}</td>
            <td>${data[0]}</td>
            <td>${data[2]}</td>
            <td>${data[3]}</td>
            <td>${data[4]}</td>
            <td><input type="button" class="b-edit" value="Edit" onclick="editData('${key}')"></td>
            <td><input type="button" class="b-delete" value="Delete" onclick="deleteData('${key}')"></td>
        </tr>`;
        }
    }
    document.getElementById('list').innerHTML = list;
}