let btnModal = document.getElementById("btnModal");

// let miModal = document.getElementById("miModal");
//el Javascript que hemos importado de bootstrap me trae un opjeto llamado bootstrap
let miModal = new bootstrap.Modal(document.getElementById("miModal"));
 
console.log(miModal);
//4.6 
//5 !!!!!!!!!!!!!!!!!!!!!!!!!!!

btnModal.addEventListener("click", function(){
  miModal.show()
})

setTimeout(function(){
  miModal.show()
},2000);