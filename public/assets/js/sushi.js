var sushiPlate = new Array();


function allowDrop(ev) {
  ev.preventDefault();
}

function drag(ev) {
  ev.dataTransfer.setData("text", ev.target.id);
}

function drop(ev) {
  ev.preventDefault();
  var data = ev.dataTransfer.getData("text");
  const sushi = document.getElementById(data);
  ev.target.appendChild(document.getElementById(data));
  sushiPlate.push(JSON.stringify(sushi));

}
// function clearCont() {
//   document.getElementById("sushiPlate").innerHTML = "";
//   sushiPlate = [];
// }


const saveButton = document.getElementById(`saveButton`);


saveButton.onclick =
  function saver() {
    $.post('api/sushi',{userName:'teresa',name:'hello',email:'hello@gmail'},(data,status)=>{
      if (data) {
        console.log('Data was pushed')
      }
      else { console.log('u fucking suck') }  
    })
  }

//card flip function

function flip(id) {
  $("#"+id).toggleClass('flipped');
}


