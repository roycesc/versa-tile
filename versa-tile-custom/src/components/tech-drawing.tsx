import React from "react";

interface TechDrawingProps {
    length: number; // top to bottom
    width: number; // left to right
    outletLength: number; // top to bottom
    outletWidth: number; // left to right
    isFormValid?: boolean;
}

const TechDrawing = ({ length, width, outletLength, outletWidth, isFormValid }: TechDrawingProps) => {
    const lipwidth = 5;
    const starty = 64; //length (Top to bottom)
    const startx = 80; //width (Left to right)
    const fontfamily = "Helvetica, Arial, sans-serif";
    const colourfill = "#7C9282";

    const startxoffset = startx+(lipwidth); 
    const startyoffset = starty+(lipwidth) 

    // Overall dimensions of the tile base
    const lenY = (length/2); 
    const widX = (width/2); 

    const outletY = (outletLength/2)+starty;
    const outletX = (outletWidth/2)+startx;
    
    // Tile lips  of the tile base
    const innerlenY = (length/2)-(lipwidth*2)
    const innerwidX = (width/2)-(lipwidth*2)

    // Outlet position

    // Fall line - Bottom left line 
    const fallline1x1 = startx + (lipwidth*2); 
    const fallline1y1 = (starty + lenY) - (lipwidth * 2); 
    const fallline1x2 = outletX; 
    const fallline1y2 = outletY ; 

    // Fall line - Top left line
    const fallline2x1 = startx + (lipwidth*2);
    const fallline2y1 = starty + (lipwidth*2);
    const fallline2x2 = outletX;
    const fallline2y2 = outletY;

    // Fall line - Top right line
    const fallline3x1 = widX + startx - (lipwidth*2);
    const fallline3y1 = starty + (lipwidth*2);
    const fallline3x2 = outletX;
    const fallline3y2 = outletY;

    // Fall line - Bottom right line
    const fallline4x1 = widX + startx - (lipwidth*2);
    const fallline4y1 = (lenY + starty) - (lipwidth*2);
    const fallline4x2 = outletX;
    const fallline4y2 = outletY;

    if (!isFormValid) {
        return (
            <div className="w-full h-full flex items-center justify-center p-4 bg-white shadow-lg">
                <h1 className="text-2xl text-red-500">Invalid input</h1>
            </div>
        );
    }

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
                <rect x={startx} y={starty} width={widX} height={lenY} fill={colourfill} stroke="#060606"/> 
                
                {/* Tile lips  of the tile base */}
                <rect x={startxoffset} y={startyoffset} width={innerwidX} height={innerlenY} rx="3.5" fill={colourfill} stroke="#060606"/>
                
                {/*  Fall line - Bottom left line */}
                <line x1={fallline1x1}  y1={fallline1y1} x2={fallline1x2} y2={fallline1y2} stroke="#060606" stroke-linecap="square" stroke-dasharray="5 5"/>
                
                {/* Fall line - Top left line */}
                <line x1={fallline2x1}  y1={fallline2y1} x2={fallline2x2} y2={fallline2y2} stroke="#060606" stroke-linecap="square" stroke-dasharray="5 5"/>
                
                {/* Fall line - Top right line */}
                <line x1={fallline3x1} y1={fallline3y1} x2={fallline3x2} y2={fallline3y2} stroke="#060606" stroke-linecap="square" stroke-dasharray="5 5"/>
                
                {/* Fall line - Bottom right line */}
                <line x1={fallline4x1} y1={fallline4y1} x2={fallline4x2} y2={fallline4y2} stroke="#060606" stroke-linecap="square" stroke-dasharray="5 5"/>
                
                {/* Length Dimensions  */}
                <text x={startx+(widX/2)} y="12" font-family={fontfamily} font-size="14" fill="#060606" text-anchor="middle">{width} mm - (Width)</text>
                <line x1={startx} y1="24" x2={widX+startx} y2="24" stroke="#060606"/>
                <line x1={startx} y1="16" x2={startx} y2="32" stroke="#060606"/>
                <line x1={widX+startx} y1="16" x2={widX+startx} y2="32" stroke="#060606"/>

                {/* Width Dimensions  */}
                <text x="12" y={starty+(lenY/2)} font-family={fontfamily} font-size="14" fill="#060606" text-anchor="middle" transform={`rotate(-90, ${startx-48}, ${starty + (lenY / 2)})`}> {length} mm - (Length)</text>
                <line x1={startx-32} y1={starty} x2={startx-32} y2={lenY+starty} stroke="#060606"/>
                <line x1={startx-24} y1={starty} x2={startx-40} y2={starty} stroke="#060606"/>
                <line x1={startx-24} y1={lenY+starty} x2={startx-40} y2={lenY+starty} stroke="#060606"/>
                
                {/* Outlet Length Dimensions  */}
                <text x={startx + widX + 60} y={(starty + outletY) / 2} fontFamily={fontfamily} fontSize="14" fill="#060606" textAnchor="middle" transform={`rotate(-90, ${startx + widX + 60}, ${(starty + outletY) / 2})`}>{outletLength} mm - (Outlet Length)</text>
                <line x1={startx} y1={lenY+starty+32} x2={outletX} y2={lenY+starty+32} stroke="#060606"/>
                <line x1={startx} y1={lenY+starty+24} x2={startx} y2={lenY+starty+40} stroke="#060606"/>
                <line x1={outletX} y1={lenY+starty+24} x2={outletX} y2={lenY+starty+40} stroke="#060606"/>
                
                {/* Outlet Width Dimensions  */}
                <text x={(startx + outletX) / 2} y={lenY + starty + 54} fontFamily={fontfamily} textAnchor="middle" fontSize="14" fill="#060606"> {outletWidth} mm - (Outlet Width)</text>
                <line x1={startx+widX+32} y1={starty} x2={startx+widX+32} y2={outletY} stroke="#060606"/>
                <line x1={startx+widX+24} y1={starty} x2={startx+widX+40} y2={starty} stroke="#060606"/>
                <line x1={startx+widX+24} y1={outletY} x2={startx+widX+40} y2={outletY} stroke="#060606"/>
                
                {/* Outlet */}
                <circle cx={outletX} cy={outletY}r="37.25" fill={colourfill} stroke="#060606" stroke-width="0.5"/>
                <circle cx={outletX} cy={outletY} r="24.5" fill="#FAFAFA" stroke="#060606"/>

            </svg>
        
        </div>
        </div>
    );
}
export default TechDrawing;