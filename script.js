const $btnShare = document.querySelector(.btnShare)
const $menuFront = document.querySelector(.front)
const $menuBack = document.querySelector(.back)

$btnShare.addEventListener('click',function(){
  $menuFront.classList.add('hidden')
  $menuBack.classList.remove('hidden')
})