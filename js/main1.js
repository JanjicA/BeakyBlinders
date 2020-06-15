$(document).ready(function(){
  ispisMenija();
  ispisMenija1();
  ispisiGlumce();
  ispisKategorije();
  
  $("#search").blur(filtriranjeGlumaca);
  $("#dropdownMenu").click(sortirajPoGodinama);

});

function ispisMenija(){
  $.ajax({
    url: 'data/menu.json',
    method: 'GET',
    dataType: 'json',
    success: function (data) {
      let ispis = "";
    
      for(let d of data) {
        ispis += `
          <li>
            <a href="${d.href}">${d.tekst}</a>
          </li>`;
      };
        
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
      
  for(let d of data){
    ispis += `
      <li>
        <a href="${d.href}">${d.tekst}</a>
      </li>`;
  };
      
	document.getElementById("menu2").innerHTML = ispis;
    },
    error: function (err) {
      console.error(err);
    }
  });
}
function ispisiGlumce() {
    $.ajax({
        url : "data/glumci1.json",
        method : "GET",
        type : "json",
        success : function(data) {
            prikaziGlumce(data);
        },
        error : function(xhr, error, status) {
            alert(status);
        }
    });
}

function ispisKategorije(){
	$.ajax({
        url : "data/kategorija.json",
        method : "GET",
        type : "json",
        success : function(data) {
            prikaziKategorije(data);
        },
        error : function(xhr, error, status) {
            alert(status);
        }
  });
	
}

function prikaziKategorije(data){
	let html = "";
	for(let d of data){
		html += PrikazPrveKategorije(d);
	}
	$("#categories").html(html);
    $('.aco').click(onFilterByCategory);
}


function onFilterByCategory(e){
    e.preventDefault();

    let categoryId = $(this).data('id');
    $.ajax({
        url: "data/glumci1.json",
        method: "GET",
        success: function(data){
            data = data.filter(x => x.kategorije.id == categoryId);
            prikaziGlumce(data);
        }
    });
}

function PrikazPrveKategorije(kategorije){
return `<li class="kategorija1"><a href="#" class="aco" data-id="${kategorije.id }"><span>${ kategorije.naziv }</span>`;
}

function filtriranjeGlumaca() {
    const unosKorisnika = this.value;

    $.ajax({
      url: 'data/glumci1.json',
      method: 'GET',
      dataType: 'json',
      success: function (glumci) {
        const filtriraniGlumci = glumci.filter(el => {
          if (el.naziv.toLowerCase().indexOf(unosKorisnika.toLowerCase()) !== -1) {
            return true;
          }
          if (el.glumi.toLowerCase().indexOf(unosKorisnika.toLowerCase()) !== -1) {
            return true;
          }
        });
        prikaziGlumce(filtriraniGlumci);
      },
      error: function (err) {
        console.error(err);
      }
    });
  }

function sortirajPoGodinama() {
    $.ajax({
        url : "data/glumci1.json",
        method : "GET",
        type : "json",
        success : function(data) {
            data.sort(function(a,b) {
                if(a.godine == b.godine){
                    return 0;
				}else{
                return a.godine > b.godine ? -1 : 1;
					}
            });
            prikaziGlumce(data);
        },
        error : function(xhr, error, status) {
            alert(status);
        }
    });
}
  
function prikaziGlumce(data) {
    
        let ispis = "";
        for(let p of data) {
            ispis += 
            `<div class="glumac">
                <h3 id='imena'>${p.naziv}</h3>
                <img src="${p.slika}" alt="${p.naziv}"/>
                <p class='opisi'><b><i>Seasons:</i></b> <i>${p.sezone}</i> </p>
				<p class='opisi'><b><i>Episodes:</i></b> <i> ${p.epizode}</i> </p>
				<p class='opisi'><b><i>Ages:</i></b> <i>${p.godine}</i> </p>
				<p class='opisi'><b><i>Acter:</i></b> <i>${p.glumi} </i></p>
               
            </div>`
  
        }
        document.querySelector("#glumci").innerHTML = ispis;
}