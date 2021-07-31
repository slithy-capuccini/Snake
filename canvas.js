var pos=[[],[]]
var objetos=[]
var direccion=0
var posiciones=[]
function getRandomInt(max) {
    ran=Math.floor(Math.random() * max)
    while(ran%20!=0){
        ran=Math.floor(Math.random() * max)
    }
    return ran
}
contador=0
conta=0
random=(getRandomInt(500));
random2=(getRandomInt(500));
function startGame() {
    myGamePiece = new component(20, 20, "green", 0, 0);
    myGamePiece2=new component2(20, 20,"yellow",random,random2);
    myGameArea.start();
}
function sleep(milliseconds) {
    const date = Date.now();
    let currentDate = null;
    do {
      currentDate = Date.now();
    } while (currentDate - date < milliseconds);
}  
var myGameArea = {
    canvas : document.createElement("canvas"),
    start : function() {
        this.canvas.width = 500;
        this.canvas.height = 500;
        this.context = this.canvas.getContext("2d");
        document.body.insertBefore(this.canvas, document.body.childNodes[0]);
        this.interval = setInterval(updateGameArea, 20);
    },
    clear : function() {
        this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
    }
}
function component(width, height, color, x, y) {
    this.width = width;
    this.height = height;
    this.speedX = 0;
    this.speedY = 0;
    this.x = x;
    this.y = y;    
    this.update = function() {
        ctx = myGameArea.context;
        ctx.fillStyle = color;
        ctx.fillRect(this.x, this.y, this.width, this.height);
    }
    this.newPos = function() {
        if(this.x==-20){
            alert("You lose ;( with "+contador+" points")
        }else if(this.x==500){
            alert("You lose ;( with "+contador+ " points")
        }else if(this.y==-20){
            alert("You lose ;( with "+contador+ " points")
        }else if(this.y==500){
            alert("You lose ;( with "+contador+" points")
        }
        this.x += this.speedX;
        this.y += this.speedY;
        pos[0][conta]=this.x;
        pos[1][conta]=this.y;
        conta+=1       
        sleep(75)

    }    
}
function component3(cont) {
    this.width = 20;
    this.height = 20;
    this.speedX = 0;

    this.speedY = 0;
    this.x = -20;
    this.y =  -20;    
    this.update = function() {
        ctx = myGameArea.context;
        ctx.fillStyle = "green";
        ctx.fillRect(this.x, this.y, this.width, this.height);
    }
    this.newPos=function(){
        this.x=pos[0][pos[0].length - cont-1]
        this.y=pos[1][pos[1].length - cont-1]
    }
}
function component2(width, height, color, x, y) {
    this.width = width;
    this.height = height;
    this.speedX = 0;
    this.speedY = 0;
    this.x = x;
    this.y = y;    
    this.update = function() {
        ctx = myGameArea.context;
        ctx.fillStyle = color;
        ctx.fillRect(this.x, this.y, this.width, this.height);
    }
    this.newPos=function() {
        this.x=getRandomInt(500)
        this.y=getRandomInt(500)
    }

}
function updateGameArea() {
    if(myGamePiece.x==myGamePiece2.x){
        if(myGamePiece.y==myGamePiece2.y){
            myGamePiece2.newPos();
            myGamePiece3=new component3(contador);
            objetos.push(myGamePiece3);
            contador+=1
            document.getElementById("cont").innerHTML="Contador:"+contador;
        }
    }
    myGameArea.clear();
    myGamePiece.newPos();    
    myGamePiece.update();

    myGamePiece2.update();
    for(let i=0;i<objetos.length;i++){
        if(myGamePiece.x==objetos[i].x && myGamePiece.y==objetos[i].y){
            alert("CAGASTE")
        }
        objetos[i].update();
        objetos[i].newPos();
    }
}

document.addEventListener("keypress", function onEvent(event) {
    if (event.key === "a" && direccion!=4) {
        myGamePiece.speedY = 0;
        myGamePiece.speedX = -20;
        direccion=1
    }
    else if (event.key === "w" && direccion!=3) {
        myGamePiece.speedX = 0; 
        myGamePiece.speedY = -20; 
        direccion=2
    }
    else if (event.key === "s" && direccion!=2) {
        myGamePiece.speedX =0; 
        myGamePiece.speedY = 20; 
        direccion=3
    }
    else if (event.key === "d" && direccion!=1) {
        myGamePiece.speedY = 0;
        myGamePiece.speedX = 20; 
        direccion=4
    }
});
