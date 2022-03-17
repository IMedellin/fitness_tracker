const $btn = $('#btn').on('click', function () {
  console.log('test')
})//jquery works

//Navigation bar open and close
function openNav() {
  document.getElementById("mySidenav").style.width = "250px";
}
function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
}


//function to hide and show create user form 
$(document).ready(function () {
  $("#newuser").click(function () {
    $("#createuser").toggle();
    $("#loginuser").hide();
  });
});
$(document).ready(function () {
  $("#createuser").hide();
});


//function to hide and show sign in form
$(document).ready(function () {
  $("#login").click(function () {
    $("#loginuser").toggle();
    $("#createuser").hide();
  })
})
$(document).ready(function () {
  $("#loginuser").hide();
})

//Hide Log new weight
$(document).ready(function () {
  $("#addlog").hide();
})

//Create user form and post request to database
$("#createuser").on("submit", function (e) {
  e.preventDefault();
  const data = new FormData(e.target)
  console.log(data.get('name'))
  $.ajax({
    type: "POST",
    url: '/people',
    contentType: "application/json",
    data: JSON.stringify({
      name: data.get('name'),
      age: data.get('age'),
      weight: data.get('weight'),
      height: data.get('height')
    }),
    success: function () { }
  })
});

//Login a user
$("#loginuser").on("submit", function (e) {
  e.preventDefault();
  const data = new FormData(e.target);
  const name = data.get('name')
  console.log(name);
  $.get(`people/${name}`, function (data) {
    let fname = data.name;
    let age = data.age;
    let weight = data.weight;
    let height = data.height;
    $("#mydata")
    $("#tblname").append(`${fname}`)
    $("#tblage").append(`${age}`)
    $("#tblweight").append(`${weight}`)
    $("#tblheight").append(`${height}`)
  }, "json");
  $("#loginuser").hide();
  $("#addlog").show();
})

function clearTable() {
  const parent = document.getElementById("datatbl");

  while (parent.firstChild) {
    parent.removeChild(parent.firstChild);
  }
}


