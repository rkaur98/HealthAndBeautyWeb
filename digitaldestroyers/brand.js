display();

var p,q;

function display(){

    a=window.location.hash.substring(1);
    b=a.split('#',2);
    p=b[0];
    q=b[1];
    product(p,q);

    var r = p.toUpperCase()+" | "+q.toUpperCase();
    document.title = r;
}

function product(prod,brand){
    let url = "http://makeup-api.herokuapp.com/api/v1/products.json?product_type="+prod+"&brand="+brand;
    sendRequest(url);
}


function sendRequest(url){
    let xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function(){
        if(xmlhttp.readyState == 4 && xmlhttp.status == 200){
            let data = JSON.parse(xmlhttp.responseText);
            
            let makeup = {};
            let y = '';
            
            let brand = document.getElementById('branddes');
            var s = 0;

            for(let i=0;i<data.length;i++){

                makeup.id = data[i].id;
                makeup.name = data[i].name;
                if(data[i].price===null)
                    makeup.price = 10.97;
                else
                    makeup.price = data[i].price;
                makeup.image = data[i].image_link;
                

                let z='';
                if(data[i].product_colors.length !== 0){

                    for(let j=0;j<data[i].product_colors.length;j++){
                        makeup.color = data[i].product_colors[j].hex_value;
                        
                        

                        z += '<div style = "background : '+makeup.color+'"></div>';
                    }
                    
                }
                
                
                    y += '<div class="prod-des"><div class="image"><img src="'+makeup.image+'"><div id="color">'+z+'</div></div>'+'<div class="info"><h4>'+makeup.name+'</h4><div class="price"><strong>$'+makeup.price+'</strong></div></div></div>';  
            }    
            brand.innerHTML = y;

            document.getElementById('brandheader').innerHTML = '<h1>Product : '+p[0].toUpperCase()+p.slice(1)+'</h1><h2>Brand : '+q[0].toUpperCase()+q.slice(1)+'</h2>';

            

            
        }
        
    };
    
    xmlhttp.open("GET", url, true);
    xmlhttp.send();
}
