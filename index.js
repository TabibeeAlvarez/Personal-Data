function login(){
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
    
    if(username === "tabibee" && password === "rada"){
        window.location.href = "https://www.facebook.com";
    }
    else{
        document.getElementById("pops").style.display = 'block'
        document.getElementById("pp").style.display = 'none'
        document.getElementById("bg").style.backgroundColor = 'black'
        document.getElementById("forms").style.opacity = '10%'
    }

    event.preventDefault();
}

function back(){
    document.getElementById("pops").style.display = 'none'
    document.getElementById("pp").style.display = 'block'
    document.getElementById("bg").style.backgroundColor = 'red'
    document.getElementById("forms").style.opacity = '100%'
}