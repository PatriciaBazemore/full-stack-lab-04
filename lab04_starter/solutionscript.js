
var colors = ['red', 'blue,', 'green', 'cyan' , 'yellow'];

document.addEventListener('DOMContentLoaded', function() {
        var btn = document.createElement("button");
        btn.innerText="Add Square";
        btn.addEventListener('click', addSquare); 
        document.body.appendChild(btn);

   var container = document.createElement('div');
        container.id = 'square container';
        document.body.appendChild(container);

   function addSquare(){
      var existingSquares = document.getElementsByClassName('square').length;
      var sq = document.createElement('div');
      var square = document.getElementsByClassName("Square");
      sq.className = "square"; 
      container.appendChild(sq);
      sq.id = existingSquares;
      sq.addEventListener('click', changeColor);
      sq.addEventListener('mouseenter', insertId);
      sq.addEventListener('mouseleave', removeId);
      sq.addEventListener('dblclick', removeNeighbor);
   }

   function changeColor(event){  
       var index = Math.floor(Math.random() * colors.length) 
       var newColor = colors[index];
       //we need to set newColor as the background of the clicked div
       this.style.backgroundColor = newColor;
       //event.target.style.backgroundColor = newColor;
}

    function insertId() {
        var id = this.id;
        this.innerText = id;

    }

    function removeId() {
        this.innerText = '';
    }

    function removeNeighbor() {
        
        
        var id = this.id;

        if (id % 2 === 0) {
            //if even, remove the square after
            if (this.nextSibling) {
                this.nextSibling.remove();
            } else {
                alert('There are no elements to the right to remove.');
            }
        } else {
            //if odd, remove the sqaure after
            if (this.previousSibling) {
                this.previousSibling.remove();
            } else {
                alert('There are no elements to the left to remove');
            }
        }

    }
});

