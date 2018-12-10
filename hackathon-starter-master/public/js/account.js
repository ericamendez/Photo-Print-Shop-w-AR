const infoForm = document.querySelector("#infoForm")
const editBtn = document.querySelector("#editBtn")
const editCon = document.querySelector(".edit")
const userInfo = document.querySelector(".userInfo")
// photo add
const addHead = document.querySelector("#addHead")
const add = document.querySelector(".add")

editBtn.addEventListener("click", function(){
  editCon.classList.toggle('edit')
  userInfo.classList.toggle('edit')
})

infoForm.addEventListener("submit", function(e){
  editCon.style.display = "none"
})

addHead.addEventListener("click", function () {
  add.classList.toggle('edit')
})