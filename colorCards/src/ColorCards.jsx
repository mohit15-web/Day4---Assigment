import React from 'react';

function ColorCards() {
    const colors = [
        {
            code: "#FF6663",
            name: "PINK"
        },
        {
            code: "#333333",
            name: "GRAY"
        },
        {
            code: "#000000",
            name: "BLACK"
        },
        {
            code: "#38BB14",
            name: "GREEN"
        },
        {
            code: "#C90B0B",
            name: "RED"
        },
        {
            code: "#FF8000",
            name: "ORANGE"
        },
        {
            code: "#FFF500",
            name: "YELLOW"
        },
        {
            code: "#CCCCCC",
            name: "LIGHT GRAY"
        },
        {
            code: "#7E41A2",
            name: "PURPLE"
        },
        {
            code: "#C14911",
            name: "BROWN"
        },
    ];

    return (
        <div className='flex justify-center items-center gap-10 mt-20 w-[58%] m-auto flex-wrap'>
            {colors.map((color, id) => (
                <div key={id} className='h-56 w-36 border shadow-md'>
                    <div style={{ backgroundColor: color.code }} className='h-36 '></div>
                    <h1 className='px-4 pt-3 font-bold'>{color.code}</h1>
                    <p className="px-4 text-xs font-bold" style={{ color: color.code }}>{color.name}</p>
                </div>
            ))}
        </div>
    );
}

export default ColorCards;
