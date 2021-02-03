import React from "react";

export default function ScrollToTop(props) {
    const scrollTop = () =>{
        window.scrollTo({top: 0, behavior: 'smooth'});
    };
    return (
        <div onClick={scrollTop} className="fixed bottom-20 right-10 bg-blue-700 hover:bg-black w-16 h-16 flex items-center justify-center text-white text-2xl cursor-pointer ">
            <span>&#x5e;</span>
        </div>
    );
}
