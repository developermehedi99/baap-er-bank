
document.getElementById('submit-button').addEventListener('click',function(){
    const emailField = document.getElementById('user-email');
    const email = emailField.value;

    const passField = document.getElementById('user-password');
    const password = passField.value;
    console.log(email, password);

    if(email === 'sontan@gmail.com' && password === 'rana'){
        window.location = 'bank.html';
    }else{
        alert('invalid person');
    }
})