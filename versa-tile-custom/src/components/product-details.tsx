import React from "react";

interface CanvasDrawingProps {
    length: number;
    width: number;
    outletLength: number;
    outletWidth: number;
}

const CanvasDrawing = ({ length, width, outletLength, outletWidth }: CanvasDrawingProps) => {
    return (
        <div>
            <p>Custom Base Details</p>
            <p>Length: {length}</p>
            <p>Width: {width}</p>
            <p>Outlet Length: {outletLength}</p>
            <p>Outlet Width: {outletWidth}</p>
        </div>
    );
}
export default CanvasDrawing;