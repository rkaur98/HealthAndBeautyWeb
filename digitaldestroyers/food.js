var foodvalues = localStorage.getItem('item');
 
var finalfood = JSON.parse(foodvalues);

console.log(finalfood);

jQuery(document).ready(function($){

result();

function result() {

    let notes = finalfood;
 
    let y = '';
    let m = '';
    let n = '';
    let sumCal = 0;
    let timeWalk;
    let timeRun;
    
    for(let i=0; i<notes.length; i++) {
        y += "<div id = 'notes' class = 'notes'><div id = 'foodnote'><div id='h4' class='h4'><h4>"+ (i+1) +".  " + notes[i][0] +" ( "+notes[i][1]+"cal )"+ "</h4></div><div id = 'detail-btn' ><button class='detail' id='detail"+i+"' >Details</button><button class='delete' id='" +i+ "' >Remove</button></div>"+"</div><div class='nutri wp-nutrition-label' id='wp-nutrition-label-339' ><div class='heading'>Nutrition Facts</div><div>Item Name: <span id = 'item-name'>"+notes[i][0]+"</span></div><hr /><div class='amount-per small item_row noborder'>Amount Per Serving</div><div class='item_row cf'><span class='f-left'  id = 'calories'>Calories "+notes[i][1]+" </span><span class='f-right'  id = 'calories-fat'>Calories from Fat "+notes[i][2]+"</span></div><div class='item_row daily-value small'>% Daily Value*</div><div class='item_row cf'><span class='f-left' id = 'fat'><strong>Total Fat</strong> "+notes[i][3]+" g</span><span class='f-right' id = 'fat-per'>"+notes[i][4]+"%</span></div><div class='indent item_row cf'><span class='f-left' id = 'sat-fat'>Saturated Fat "+notes[i][5]+" g</span><span class='f-right' id = 'sat-fat-per'>"+notes[i][6]+"%</span></div><div class='indent item_row cf'><span id = 'trans-fat'>Trans Fat "+notes[i][7]+" g</span><span class='f-right' id = 'trans-fat-per'>"+notes[i][8]+"%</span>  </div><div class='item_row cf'><span class='f-left' id = 'cholesterol'><strong>Cholesterol</strong> "+notes[i][9]+" mg</span><span class='f-right' id = 'cholesterol-per'>"+notes[i][10]+"%</span></div><div class='item_row cf'><span class='f-left' id = 'sodium'><strong>Sodium</strong> "+notes[i][11]+" mg</span><span class='f-right' id = 'sodium-per'>"+notes[i][12]+"%</span></div><div class='item_row cf'><span class='f-left'  id = 'carbo'><strong>Total Carbohydrate</strong> "+notes[i][13]+" g</span><span class='f-right' id = 'carbo-per'>"+notes[i][14]+"%</span></div><div class='indent item_row cf'><span class='f-left' id ='diet-fiber'>Dietary Fiber "+notes[i][15]+" g</span><span class='f-right' id ='diet-fiber-per'>"+notes[i][16]+"%</span></div><div class='indent item_row cf'><span id ='sugar'>Sugars "+notes[i][17]+" g</span>  </div><div class='item_row cf'><span class='f-left' id = 'protein'><strong>Protein</strong> "+notes[i][18]+" g</span><span class='f-right'>0%</span></div><hr /><div class='small cf'>*Percent Daily Values are based on a 2,000 calorie diet. Your daily values may be higher or lower depending on your calorie needs.</div></div></div>";
    
    
    sumCal += notes[i][1];
    
    
    
    };
    console.log(y);
    

     document.getElementById('foodlog').innerHTML = y;
     
     
     
        timeWalk = Math.round(sumCal*0.2728816);
        timeRun = Math.round(sumCal*0.09285667);
        
        if(timeWalk < 60)
            m += timeWalk + 'min';
        else
            m += Math.floor(timeWalk/60) + 'hr '+timeWalk%60 + 'min';
            
        if(timeRun < 60)
            n += timeRun + 'min';
        else
            n += Math.floor(timeRun/60) + 'hr'+timeRun%60 + 'min';
        
        
        
        
     
     document.getElementById('totalcal').innerHTML = "<h3>Total Calories : "+Math.round(sumCal)+"cal</h3><div id='calculator' class='calculator' ><div class='burncal'><h4>To burn off "+Math.round(sumCal)+"cal</h4></div><div id='cal' class='cal'><p>Walking(3mph): </p><p>"+m+"</p></div><div id='cal' class='cal'><p>Running(6mph): </p><p>"+n+"</p></div><p>** Estimated values for person weighting 140 lbs</p></div>";
    
    let del = document.getElementsByClassName('delete');
    
    let detail = document.getElementsByClassName('detail');
    for (let i=0; i < del.length; i++) {
        del[i].addEventListener('click', del_item);
    };
    
    for (let i=0; i < detail.length; i++) {
        $('#detail'+i).click(function(event) {
        event.preventDefault();
        
        $(this).parent().parent().next().toggleClass("showDetail");
        $(this).parent().parent().parent().toggleClass("showNote");
    $(this).html($(this).text() == 'Hide Details' ? 'Details' : 'Hide Details');
    });
    
    
    }
}
 
 function del_item() {

    let div = this.getAttribute('id');
    console.log(div);
    
    finalfood.splice(div, 1);
    localStorage.setItem('item', JSON.stringify(finalfood));

 
    result();
  }



});


 
 