const usernameContent = document.getElementById('usernameContent').textContent;
const nameContent = document.getElementById('nameContent').textContent;
const emailContent = document.getElementById('emailContent').textContent;
const loginButton = document.getElementById('loginButton');




loginButton.onclick =
    function saver (){
      $.post('api/post',{user:'teresa',sushiArray:['liu']},(data,status)=>{
        if (data) {
          console.log(data)
        }
        else  {console.log('error')}
      })
    };