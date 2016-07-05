      var index;
  		var backg=document.getElementById("name").style.backgroundColor;
  		var bg=document.getElementById("border");
  		window.onload=function()
  		{
  			window.setInterval(bgchanger,4000);
  		}
  		function bgchanger()
  		{
  			index=Math.round(Math.random()*4);
  			if(index===1)
  			bg.style.backgroundImage="url('/home/qburst/Desktop/sample 2/images/fruit_vegetables_fish_garnish_lemon_food_74301_2048x1152.jpg')";
  			else if(index===2)
  			bg.style.backgroundImage="url('/home/qburst/Desktop/sample 2/images/food_picture_02_hd_pictures_167557.jpg')";
  			else if(index===3)
  			bg.style.backgroundImage="url('/home/qburst/Desktop/sample 2/images/food_picture_03_hd_pictures_167556.jpg')";
  			else if(index===4)
  			bg.style.backgroundImage="url('/home/qburst/Desktop/sample 2/images/1412wallpaper-hamburger.jpg')";
  			
  		}
  		function scroll(x)
  		{
  			window.scrollTo(0,280);
  		}
  		
  		function popup()
  		{
  			document.getElementById("popup1").style.visibility="visible";
			document.getElementById("popup1").style.opacity=1;
  		}
  		function popdown()
  		{
  			document.getElementById("popup1").style.visibility="hidden";
			document.getElementById("popup1").style.opacity=0;			
  		}
  		function validate()
  		{
  			
  			var name=document.getElementById("name");
  			var email=document.getElementById("email");
  			var ph=document.getElementById("phone");
  			var atpos=email.value.indexOf("@");
  			var dotpos = email.value.lastIndexOf(".");
        //alert(atpos);
  			var numbers = /^9\d{9}$/; 
    		if(name.value=="")
  				{
  					name.placeholder="Name not entered";
  					name.style.borderColor="red";
  					name.focus();
  					
  				}
  			
  			else if(email.value=="" || (dotpos<atpos+2 || dotpos+2>=email.value.length) )
  				{
        			email.value="";
        			email.placeholder="E-mail not valid";
        			email.style.borderColor="red";
  					   email.focus();
  					
  				}
  			else if(!(ph.value.match(numbers)))
  			{
  					ph.value="";
        			ph.placeholder="Phone no not valid";
        			ph.style.borderColor="red";
  					ph.focus();
  					
  			}
       
  			else
  			{
          
  				name.style.borderColor="#6F7070";
  				email.style.borderColor="#6F7070";
  				ph.style.borderColor="#6F7070";
  			document.getElementById("popup1").style.visibility="hidden";
			document.getElementById("popup1").style.opacity=0;
			name.value="";
			ph.value="";
			email.value="";
			alert("Thanks.\nWe'll reach you.");
			}
    		
    		}
