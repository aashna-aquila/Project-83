var mouseEvent = "empty";
var last_position_of_x, last_position_of_y;

    canvas = document.getElementById('myCanvas');
    ctx = canvas.getContext("2d");
    
    color = "black";
    width_of_line = 2;
    var width=screen.width;
    new_width=screen.width-70;
    new_height=screen.height-300;
    if(width<992){
        document.getElementById("myCanvas").width=new_width;
        document.getElementById("myCanvas").height=new_height;
        document.body.style.overflow="hidden";

    }

    canvas.addEventListener("touchstart", my_touchstart);
    
    function my_touchstart(e)
    {
        
     console.log("touchstart");
last_position_of_x=e.touches[0].clientX-canvas.offsetLeft;
last_position_of_y=e.touches[0].clientY-canvas.offsetTop;
    }


    canvas.addEventListener("touchmove", my_touchmove);
    function my_touchmove(e)
    {
console.log("touchmove");
         current_position_of_mouse_x = e.touches[0].clientX - canvas.offsetLeft;
         current_position_of_mouse_y = e.touches[0].clientY - canvas.offsetTop;

         
        ctx.beginPath();
        ctx.strokeStyle = color;
        ctx.lineWidth = width_of_line;

        console.log("Last position of x and y coordinates = ");
        console.log("x = " + last_position_of_x + "y = " + last_position_of_y);
        ctx.moveTo(last_position_of_x, last_position_of_y);

        console.log("Current position of x and y coordinates = ");
        console.log("x  = " + current_position_of_mouse_x + "y = " + current_position_of_mouse_y);
        ctx.lineTo(current_position_of_mouse_x, current_position_of_mouse_y);
        ctx.stroke();
        

        last_position_of_x = current_position_of_mouse_x; 
        last_position_of_y = current_position_of_mouse_y;
    }
    canvas.addEventListener("mousedown",myMouseDown);
    function myMouseDown(e)
    {
        
        mouseEvent="mouseDown";
    }
    canvas.addEventListener("mouseup",myMouseUp);
function myMouseUp(e)
{
    mouseEvent="mouseUp";
}

canvas.addEventListener("mouseleave",myMouseLeave);
function myMouseLeave(e)
{
    mouseEvent="mouseLeave";
}
canvas.addEventListener("mousemove",myMouseMove);
function myMouseMove(e)
{
 current_position_of_X=e.clientX-canvas.offsetLeft;
 current_position_of_Y=e.clientY-canvas.offsetTop;
 if(mouseEvent=="mouseDown")
{
     ctx.beginPath();
     ctx.strokeStyle=color;
     ctx.lineWidth=width_of_line;
     ctx.moveTo(last_position_of_x,last_position_of_y);
     ctx.lineTo(current_position_of_X,current_position_of_Y);
     ctx.stroke();
 }
 last_position_of_x=current_position_of_X;
 last_position_of_y=current_position_of_Y;
}
