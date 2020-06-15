window.onload = function () {
  ispisMenija();
  ispisMenija1();
}
function ispisMenija(){
  $.ajax({
    url: 'data/menu.json',
    method: 'GET',
    dataType: 'json',
    success: function (data) {
      let ispis = "";
    
      data.forEach(element => {
        ispis += `
          <li>
            <a href="${element.href}">${element.tekst}</a>
          </li>`;
      });
        
      document.getElementById("menu").innerHTML = ispis;
        },
    error: function (err) {
      console.error(err);
    }
  });
}
function ispisMenija1(){
  $.ajax({
    url: 'data/menu2.json',
    method: 'GET',
    dataType: 'json',
    success: function (data) {
      let ispis = "";
      
  data.forEach(element => {
    ispis += `
      <li>
        <a href="${element.href}">${element.tekst}</a>
      </li>`;
  });
      
	document.getElementById("menu2").innerHTML = ispis;
    },
    error: function (err) {
      console.error(err);
    }
  });
};