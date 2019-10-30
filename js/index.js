// Your code goes here
const headerImg = document.querySelector('header img')

// console.log (headerImg)

headerImg.addEventListener('mouseover', () => {
    headerImg.style.transform = "scale(1.2)"
})

headerImg.addEventListener('mouseleave', () =>{
    headerImg.style.transform = 'scale(1.0)'
})

const headerH2 = document.querySelector('header h2')

console.log (headerH2)

headerH2.addEventListener('wheel', ()=>{
    headerH2.style.color = "silver"
})

const headerP = document.querySelector('header p')

console.log (headerP)

headerP.addEventListener('drag', ()=>{
    headerP.style.fontSize = '40px'
})

// const footerLoad = document.querySelector('footer p')

// footerLoad.addEventListener('focus', ()=> {
//     alert('This is the end')
// })

headerP.addEventListener('dblclick', ()=>{
    headerP.style.fontSize = '1.6rem'
})

const button = document.querySelectorAll('.btn')

button.forEach(btn  => {
    btn.addEventListener('click', (e) => {
        btn.style.backgroundColor='black'
        btn.textContent = "You're in!"
        console.log (btn)
    })
})

const navLinks = document.querySelectorAll('nav a')

navLinks.forEach(item => {
    item.addEventListener('click', function (event){
        event.preventDefault()
    })
    item.addEventListener('focus', (event)=>{
        // alert('Links dun work meow')
        event.stopPropagation;
        console.log ('focus!')
    })
})

// const bod = document.querySelector('body')

window.addEventListener('load', (event) => {
    alert('Pop ups are annoying')
});

// const contImg = document.querySelector('.img-content img')

// contImg.addEventListener('click', (e) => {
//     TweenMax.to('.img-content img', 1, {
//         x: 20,
//         y: 100,
//         ease: Elastic.easeOut.config( 1, 0.75)
//       })
  
//   })

// console.log (contImg)


const contImgs = document.querySelectorAll('.img-content img')

console.log (contImgs)

// contImgs.forEach (e => {
//     e.addEventListener('click', (e) => {
//         e.style.transform = 'scale(1.5)'
//     })
// })

contImgs.forEach(img => {
    img.addEventListener('mouseover', (e) => {
      TweenMax.to(e.target, 0.5, {
        scale: 1.3,
        ease: Elastic.easeOut.config( 1, 0.75),
      })
    })
    img.addEventListener('mouseleave', (e) => {
        TweenMax.to(e.target, 0.5, {
          scale: 1,
          ease: Power1.easeIn
        });
        // e.zIndex = '1'
    })
})