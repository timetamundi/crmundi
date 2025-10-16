function toggleMenu(){
  document.querySelector('.menu').classList.toggle('show');
}
document.getElementById('year').textContent = new Date().getFullYear();