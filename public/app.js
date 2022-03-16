const $btn = $('#btn').on('click', function () {
  console.log('test')
})//jquery works

function openNav() {
  document.getElementById("mySidenav").style.width = "250px";
}
function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
}



$("#form1").on("submit", function (e) {
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


