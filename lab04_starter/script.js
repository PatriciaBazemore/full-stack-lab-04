




var btn = document.createElement("button");
        btn.innerText="Add Square";
        btn.addEventListener('click', createBox());
    
    

document.body.appendChild(btn);

function createBox(){
    var div = document.createElement(div);
      var square = document.getElementsByClassName("Square");
        div.className = "Square"; 
         var boxNumber = square.length;
           div.id= 'boxNumber';
             div.innerText= boxNumber;
               div.addEventListener('mouseenter', function(){
                   hoover();
                 div.addEventListenr('click', function(){
                    color();
                    div.addEventListener('dblclick', function(){
                        disappear()
                    })
                 });
              }
}

        

function hoover(){
    mouseenter=
    mouseleave=
}

rainbow= [ blue, purple, red, yellow, green, orange, ]

function color(){
    background-color = rainbow[0]
}

function disappear (){
    if (boxNumber % 2 === 0){

    } else {

    }
}
 //      for (var i = 0; i < square.length; i++){
          
  //    text"No More Squares!"       
              
       //           var box = Square[0];
        //          box.innerText=" box ";
}





//div id=clicks
//var clicks= number of times btn was clicked before 
        



// btn.addEventListner('click', function(){

//})

