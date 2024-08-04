import React from "react";

interface TechDrawingProps {
    length: number; // top to bottom
    width: number; // left to right
    outletLength: number; // top to bottom
    outletWidth: number; // left to right
}

const TechDrawing = ({ length, width, outletLength, outletWidth }: TechDrawingProps) => {
    const lipwidth = 5;
    const starty = 20; //length (Top to bottom)
    const startx = 10; //width (Left to right)
    const gap = 80;

    const startxoffset = startx+(lipwidth); // 143
    const startyoffset = starty+(lipwidth) // 85

    // Overall dimensions of the tile base
    const lenY = (length/2); // 450 top to bottom
    const widX = (width/2); // 450 left to right

    const outletY = (outletLength/2)+starty; // 225
    const outletX = (outletWidth/2)+startx; // 225
    
    // Tile lips  of the tile base
    const innerlenY = (length/2)-(lipwidth*2) // 440
    const innerwidX = (width/2)-(lipwidth*2) // 440

    // Outlet position

    // Fall line - Bottom left line 
    const fallline1x1 = startx + (lipwidth*2); 
    const fallline1y1 = startx + lenY; 
    const fallline1x2 = outletX; 
    const fallline1y2 = outletY ; 

    // Fall line - Top left line
    const fallline2x1 = startx + (lipwidth*2);
    const fallline2y1 = starty + (lipwidth*2);
    const fallline2x2 = outletX;
    const fallline2y2 = outletY;

    // Fall line - Top right line
    const fallline3x1 = widX;
    const fallline3y1 = starty + (lipwidth*2);
    const fallline3x2 = outletX;
    const fallline3y2 = outletY;

    // Fall line - Bottom right line
    const fallline4x1 = widX;
    const fallline4y1 = lenY + (lipwidth*2);
    const fallline4x2 = outletX;
    const fallline4y2 = outletY;



    return (

        <div><h1>Tile over base</h1>
        <div className="w-full h-full flex items-center justify-center p-4 bg-white shadow-lg">
            
            <svg 
                viewBox="0 0 920 1020" 
                fill="none" 
                preserveAspectRatio="xMidYMid meet" 
                xmlns="http://www.w3.org/2000/svg"
                className="w-full h-full"
            >            
                {/* Overall dimensions of the tile base */}
                <rect x={startx} y={starty} width={widX} height={lenY} fill="#7C9282" stroke="#060606"/> 
                
                {/* Tile lips  of the tile base */}
                <rect x={startxoffset} y={startyoffset} width={innerwidX} height={innerlenY} rx="3.5" fill="#7C9282" stroke="#060606"/>
                
                {/*  Fall line - Bottom left line */}
                <line x1={fallline1x1}  y1={fallline1y1} x2={fallline1x2} y2={fallline1y2} stroke="#060606" stroke-linecap="square" stroke-dasharray="5 5"/>
                
                {/* Current Fall line - Top left line */}
                <line x1={fallline2x1}  y1={fallline2y1} x2={fallline2x2} y2={fallline2y2} stroke="#060606" stroke-linecap="square" stroke-dasharray="5 5"/>
                
                {/* Fall line - Top right line */}
                <line x1={fallline3x1} y1={fallline3y1} x2={fallline3x2} y2={fallline3y2} stroke="#060606" stroke-linecap="square" stroke-dasharray="5 5"/>
                
                {/* Fall line - Bottom right line */}
                <line x1={fallline4x1} y1={fallline4y1} x2={fallline4x2} y2={fallline4y2} stroke="#060606" stroke-linecap="square" stroke-dasharray="5 5"/>
                
                {/* Length Dimentions  */}
                {/* <line x1={startx} y1="28" x2={widX+startx} y2="28" stroke="#060606"/>
                <line x1={startx} y1="24" x2={startx} y2="32" stroke="#060606"/>
                <line x1={widX+startx} y1="24" x2={widX+startx} y2="32" stroke="#060606"/> */}

                {/* Width Dimentions  */}
                {/* <path d="M101 534.003L103.887 529.003H98.1132L101 534.003ZM101 85L98.1132 90H103.887L101 85ZM101.5 529.503L101.5 89.5H100.5L100.5 529.503H101.5Z" fill="#060606"/>
                <line x1="97" y1={lenY} x2="105" y2={lenY} stroke="#060606"/>
                <line x1="97" y1="85.4983" x2="105" y2="85.4983" stroke="#060606"/> */}
                
                {/* Outlet Length Dimentions  */}
                {/* <path d="M144.499 579L149.499 581.887V576.113L144.499 579ZM369 579L364 576.113V581.887L369 579ZM148.999 579.5H364.5V578.5H148.999V579.5Z" fill="#060606"/>
                <line x1="144.5" y1="575" x2="144.5" y2="583" stroke="#060606"/>
                <line x1="369.001" y1="576" x2="369.001" y2="584" stroke="#060606"/> */}
                
                {/* Outlet Width Dimentions  */}
                {/* <path d="M639 309.501L641.887 304.501H636.113L639 309.501ZM639 85L636.113 90H641.887L639 85ZM639.5 305.001V89.5H638.5V305.001H639.5Z" fill="#060606"/>
                <line x1="635" y1="309.5" x2="643" y2="309.5" stroke="#060606"/>
                <line x1="635" y1="84.9993" x2="643" y2="84.9993" stroke="#060606"/> */}
                
                {/* Outlet */}
                <circle cx={outletX} cy={outletY}r="37.25" fill="#7C9282" stroke="#060606" stroke-width="0.5"/>
                <circle cx={outletX} cy={outletY} r="24.5" fill="#FAFAFA" stroke="#060606"/>

            </svg>
        </div>
        </div>
    );
}
export default TechDrawing;