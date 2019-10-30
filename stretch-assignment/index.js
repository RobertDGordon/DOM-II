const blocks = document.querySelectorAll('.block')

const blockArr = Array.from(blocks)

blockArr.forEach(e => {
    e.style.zIndex = '0'
    e.addEventListener('click', (event) =>{
        // let top = e
        // console.log (top)
        // blockArr.splice(e,1)
        // blockArr.unshift(top)
        e.style.position = 'absolute'
        e.style.top = '0'
        e.style.zIndex = '1'
    })
    e.addEventListener('wheel', (event) =>{
        e.style.position = ''
        e.style.top = ''
        e.style.zIndex = ''
        console.log ('dblclick')
    })

})

// console.log (blockArr)