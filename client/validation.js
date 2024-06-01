function nameValid(){
  const name = document.getElementById("name-input").value
  localStorage.setItem("name",name)
  if(name.length <2){
    alert("too short")
     return false
  }else{
    return true
  }
}