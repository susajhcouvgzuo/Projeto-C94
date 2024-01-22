
// Crie a variável canvas

var canvas = new fabric.Canvas('myCanvas');

//Defina as posições iniciais das imagens da bola e do buraco.
ball_y=0;
ball_x=0;
hole_y=400;
hole_x=800;


block_image_width = 5;
block_image_height = 5;

function load_img(){
	// programe o envio da imagem do buraco de golfe ao canvas
     fabric.Image.fromURL("golf-b.png", function(img) {
        hole_obj = Img;
		hole_obj.scaleToWidth(50);
		hole_obj.scaleToHeight(50);
		hole_obj.set({
            top:hole_y,
			left:hole_x

		});
		canvas.add(hole_obj);
	    });
	new_image();
}

function new_image()
{
	// programe o envio da imagem da bola ao canvas
	fabric.Image.fromURL("bola.png", function(img) {
        ball_obj = Img;
		ball_obj.scaleToWidth(50);
		ball_obj.scaleToHeight(50);
		ball_obj.set({
            top:ball_y,
			left:ball_x

		});
		canvas.add(ball_obj);
	    });
}

window.addEventListener("keydown", my_keydown);

function my_keydown(e)
{
	keyPressed = e.keyCode;
	console.log(keyPressed);
	/* Verifique as coordenadas da bola e do buraco para concluir o jogo.
	Identifique as coordenadas, caso forem iguais, remova  a imagem da bola,
	exiba "Você acertou o buraco!!"
	e troque a cor da borda do canvas para vermelho (red). */
	if((ball_x==hole_x)&&(ball_y==hole_y)){
		canvas.remove(ball_obj);
		document.getElementById("hd3").innerHTML="Voce acertou o buraco!!!";
		document.getElementById("myCanvas").style.borderColor="red";
	}
	
	
	
	else{
		if(keyPressed == '38')
		{
			up();
			console.log("cima");
		}
		if(keyPressed == '40')
		{
			down();
			console.log("baixo");
		}
		if(keyPressed == '37')
		{
			left();
			console.log("esquerda");
		}
		if(keyPressed == '39')
		{
			right();
			console.log("direita");
		}
	}
	
	function up()
	{
		// Programe o movimento da bola para cima.
		if(ball_y >=450)
		{
		   ball_y = ball_y + block_image_height;
		   console.log("altura do bloco da imagem =  " + block_image_height);
		   console.log("Quando a seta para baixo pressionada, X = " + ball_x + ", Y = "+ball_y);
		   canvas.remove(ball_obj);
		   new_image();
		   }
	}

	function down()
	{
		 // Programe o movimento da bola para baixo.
		 if(ball_y <=450)
		 {
			ball_y = ball_y + block_image_height;
			console.log("altura do bloco da imagem = "+ block_image_height);
			console.log("Quando a seta para baixo pressionada, X = " + ball_x + ", Y = "+ball_y);
			canvas.remove(ball_obj);
			new_image();
			}
			
	}

	function left()
	{
		if(ball_x >5)
		{
			// Programe o movimento da bola para a esquerda.
			ball_x = ball_x + block_image_width;
			console.log("altura do bloco da imagem = "+ block_image_height);
			console.log("Quando a seta para baixo pressionada, Y = " + ball_y + ", Y = "+ball_x);
			canvas.remove(ball_obj);
			new_image();
		}
	}

	function right()
	{
		if(ball_x <=1050)
		{
			// Programe o movimento da bola para a direita.
			ball_x = ball_x + block_image_width;
			console.log("altura do bloco da imagem = "+ block_image_height);
			console.log("Quando a seta para baixo pressionada, Y = " + ball_y + ", Y = "+ball_x);
			canvas.remove(ball_obj);
			new_image();
		}
	}
	
}

