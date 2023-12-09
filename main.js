function copy(inputref) {
  console.log(inputref);
  inputref.select();
  inputref.setSelectionRange(0, 99999);
  document.execCommand("copy");
}

function pushemoji(ths) {
  document.getElementsByClassName("copied")[0].style.display = "block";
  document.getElementsByClassName("copied")[0].classList.add("elementToFadeInAndOut");
  document.getElementsByClassName('copied')[0].innerHTML = `${ths.innerHTML} Copied`;


  console.log(ths);
  ths.style.backgroundColor = "rgb(131,190,236)";
  let emojicpy = ths.innerHTML; //"emoji"
  //Initialized
  if (this.arr == undefined) {
    this.arr = [];
  }

  let ref = this;
  document.querySelector("#x").addEventListener("click", () => {
    ref.arr = [];
    document.getElementById("in2ins").value = "";
  });
  //Push to arr
  this.arr.push(emojicpy);
  //Making a string
  //Displaying on input
  document.getElementById("in2ins").value = this.arr.join("");

  //Reference to arr arrref
  // let arrref = this.arr;
  console.log(ref.arr);
  // console.log(document.getElementById("in2ins").value);

  if (this.arr.length > 30) {
    this.arr.shift();
  }
  //On Change in Input create an array and reassign to arr
  document.getElementById("in2ins").addEventListener("blur", () => {
    ref.arr = Array.from(document.getElementById("in2ins").value);
  });

  var inpute = document.createElement("textarea");
  inpute.innerHTML = emojicpy;
  inpute.id = "copy";
  document.body.appendChild(inpute);
  var copyText = document.getElementById("copy");

  copyText.select();
  copyText.setSelectionRange(0, 99999);
  document.execCommand("copy");
  document.getElementById("copy").remove();
  if (this.prevelement != undefined) {
    if (this.prevelement === ths) {
    } else {
      this.prevelement.style.backgroundColor = "white";
    }
    this.flag++;
  }

  this.prevelement = ths;
  setTimeout(()=>{
    document.getElementsByClassName("copied")[0].classList.remove("elementToFadeInAndOut")
    document.getElementsByClassName("copied")[0].style.display = "none";
}, 600);
  
}

function displayit(classd){
document.getElementsByClassName(`${classd}`)[0].style.display = "block";
document.querySelectorAll(`.containerallemoji > div:not(.${classd})`).forEach((closetabs) =>{
  closetabs.style.display = "none";
})
}


