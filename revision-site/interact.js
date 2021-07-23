/**
CODE ADAPTED FROM 'Increase/Decrease font size' BY LOUPHI
http://www.webdeveloper.com/forum/showthread.php?182175-increase-(-)-and-decrease-(-)-font-size-onscreen-controls
*/

// this function allows the font size to be changed
// when the corresponding buttons are clicked
// this only affects the main body,
// and not the navigation buttons

var min=10;
var max=18;
function increaseFontSize() {
   var p = document.getElementsByTagName('p');
   for(i=0; i<p.length; i++) {
      if(p[i].style.fontSize) {
         var s = parseInt(p[i].style.fontSize.replace("pt",""));
      } else {
         var s = 12;
      }
      if(s!=max) {
         s += 1;
      }
      p[i].style.fontSize = s+"pt"
   }
}
function decreaseFontSize() {
   var p = document.getElementsByTagName('p');
   
   for(i=0; i<p.length; i++) {
      if(p[i].style.fontSize) {
         var s = parseInt(p[i].style.fontSize.replace("pt",""));
      } else {
         var s = 12;
      }
      if(s!=min) {
         s -= 1;
      }
      p[i].style.fontSize = s+"pt"
   }   
}

/* END OF LOUPHI CODE */

// this method allows the stylesheets to be swapped
function swapStyleSheet(sheet){
	document.getElementById('page-design').setAttribute('href', sheet);
}

// this method allows for tabs to swap between panels on a page
function p_switch(id) {
	/* if box1 clicked, hide the other box */
    if(id == 'box1') {
    	document.getElementById('box1').style.display = "block";
    	document.getElementById('box2').style.display = "none";    	
    }
    
	if(id == 'box2') {
    	document.getElementById('box2').style.display = "block";
    	document.getElementById('box1').style.display = "none";    	
    }
	
	/* code for multiple boxes */
	if(id == 'boxA') {
    	document.getElementById('boxA').style.display = "block";
    	document.getElementById('boxB').style.display = "none";    	
		document.getElementById('boxC').style.display = "none"; 
    }
	
	if(id == 'boxB') {
    	document.getElementById('boxB').style.display = "block";
    	document.getElementById('boxA').style.display = "none"; 
		document.getElementById('boxC').style.display = "none";		
    }
	
	if(id == 'boxC') {
    	document.getElementById('boxC').style.display = "block";
    	document.getElementById('boxA').style.display = "none";
		document.getElementById('boxB').style.display = "none";    	
    }
    
}
