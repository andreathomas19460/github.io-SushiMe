
const loginButton = document.getElementById('loginButton');




loginButton.onclick =
    function saver (){
        const usernameContent = document.getElementById('usernameContent').value;
        const emailContent = document.getElementById('emailContent').value;

        console.log("asdf");
        console.log(usernameContent);
        console.log(emailContent)
      $.post('api/user',{username:usernameContent, email:emailContent},(data,status)=>{
        if (data) {
          console.log(data)
        }
        else  {console.log('error')}
      })
    };