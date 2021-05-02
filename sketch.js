//https://youtu.be/6D9Y00rmuQ8
//http://www.colabeduc.org/descricao/show/480
let tela = [1];
var teste = []
let musica;
let looping = false;

function setup() {
  
  createCanvas(854, 480);  
  
  musica = createAudio('Audioback.mp3');
    if (!looping) {      
      musica.loop();
      musica.volume(0.2)
      looping = true;     
    }

}


//UPLOAD DE IMAGENS E AUDIO

var img =[];
function preload() {
  img[0]= loadImage('voltar.png');
  img[1] = loadImage('Back.jpg');
  img[2] = loadImage('Jogar.png');
  img[3] = loadImage('credito1.png')
  img[4] = loadImage('Instruções.png') 
  img[5] = loadImage('Tela2.png')
  img[6] = loadImage('creditos.jpg')
  img[7] = loadImage('fase1.jpg')
  img[8] = loadImage('correto.png')
  img[9] = loadImage('primeiro.png')
  img[10] = loadImage ('segundo.png')
  img[11] = loadImage ('terceiro.png')
  img[12] = loadImage ('quarto.png')
  img[13] = loadImage ('quinto.png')
  img[14] = loadImage ('sexto.png')
  img[15] = loadImage ('parabens.png')
  img[16] = loadImage('fase2.jpg')
  img[17] = loadImage('primeiro2.png')
  img[18] = loadImage ('segundo2.png')
  img[19] = loadImage ('terceiro2.png')
  img[20] = loadImage ('quarto2.png')
  img[21] = loadImage ('quinto2.png')
  img[22] = loadImage ('sexto2.png')
  img[23] = loadImage('fase3.jpg')
  img[24] = loadImage('primeiro3.png')
  img[25] = loadImage ('segundo3.png')
   img[26] = loadImage ('terceiro3.png')
  img[27] = loadImage ('quarto3.png')
  img[28] = loadImage ('quinto3.png')
  img[29]= loadImage ('sexto3.png')
  img[30] = loadImage('fase4.jpg')
  img[31] = loadImage('primeiro4.png')
  img[32] = loadImage('segundo4.png')
  img[33] = loadImage('terceiro4.png')
  img[34] = loadImage('quarto4.png')
  img[35] = loadImage('quinto4.png')
  img[36] = loadImage('fase5.jpg')
   img[37] =loadImage('primeiro5.png')
  img[38] = loadImage('segundo5.png')
  img[39] = loadImage('terceiro5.png')
  img[40] = loadImage('quarto5.png')
  img[41] = loadImage('Quinto5.png')
   img[42] = loadImage('fim.jpg')
  click= createAudio ('Click.mp3')
  sino = createAudio ('Sino.mp3')
  congrat = createAudio('congratulation.mp3')
  congrat2 = createAudio('congratulation.mp3')
  congrat3 = createAudio('congratulation.mp3')
  congrat4 = createAudio('congratulation.mp3')
  proxf = createAudio('proxf.mp3')
}



//MENU


function draw() {
  if (tela==1){
  background(176,224,230);
  image(img[1], 0, 0)
  image(img[2], 266, 120)
  image(img[3], 266, 320)
  image(img[4], -10, 21)
    
    
//COMANDOS MOUSE(menu)    

    if((mouseIsPressed) && mouseX>315 && mouseX<=315+220 && mouseY>240 && mouseY<=240+70){
      tela=2 
      click.play()
      
    }
    if((mouseIsPressed) && mouseX>315 && mouseX<=315+220 && mouseY>340 && mouseY<=340+65){
      tela=3
    click.play()}
    if((mouseIsPressed) && mouseX>315 && mouseX<=315+220 && mouseY>140 && mouseY<=140+65){
      tela=4
      click.play()} 
}
  //Tela Intruções
  
  if(tela==2){
     image(img[5], 1, 1)
     image(img[0], 10, 10)
      if((mouseIsPressed) && mouseX>10 && mouseX<=10+50 && mouseY>10 && mouseY<=10+50){
          tela=1 
      click.play()
      }
  }
  
  //Tela Créditos
  
     if(tela==3){
       image(img[6], 1, 1);
       image(img[0], 10, 10);
         if((mouseIsPressed) && mouseX>10 && mouseX<=10+50 && mouseY>10 && mouseY<=10+50){
          tela=1
           click.play()
  }
}
  
  //Tela Jogar - 1° Fase
  
       else if(tela==4){
       image(img[7], 0, 0)
        
  //Primeiro 
         
        if((mouseIsPressed) && mouseX>270 && mouseX<=270+60 && mouseY>310 && mouseY<=310+25){
           teste[1] = true;
          sino.play()
          sino.volume(0.4)
          
}
           if (teste[1] == true){
      image(img[8], -110, 59)
           image(img[9], 0, 0)
            
             
}
         
  //Segundo
         
           if((mouseIsPressed) && mouseX>235 && mouseX<=235+130 && mouseY>360 && mouseY<=360+110){
             teste[2] = true; 
             sino.play()
} 
         
          if (teste[2] == true){
      image(img[8], -220,181)
           image(img[10], 0,0)
            
}

         //Terceiro 
         
         if((mouseIsPressed) && mouseX>510 && mouseX<=510+60 && mouseY>365 && mouseY<=365+100){
           teste[3] = true;
           sino.play()
}       
         if (teste[3] == true){
           image(img[8], 120,120)
           image(img[11], 0,0)
           
}
         
   //Quarto
         
          if((mouseIsPressed) && mouseX>498 && mouseX<=498+75 && mouseY>230 && mouseY<=230+60){
           teste[4] = true;
            sino.play()
}
          
         if (teste[4] == true){
      image(img[8], 120,-20)
           image(img[12], 0,0)
           
}  
         
    //Quinto
         
          if((mouseIsPressed) && mouseX>435 && mouseX<=435+35 && mouseY>373 && mouseY<=373+70){
           teste[5] = true;
            sino.play()
         }
         
         if (teste[5] == true){
          image(img[8], 40,125)
          image(img[13], 0,0)
          
}
         
    //Sexto
         
          if((mouseIsPressed) && mouseX>595 && mouseX<=595+35 && mouseY>373 && mouseY<=373+70){
           teste[6] = true;
            sino.play()
}        
         if (teste[6] == true){
           image(img[8], 205,125)           
           image(img[14], 0,0)
           
}
         
         if (teste[1] && teste[2] && teste[3] && teste[4] && teste[5] && teste[6]==true){          
           image(img[15],0,0)
           congrat.autoplay(1)
          
           
           
               if((mouseIsPressed) && mouseX>300 && mouseX<=300+251 && mouseY>45 && mouseY<=45+50){
    tela=5
     click.play()
     
    
}
  }
    }
  //Fase 2
  if (tela==5){
    
  image(img[16],0,0)
    //Primeiro²
        if((mouseIsPressed) && mouseX>30 && mouseX<=30+90 && mouseY>30 && mouseY<=30+90){
           teste[7] = true;
          sino.play()
          sino.volume(0.4)
}
           if (teste[7] == true){
           image(img[17], 0, 0)
            
             
}
    //Segundo²
    if((mouseIsPressed) && mouseX>25 && mouseX<=25+150 && mouseY>210 && mouseY<=210+180){
           teste[8] = true;
          sino.play()
          sino.volume(0.4)
}
           if (teste[8] == true){
           image(img[18], 0, 0)
            
             
}
    //Terceiro²
        if((mouseIsPressed) && mouseX>203 && mouseX<=203+50 && mouseY>422 && mouseY<=422+50){
           teste[9] = true;
          sino.play()
          sino.volume(0.4)
}
           if (teste[9] == true){
           image(img[19], 0, 0)
            
             
}
    //Quarto²
   
            if((mouseIsPressed) && mouseX>290 && mouseX<=290+50 && mouseY>419 && mouseY<=419+50){
           teste[10] = true;
          sino.play()
          sino.volume(0.4)
}
           if (teste[10] == true){
           image(img[20], 0, 0)
            
             
}
    //Quinto²
    
                if((mouseIsPressed) && mouseX>513 && mouseX<=513+45 && mouseY>428 && mouseY<=428+45){
           teste[11] = true;
          sino.play()
          sino.volume(0.4)
}
           if (teste[11] == true){
           image(img[21], 0, 0)
            
             
}
    //Sexto²
    
                    if((mouseIsPressed) && mouseX>675 && mouseX<=675+150 && mouseY>210 && mouseY<=210+175){
           teste[12] = true;
          sino.play()
          sino.volume(0.4)
}
           if (teste[12] == true){
           image(img[22], 0, 0)
            
             
}
     if (teste[7] && teste[8] && teste[9] && teste[10] && teste[11] && teste[12]==true){          
           image(img[15],0,0)
       congrat2.autoplay(1)
           
          
               if((mouseIsPressed) && mouseX>300 && mouseX<=300+251 && mouseY>45 && mouseY<=45+50){
    tela=6
     click.play()
    
}
  }
    }
  
  //Fase 3
  
  if (tela==6){
    
  image(img[23],0,0)
    //Primeiro³
            if((mouseIsPressed) && mouseX>466 && mouseX<=466+190 && mouseY>160 && mouseY<=160+250){
           teste[13] = true;
          sino.play()
          sino.volume(0.4)
}
           if (teste[13] == true){
           image(img[24], 0, 0)
            
             
}
    //Segundo³
    
                if((mouseIsPressed) && mouseX>685 && mouseX<=685+50 && mouseY>210 && mouseY<=210+100){
           teste[14] = true;
          sino.play()
          sino.volume(0.4)
}
           if (teste[14] == true){
           image(img[25], 0, 0)
            
             
}
    //Terceiro³
    
    if((mouseIsPressed) && mouseX>740 && mouseX<=740+95 && mouseY>175 && mouseY<=175+168){
           teste[15] = true;
          sino.play()
          sino.volume(0.4)
}
           if (teste[15] == true){
           image(img[26], 0, 0)
            
             
}
    //Quarto³
    
    if((mouseIsPressed) && mouseX>592 && mouseX<=590+45 && mouseY>437 && mouseY<=437+40){
           teste[16] = true;
          sino.play()
          sino.volume(0.4)
}
           if (teste[16] == true){
           image(img[27], 0, 0)
            
             
}
    //Quinto³
    if((mouseIsPressed) && mouseX>409 && mouseX<=409+40 && mouseY>341 && mouseY<=341+40){
           teste[17] = true;
          sino.play()
          sino.volume(0.4)
}
           if (teste[17] == true){
           image(img[28], 0, 0)
            
             
}
    //Sexto³
    if((mouseIsPressed) && mouseX>710 && mouseX<=710+40 && mouseY>328 && mouseY<=328+40){
           teste[18]= true;
          sino.play()
          sino.volume(0.4)
}
           if (teste[18] == true){
           image(img[29], 0, 0)
            
             
}
   if (teste[13] && teste[14] && teste[15] && teste[16] && teste[17] && teste[18]==true){          
           image(img[15],0,0)  
     congrat3.autoplay(1)
          
               if((mouseIsPressed) && mouseX>300 && mouseX<=300+251 && mouseY>45 && mouseY<=45+50){
    tela=7
     click.play()
    
}
  }
    }
  
  //Fase 4
  
          if (tela==7){    
  image(img[30],0,0)
             //Primeiro4
            if((mouseIsPressed) && mouseX>275 && mouseX<=275+100 && mouseY>290 && mouseY<=290+40){
           teste[19]= true;
          sino.play()
          sino.volume(0.4)
}
           if (teste[19] == true){
           image(img[31], 0, 0)
            
             
}
            //Segundo4
            if((mouseIsPressed) && mouseX>412 && mouseX<=412+40 && mouseY>330 && mouseY<=330+60){
           teste[20]= true;
          sino.play()
          sino.volume(0.4)
}
           if (teste[20] == true){
           image(img[32], 0, 0)
            
             
}
            //Terceiro4
            
             if((mouseIsPressed) && mouseX>585 && mouseX<=585+65 && mouseY>422 && mouseY<=422+50){
           teste[21]= true;
          sino.play()
          sino.volume(0.4)
}
           if (teste[21] == true){
           image(img[33], 0, 0)
            
             
}
            //Quarto4
        
            if((mouseIsPressed) && mouseX>665 && mouseX<=665+115 && mouseY>348 && mouseY<=348+30){
           teste[22]= true;
          sino.play()
          sino.volume(0.4)
}
           if (teste[22] == true){
           image(img[34], 0, 0)
            
             
}
            //Quinto4
           
            if((mouseIsPressed) && mouseX>745 && mouseX<=745+60 && mouseY>105 && mouseY<=105+70){
           teste[23]= true;
          sino.play()
          sino.volume(0.4)
}
           if (teste[23] == true){
           image(img[35], 0, 0)
            
             
}
               if (teste[19] && teste[20] && teste[21] && teste[22] && teste[23] ==true){          
           image(img[15],0,0) 
                 congrat4.autoplay(1)
          
               if((mouseIsPressed) && mouseX>300 && mouseX<=300+251 && mouseY>45 && mouseY<=45+50){
    tela=8
     click.play()
    
}     
     }     
          }
  //Fase 5
  if (tela==8){    
  image(img[36],0,0)
  
    //Primeiro5
    
    if((mouseIsPressed) && mouseX>25 && mouseX<=25+130 && mouseY>245 && mouseY<=245+170){
           teste[24]= true;
          sino.play()
          sino.volume(0.4)
}
           if (teste[24] == true){
           image(img[37], 0, 0)
            
             
}
    //Segundo5
    if((mouseIsPressed) && mouseX>710&& mouseX<=710+130 && mouseY>90 && mouseY<=90+170){
           teste[25]= true;
          sino.play()
          sino.volume(0.4)
}
           if (teste[25] == true){
           image(img[38], 0, 0)
            
             
}
    //Terceiro5
    
     if((mouseIsPressed) && mouseX>290&& mouseX<=290+40 && mouseY>300 && mouseY<=300+60){
           teste[26]= true;
          sino.play()
          sino.volume(0.4)
}
           if (teste[26] == true){
           image(img[39], 0, 0)
            
             
}
    
    //Quarto5
    
    
    if((mouseIsPressed) && mouseX>450&& mouseX<=450+180 && mouseY>235 && mouseY<=235+110){
           teste[27]= true;
          sino.play()
          sino.volume(0.4)
}
           if (teste[27] == true){
           image(img[40], 0, 0)
            
             
}
    
    //Quinto5
    
    if((mouseIsPressed) && mouseX>730&& mouseX<=730+30 && mouseY>280 && mouseY<=280+35){
           teste[28]= true;
          sino.play()
          sino.volume(0.4)
}
           if (teste[28] == true){
           image(img[41], 0, 0)
            
             
}
  
  if (teste[24] && teste[25] && teste[26] && teste[27] && teste[28] ==true){          
           image(img[42],0,0) 
    proxf.autoplay(1)
    musica.stop()
          
              
                 
    
}     
   }    
  
  
  
}