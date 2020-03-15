var sushiPlate = [];

function allowDrop(ev) {
  ev.preventDefault();
}

function drag(ev) {
  console.log(ev)
  ev.dataTransfer.setData("text", ev.target.id);
  ev.dataTransfer.setData("section", ev.target);
  console.log(ev.target)
}

function drop(ev) {
  ev.preventDefault();
  var data = ev.dataTransfer.getData("text");
  const sushi = data.split("-")[1]
  var section = ev.dataTransfer.getData("section");

  console.log(section + "haiudhiasd")
  ev.target.appendChild(document.getElementById(data));
  sushiPlate.push(sushi);
  console.dir(ev.target + "sda");
  console.log(sushiPlate)


}


function clearCont() {
  

  const conveyor = document.getElementById('sushiContainer');
  const plate = document.getElementById('sushiPlate')

  var childArray = Array.from(plate.children)

  for (let i = 0; i < childArray.length; i++) {
    console.log(i)
    const element = childArray[i];
    console.dir(element)
    conveyor.appendChild(element);
  }


  document.getElementById("sushiPlate").innerHTML = "";
  sushiPlate = [];
}



document.getElementById('saveButton').onclick =
  function saver() {
    console.log(" we are in save")
    console.log(sushiPlate)
    $.post('api/post',{user:'teresa', sushiArray: sushiPlate},(data,status)=>{
      if (data) {
        console.log('Data was pushed')
      }
      else { console.log('u fucking suck') }  
    })
  };

//card flip function

function flip(id) {
  console.log("TESTING ID")
  console.log(id)
  $("#"+id).toggleClass('flipped');
}


