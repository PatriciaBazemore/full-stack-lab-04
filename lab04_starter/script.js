
var rainbow = ['blue', 'purple', 'red', 'yellow', 'green', 'orange']


document.addEventListener('DOMContentLoaded', function() {
        var btn = document.createElement("button");
        btn.innerText="Add Square";
        btn.addEventListener('click', createBox);
        document.body.appendChild(btn);


    // var container = document.createElement('div');
    //     container.id = 'square container';
    //     document.body.appendChild(container);

    function createBox(){
        var div = document.createElement(div);
        var square = document.getElementsByClassName("Square");
        var boxNumber = square.length;
        // var existingSquares = document.getElementsByClassName('square').length;
        div.className = "Square"; 
        // container.appendChild(sq);   
        div.id= 'boxNumber';
        div.addEventListenr('click', color);
        div.innerText = boxNumber;
        div.addEventListener('mouseenter', hoover);
        div.addEventListener('dblclick', disappear);

}

// function addSquare(){
//     var sq = document.createElement(div);
//     var existingSquares = document.getElementsByClassName('square').length;
//     var square = document.getElementsByClassName("Square");
//     sq.className = "square"; 
//     container.appendChild(sq);
//     sq.id = existingSquares;
//     sq.addEventListener('click', changeColor);
//     sq.addEventListener('mouseenter', insertId);
//     sq.addEventListener('mouseleave', removeId);
//     sq.addEventListener('dblclick', removeNeighbor);
//  }

        

function hoover (){
    mouseenter = div.innerText(id);
    mouseleave = div.disappear(id);
}

// function insertId() {
//     var id = this.id;
//     this.innerText = id;

// }

// function removeId() {
//     this.innerText = '';
// }

function disappear (){
    if (boxNumber % 2 === 0){
        remove(this++1) {
            if 
        }

    } else {
        remove (this--1){

        }
     }
}
//       for (var i = 0; i < square.length; i++){
          
//       text"No More Squares!"       
              
//                var box = Square[0];
//              box.innerText=" box ";
// }

// function removeNeighbor() {
    
    
//     var id = this.id;

//     if (id % 2 === 0) {
//         //if even, remove the square after
//         if (this.nextSibling) {
//             this.nextSibling.remove();
//         } else {
//             alert('There are no elements to the right to remove.');
//         }
//     } else {
//         //if odd, remove the sqaure after
//         if (this.previousSibling) {
//             this.previousSibling.remove();
//         } else {
//             alert('There are no elements to the left to remove');
//         }
//     }

// }


function color(){
    background-color= rainbow[0]
}

var rainbowIndv= rainbow[0]

rainbowIndv= (i = 0 ; i > rainbow.length; i++){
    background-color: rainbow[i];

} 

div id=clicks
var clicks= number of times btn was clicked before 
        
btn.addEventListner('click', function(){

})

// function changeColor(event){  
//     var index = Math.floor(Math.random() * colors.length) 
//     var newColor = colors[index];
//     //we need to set newColor as the background of the clicked div
//     this.style.backgroundColor = newColor;
//     //event.target.style.backgroundColor = newColor;
// }




