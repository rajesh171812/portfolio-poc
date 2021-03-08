import React from "react";

export default function ScrollToTop(props) {
    const scrollTop = () =>{
        window.scrollTo({top: 0, behavior: 'smooth'});
    };
    return (
        <div onClick={scrollTop} className="fixed bottom-10 right-10 bg-black bg-opacity-40 hover:bg-opacity-60 w-16 h-16 md:w-20 md:h-20 flex items-center justify-center text-white text-2xl rounded-full cursor-pointer z-50">
            <img
                className=""
                src="/Arrow.svg"
                alt=""
            />
        </div>
    );
}
