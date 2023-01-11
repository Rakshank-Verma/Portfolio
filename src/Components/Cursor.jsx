import React from 'react'

export const Cursor = () => {
    let cursor = document.getElementById('cursor');

    document.addEventListener("mousemove", (e) => {
        let x = e.clientX;
        let y = e.clientY;
        cursor.style.left = x + "px";
        cursor.style.top = y + "px"
    })

    var timer;
    var timeout = function () {
        cursor.style.opacity = 0;
    }
    timer = setTimeout(timeout, 2000);
    window.onmousemove = function () {
        clearTimeout(timer);
        cursor.style.opacity = 1;
        timer = setTimeout(timeout, 2000);
    };
    return (
        <div style={{ transition: '0.2s' }} id='cursor' className='fixed w-10 h-10 border-2 border-[#898785] border-solid rounded-[50%] -translate-x-2/4 -translate-y-2/4 pointer-events-none'></div>
    )
}
