function hide() {
    var y = document.getElementById("newPage");
    y.style.display = "none";
    
    return;
}




    function logInFunc(e) {
        e.preventDefault();
        if (document.getElementById('input1').value === 'mahyar' &&
            document.getElementById('input2').value === 'rasht') {
            alert("Welcome Mr bahari");
        
            var loginPage = document.getElementById("pass");
            var newPage = document.getElementById("newPage");
            loginPage.style.display = "none";
            newPage.style.display="block";
            } else if (document.getElementById('input1').value !== 'mahyar' ||
            document.getElementById('input2').value !== 'bahari') {
           alert('wrong password');
        }
        
        
    }
    