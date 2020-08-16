const $btnShare = document.querySelector('.btnShare')
const $btnShareBack = document.querySelector('.btnShare-back')
const $menuFront = document.querySelector('.front')
const $menuBack = document.querySelector('.back')

$btnShare.addEventListener('click',function(){
  console.log('clicado')
  $menuBack.classList.remove('hidden')
})

$btnShareBack.addEventListener('click',function(){
  console.log('clicado novamente')
  $menuBack.classList.add('hidden')
})