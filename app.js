  var licznik = 1 ;
  var znak = "O"

  function kolko(id) {
    if (id == "div1") {
      if (document.getElementById("div1").style.backgroundColor == znak) {
        return;
      }

      if(licznik %2 === 0){
        znak = "X"
      }else{
        znak = "O"
      }
      document.getElementById("div1").innerHTML = znak;
      

    

      licznik++;
    }

    if (id == "div2") {
      if (document.getElementById("div2").innerHTML == znak) {
        return;
      }

      if(licznik %2 === 0){
        znak = "X"
      }else{
        znak = "O"
      }
      document.getElementById("div2").innerHTML = znak;
      
    

      licznik++;
    }

    if (id == "div3") {
      if (document.getElementById("div3").style.backgroundColor == znak) {
        return;
      }

      if(licznik %2 === 0){
        znak = "X"
      }else{
        znak = "O"
      }
      document.getElementById("div3").innerHTML = znak;
      

    

      licznik++;
    }

    if (id == "div4") {
      if (document.getElementById("div4").style.backgroundColor == znak) {
        return;
      }

      if(licznik %2 === 0){
        znak = "X"
      }else{
        znak = "O"
      }
      document.getElementById("div4").innerHTML = znak;
      
      

      licznik++;
    }

    if (id == "div5") {
      if (document.getElementById("div5").style.backgroundColor === znak) {
        return;
      }

      if(licznik %2 === 0){
        znak = "X"
      }else{
        znak = "O"
      }
      document.getElementById("div5").innerHTML = znak;
      

      

      licznik++;
    }

    if (id == "div6") {
      if (document.getElementById("div6").style.backgroundColor === znak) {
        return;
      }

      if(licznik %2 === 0){
        znak = "X"
      }else{
        znak = "O"
      }
      document.getElementById("div6").innerHTML = znak;
      


      licznik++;
    }

    if (id == "div7") {
      if (document.getElementById("div7").style.backgroundColor === znak) {
        return;
      }

      if(licznik %2 === 0){
        znak = "X"
      }else{
        znak = "O"
      }
      document.getElementById("div7").innerHTML = znak;
      

      

      licznik++;
    }

    if (id == "div8") {
      if (document.getElementById("div8").style.backgroundColor === znak) {
        return;
      }

      if(licznik %2 === 0){
        znak = "X"
      }else{
        znak = "O"
      }
      document.getElementById("div8").innerHTML = znak;
      

      

      licznik++;
    }

    if (id == "div9") {
      if (document.getElementById("div9").style.backgroundColor === znak) {
        return;
      }

      if(licznik %2 === 0){
        znak = "X"
      }else{
        znak = "O"
      }
      document.getElementById("div9").innerHTML = znak;
      

      

      licznik++;
    }
  }
