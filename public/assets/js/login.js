const db = require (`./models`);

const usernameContent = document.getElementById().textContent();
const nameContent = document.getElementById().textContent();
const emailContent = document.getElementById().textContent();
const loginButton = document.getElementById();




loginButton.onclick(
    function saver (){
      db.Post.create({
        username: usernameContent,
        name: nameContent,
        email: emailContent

        
    })
    .then(function(data){
      if (data) {
        console.log('Data was pushed')
      }
      else  {console.log('u fucking suck')}
    })
    });