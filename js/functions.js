

var frente,atraz,imga,numero = 0;
var lista = {
};
console.log(typeof(lista.div));


frente = document.getElementById('front');
atraz = document.getElementById('back');
frente.addEventListener('click', frentee);
atraz.addEventListener('click', traaz);
function cra(){
    for(var i =0; i < 3; i++){
        lista.div = document.createElement('div');
        lista.div.className = 'items';
        lista.div.id = 'abj';
        document.getElementById('deten').appendChild(lista.div);

    }
}
cra();
console.log(lista);

var imagens = {};



function frentee(){
    if(numero === 0){
        for(var i =0; i<3; i++){
            document.getElementById('abj').remove();

            
        
        }
        numero++;
    }else if(numero === 1){
        for(var i =0; i<3; i++){
            document.getElementById('abj').remove();

            
        
        }
        numero++;
    }else if(numero === 2){
        for(var i =0; i<3; i++){
            document.getElementById('abj').remove();

            
        
        }
        numero = 0;
        cra();
    }
    if(numero === 1){
        for(var i =0; i < 3; i++){
            lista.div = document.createElement('div');
            lista.div.className = 'items';
            lista.div.id = 'abj';
            lista.div.style.backgroundColor = "red";
            document.getElementById('deten').appendChild(lista.div);
        
        }

    }
    if(numero === 2){
        for(var i =0; i < 3; i++){
            lista.div = document.createElement('div');
            lista.div.className = 'items';
            lista.div.id = 'abj';
            lista.div.style.backgroundColor = "yellow";
            document.getElementById('deten').appendChild(lista.div);
        
        }

    }

    


    
}
function traaz(){
    if(numero === 0){
        for(var i =0; i<3; i++){
            document.getElementById('abj').remove();

            
        
        }
        numero = 2;
    }else if(numero === 1){
        for(var i =0; i<3; i++){
            document.getElementById('abj').remove();

            
        
        }
        numero = 0;
        cra();
    }else if(numero === 2){
        for(var i =0; i<3; i++){
            document.getElementById('abj').remove();

            
        
        }
        numero = numero -1;
        
    }
    if(numero === 1){
        for(var i =0; i < 3; i++){
            lista.div = document.createElement('div');
            lista.div.className = 'items';
            lista.div.id = 'abj';
            lista.div.style.backgroundColor = "red";
            document.getElementById('deten').appendChild(lista.div);
        
        }

    }
    if(numero === 2){
        for(var i =0; i < 3; i++){
            lista.div = document.createElement('div');
            lista.div.className = 'items';
            lista.div.id = 'abj';
            lista.div.style.backgroundColor = "yellow";
            document.getElementById('deten').appendChild(lista.div);
        
        }

    }

    
}






/*
function adc(){
    var div,n1;
    div = document.createElement("div")
    div.className = 'box'
    div.id = 'box'
    n1 = document.getElementById('flex').appendChild(div);
}
var d = document.getElementsByClassName('box');
d.addEventListener('click',function(){
    alert('você clcou');
    
});

*/