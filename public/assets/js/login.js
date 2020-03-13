const db = require (`./models`);

const usernameContent = document.getElementById('usernameContent').textContent();
const nameContent = document.getElementById('nameContent').textContent();
const emailContent = document.getElementById('emailContent').textContent();
const loginButton = document.getElementById('loginButton');




loginButton.onclick(
    function saver (){
      db.Post.create({
        username: usernameContent,
        name: nameContent,
        email: emailContent

        
    })
    .then(function(data){
      if (data) {
        console.log(data)
      }
      else  {console.log('error')}
    })
    });