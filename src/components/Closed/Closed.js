import React from 'react'


const Closed = () => {

    function background () {
        let bg = document.querySelector('.Closed')
        let bodyBackground = document.querySelector('body')
        bodyBackground.classList.add('veggie');

    }

    return (
        <div>
           Will it render?
           <button onClick={background} class="Closed">
               check here
           </button>

             </div>
    )
}

export default Closed
