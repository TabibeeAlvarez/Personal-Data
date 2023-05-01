function login(){
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
    
    if(username === "tabibee" && password === "rada"){
        window.location.href = "https://www.facebook.com";
    }
    else{
        alert('Wrong email or password')
    }

    event.preventDefault();
}