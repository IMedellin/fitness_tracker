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
  })
})

$(document).ready(function () {
  $("#loginuser").hide();
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


$("#loginuser").on("submit", function (e) {
  e.preventDefault();
  const data = new FormData(e.target);
  const name = data.get('name')
  console.log(data.get('name'));
  $.get(`people/${name}`, function (data) {
    $("#mydata").html(data)
    console.log(data)
  })
})


