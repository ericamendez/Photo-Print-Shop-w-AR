const infoForm = document.querySelector("#infoForm")
const editBtn = document.querySelector("#editBtn")
const editCon = document.querySelector("#edit")

editBtn.addEventListener("click", function(){
  editCon.style.display = "grid"
})

infoForm.addEventListener("submit", function(e){
  editCon.style.display = "none"
})
