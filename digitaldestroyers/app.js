jQuery(document).ready(function($){

display();

function display(){

    $( "#btn" ).click(function() {
        let input  = document.getElementById('input_item');
        let x = input.value;
        document.getElementById('message').innerHTML = "";
        product(x);
    });
    
    $('#input_item').keypress(function(e){
            if(e.which == 13){
                $('#btn').click();
            }
        });
        
    
    
}



function product(x){
    let url = "https://api.nutritionix.com/v1_1/search/"+x+"?results=0:20&fields=*&appId=fea379e3&appKey=88b5764074c5dfed8c5572cb118f48f7";
    sendRequest(url);
}


function sendRequest(url){
    let xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function(){
        if(xmlhttp.readyState == 4 && xmlhttp.status == 200){
            let data = JSON.parse(xmlhttp.responseText);
            
            let fact = {};
            let y = '';
            
            let itemdes = document.getElementById('itemdes');
            let prod = document.getElementById('productdes');
            let foodlog ;
            let nutrifact = document.getElementById('wp-nutrition-label-339');
            let item_name = document.getElementById('item-name');
            let calories = document.getElementById('calories');
            let calories_fat = document.getElementById('calories-fat');
            
            let fat = document.getElementById('fat');
            let fat_per = document.getElementById('fat-per');
            
            let sat_fat = document.getElementById('sat-fat');
            let sat_fat_per = document.getElementById('sat-fat-per');
            
            let trans_fat = document.getElementById('trans-fat');
            let trans_fat_per = document.getElementById('trans-fat-per');
            
            let cholesterol = document.getElementById('cholesterol');
            let cholesterol_per = document.getElementById('cholesterol-per');
            
            let sodium = document.getElementById('sodium');
            let sodium_per = document.getElementById('sodium-per');
            
            let carbo = document.getElementById('carbo');
            let carbo_per = document.getElementById('carbo-per');
            
            let diet_fiber= document.getElementById('diet-fiber');
            let diet_fiber_per= document.getElementById('diet-fiber-per');
            
            let sugar= document.getElementById('sugar');
            let protein= document.getElementById('protein');
            
            var s = 0;
            
            if(data.total_hits == 0){
                alert("Searched item does not exist \n\nClick OK to continue");
            }
            
            var a = data.hits[0].fields.item_name;
            var b = Math.round(data.hits[0].fields.nf_calories);
            var c = Math.round(data.hits[0].fields.nf_calories_from_fat);
            var d = Math.round(data.hits[0].fields.nf_total_fat);
            var e = Math.round((data.hits[0].fields.nf_total_fat/65)*100);
            var f = Math.round(data.hits[0].fields.nf_saturated_fat);
            var g = Math.round((data.hits[0].fields.nf_saturated_fat/20)*100);
            var h = Math.round(data.hits[0].fields.nf_trans_fatty_acid);
            var i = Math.round((data.hits[0].fields.nf_trans_fatty_acid/20)*100);
            var j = Math.round(data.hits[0].fields.nf_cholesterol);
            var k = Math.round((data.hits[0].fields.nf_cholesterol/300)*100);
            var l = Math.round(data.hits[0].fields.nf_sodium);
            var m = Math.round((data.hits[0].fields.nf_sodium/2400)*100);
            var n = Math.round(data.hits[0].fields.nf_total_carbohydrate);
            var o = Math.round((data.hits[0].fields.nf_total_carbohydrate/300)*100);
            var p = Math.round(data.hits[0].fields.nf_dietary_fiber);
            var q = Math.round((data.hits[0].fields.nf_dietary_fiber/300)*100);
            var r = Math.round(data.hits[0].fields.nf_sugars);
            var s = Math.round(data.hits[0].fields.nf_protein);
            
            itemdes.innerHTML = '<h3>'+a+'</h3><a href="#" id="addfood" >Add to Food Log</a>';
            
            item_name.innerHTML = a;
            calories.innerHTML = 'Calories '+ b + ' g';
            calories_fat.innerHTML = 'Calories from Fat '+ c;
            
            fat.innerHTML = '<strong>Total Fat</strong> '+ d + ' g';
            fat_per.innerHTML = e + '%';
            
            sat_fat.innerHTML = 'Saturated Fat '+ f + ' g';
            sat_fat_per.innerHTML = g + '%';
            
            trans_fat.innerHTML = 'Trans Fat '+ h + 'g';
            trans_fat_per.innerHTML = i + ' %';
            
            cholesterol.innerHTML = '<strong>Cholesterol</strong> '+ j + ' mg';
            cholesterol_per.innerHTML = k + '%';
            
            sodium.innerHTML = '<strong>Sodium</strong> '+ l + ' mg';
            sodium_per.innerHTML = m + '%';
            
            carbo.innerHTML = '<strong>Total Carbohydrate</strong> '+ n + ' g';
            carbo_per.innerHTML = o + '%';
            
            diet_fiber.innerHTML = 'Dietary Fiber '+ p + ' g';
            diet_fiber_per.innerHTML = q + '%';
            
            sugar.innerHTML = 'Sugars '+ r + ' g';
            
            protein.innerHTML = '<strong>Protein</strong> '+ s + ' g';
            
            
            
            y += '<h2>Relative Search</h2>';

            for(let i=0;i<4;i++){

                fact.name = data.hits[i].fields.item_name;
      
                y += '<a href ="#"  id ="rsearch'+i+'" class = "rsearch"><div class="proddes">'+'<div class="info"><h3>'+fact.name+'</h3></div></div></a>';  
            } 
            
              
            prod.innerHTML = y;
            
            
            $( "#addfood" ).click(function(event) {
                event.preventDefault();
        
        addFood();
        document.getElementById('message').innerHTML = "<p>Food added to your log.<p>";
        
        });   
        
        function getFood(){
            let myArr= new Array();
            let list_item = localStorage.getItem('item');  /*global localStorage */
             if (list_item !== null) {
                myArr = JSON.parse(list_item); 
            }
            return myArr;
        }
        
        function addFood(){
            var y = [a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s];
            let food = getFood();
                    food.push(y);
                    localStorage.setItem('item', JSON.stringify(food));
                    console.log(food);
        }
        
        for(let i=0;i<4;i++){   
        $( ".rsearch" ).click(function(event) {
            
            let inp = $(this).find("h3").html();
            console.log(inp);
            product(inp);
            
        });
        }
        
        var chart = document.getElementById('tableEdit');
        
        chart.innerHTML = '';
        
        
        ip4.draw({ "template": ip4.pieChart(), "parentElement": "#kcal", "data": { "reader": ip4.dataReader() .data([ {"x": "Protein", "y": s.valueOf() }, {"x": "Carbohydrate", "y": n.valueOf()}, {"x": "Fat", "y": d.valueOf()} ]) }, "d3": { "yLabel": "kilo calories (kcal)" }});
                   
           }
           
           
        
    };
    
    xmlhttp.open("GET", url, true);
    xmlhttp.send();
}



            
       
            



    
});



