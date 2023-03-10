let search = document.querySelector("#search")
let carrosel = document.querySelector("#carouselExample")


search.addEventListener('input', function() {
  if (search.value === '') {
    carrosel.style.display = 'block';
  } else {
    carrosel.style.display = 'none';
  }
});
