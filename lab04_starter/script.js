
var rainbow = ['blue', 'purple', 'red', 'yellow', 'green', 'orange']


document.addEventListener('DOMContentLoaded', function() {
        var btn = document.createElement("button");
        btn.innerText= "Add Square";
        btn.addEventListener('click', createBox);
        document.body.appendChild(btn);

    var container = document.createElement('div');
        container.id = 'square container';
        document.body.appendChild(container);
    
    function createBox(){
        var boxNumber = document.getElementsByClassName('square').length;
        var sq = document.createElement('div');
        var square = document.getElementsByClassName("Square");
        sq.className = "square"; 
        container.appendChild(sq);   
        sq.id = boxNumber;
        sq.addEventListener('click', color);
        sq.addEventListener('mouseenter', insertId);
        sq.addEventListener('mouseleave', removeId);
        sq.addEventListener('dblclick', disappear);
}

    function insertId() {
        var id = this.id;
        this.innerText = id;
    }

    function removeId() {
        this.innerText = '';
    }

    function disappear() {
        var id = this.id;
        if (id % 2 === 0) {
            if (this.nextSibling) {
                this.nextSibling.remove(); 
            } else {
                alert('There are no squares to the right to remove!');
            }
        } else {
            if (this.previousSibling) {
                this.previousSibling.remove();
            } else {
                alert('There are no squares to the left to remove!');
            }
        }
    }

    function color(event){
        var index = Math.floor(Math.random() * rainbow.length);
        var rainbowIndv = rainbow[index];
        //we need to set newColor as the background of the clicked div
        this.style.backgroundColor = rainbowIndv
        //event.target.style.backgroundColor = newColor;
    }
    
});


