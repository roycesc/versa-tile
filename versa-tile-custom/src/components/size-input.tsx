'use client'

import { useEffect, useState } from "react"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { useDebouncedCallback } from 'use-debounce';
import TileLipAccordion from "./tile-lip-accordion"

interface Size {
    length: number;
    width: number;
    outletLength: number;
    outletWidth: number;
    isFormValid: boolean;
}

interface SideInputProps {
    onValueChange: (value: Size) => void;
}

const MIN_LENGTH = 450;
const MAX_LENGTH = 1700;
const MIN_WIDTH = 450;
const MAX_WIDTH = 1500;
const OUTLET_LIMIT = 90;
const SEQUARE_METER_COST = 450;
const INITIAL_LENGTH = 900;
const INITIAL_WIDTH = 900;
const INITIAL_OUTLET_LENGTH = 450;
const INITIAL_OUTLET_WIDTH = 450;
const DEBOUNCE_TIME = 600;

function SideInput({ onValueChange }: SideInputProps) {

    const [length, setLength] = useState(INITIAL_LENGTH);
    const [width, setWidth] = useState(INITIAL_WIDTH);   
    const [outletLength, setOutletLength] = useState(INITIAL_OUTLET_LENGTH);
    const [outletWidth, setOutletWidth] = useState(INITIAL_OUTLET_WIDTH); 
    const [isFormValid, setIsFormValid] = useState(true);
    const [price, setPrice] = useState(0);

    const validateForm = () => {
        const isLengthValid = length >= MIN_LENGTH && length <= MAX_LENGTH;
        const isWidthValid = width >= MIN_WIDTH && width <= MAX_WIDTH;
        const isOutletLengthValid = (length - OUTLET_LIMIT) >= outletLength && outletLength >= OUTLET_LIMIT;
        const isOutletWidthValid = (width - OUTLET_LIMIT) >= outletWidth && outletWidth >= OUTLET_LIMIT;
        return isLengthValid && isWidthValid && isOutletLengthValid && isOutletWidthValid;
    };

    useEffect(() => {
        const formValid = validateForm();
        setIsFormValid(formValid);
        onValueChange({ length, width, outletLength, outletWidth, isFormValid: formValid });
        setPrice((length * width) * (SEQUARE_METER_COST / 1000000));
    }, [length, width, outletLength, outletWidth]);

    const cost = price.toLocaleString("en-US", {
        style: "currency",
        currency: "USD"
    });

    const getErrorMessage = (type: string) => {
        switch (type) {
            case 'length':
                return length < MIN_LENGTH || length > MAX_LENGTH ? `Length must be between ${MIN_LENGTH}mm and ${MAX_LENGTH}mm.` : '';
            case 'width':
                return width < MIN_WIDTH || width > MAX_WIDTH ? `Width must be between ${MIN_WIDTH}mm and ${MAX_WIDTH}mm.` : '';
            case 'outletLength':
                return outletLength < OUTLET_LIMIT || outletLength > (length - OUTLET_LIMIT) ? `Minimum ${OUTLET_LIMIT}mm from any edge.` : '';
            case 'outletWidth':
                return outletWidth < OUTLET_LIMIT || outletWidth > (width - OUTLET_LIMIT) ? `Minimum ${OUTLET_LIMIT}mm from any edge.` : '';
            default:
                return '';
        }
    };

    return (
        <div className="grid gap-2 p-6 sm:border-t md:border-r border-grey-100 md:h-screen">
            <div className="text-2xl font-bold ">Custom Tile Over base</div>
            <div className="sm:text-sm md:text-md hidden md:block max-w-xl">
            <div>Custom Tile Over bases offer flexibile sizing ranging from {MIN_LENGTH
                }mm up to {MAX_LENGTH}mm in length and from {MIN_WIDTH}mm up to {MAX_WIDTH}mm in width.</div>
                <div>The outlet can be placed anywhere provided it is {OUTLET_LIMIT}mm away from any edge.</div>
            </div>
            <div className="grid grid-cols-2 items-center gap-4">
                <Label htmlFor="length">Length</Label>
                <div className="flex flex-col gap-2">
                    <div className="flex items-center gap-2">
                        <Input
                            id="length"
                            type="number"
                            min={MIN_LENGTH}
                            max={MAX_LENGTH}
                            placeholder={INITIAL_LENGTH.toString()}
                            onChange={useDebouncedCallback((e: React.ChangeEvent<HTMLInputElement>) => {
                                setLength(Number(e.target.value));
                            }, DEBOUNCE_TIME)}
                            className="w-full"
                        />
                        <span className="text-muted-foreground">mm</span>
                    </div>
                    {getErrorMessage('length') && (
                        <span className="text-red-500 text-xs">{getErrorMessage('length')}</span>
                    )}
                </div>
            </div>
            <div className="grid grid-cols-2 items-center gap-4">
                <Label htmlFor="width">Width</Label>
                <div className="flex flex-col gap-2">
                    <div className="flex items-center gap-2">
                        <Input
                            id="width"
                            type="number"
                            min={MIN_WIDTH}
                            max={MAX_WIDTH}
                            placeholder={INITIAL_WIDTH.toString()}
                            onChange={useDebouncedCallback((e: React.ChangeEvent<HTMLInputElement>) => {
                                setWidth(Number(e.target.value));
                            }, DEBOUNCE_TIME)}
                            className="w-full"
                        />
                        <span className="text-muted-foreground">mm</span>
                    </div>
                    {getErrorMessage('width') && (
                        <span className="text-red-500 text-xs">{getErrorMessage('width')}</span>
                    )}
                </div>
            </div>
            <div className="grid grid-cols-2 items-center gap-4">
                <Label htmlFor="outlet-length">Outlet Position Length</Label>
                <div className="flex flex-col gap-2">
                    <div className="flex items-center gap-2">
                        <Input
                            id="outlet-length"
                            type="number"
                            min={OUTLET_LIMIT}
                            max={length - OUTLET_LIMIT}
                            placeholder={INITIAL_OUTLET_LENGTH.toString()}
                            onChange={useDebouncedCallback((e: React.ChangeEvent<HTMLInputElement>) => {
                                setOutletLength(Number(e.target.value));
                            }, DEBOUNCE_TIME)}
                            className="w-full"
                        />
                        <span className="text-muted-foreground">mm</span>
                    </div>
                    {getErrorMessage('outletLength') && (
                        <span className="text-red-500 text-xs">{getErrorMessage('outletLength')}</span>
                    )}
                </div>
            </div>
            <div className="grid grid-cols-2 items-center gap-4">
                <Label htmlFor="outlet-width">Outlet Position Width</Label>
                <div className="flex flex-col gap-2">
                    <div className="flex items-center gap-2">
                        <Input
                            id="outlet-width"
                            type="number"
                            min={OUTLET_LIMIT}
                            max={width - OUTLET_LIMIT}
                            placeholder={INITIAL_OUTLET_WIDTH.toString()}
                            onChange={useDebouncedCallback((e: React.ChangeEvent<HTMLInputElement>) => {
                                setOutletWidth(Number(e.target.value));
                            }, DEBOUNCE_TIME)}
                            className="w-full"
                        />
                        <span className="text-muted-foreground">mm</span>
                    </div>
                    {getErrorMessage('outletWidth') && (
                        <span className="text-red-500 text-xs">{getErrorMessage('outletWidth')}</span>
                    )}
                </div>
            </div>
            <div>
                <TileLipAccordion />
            </div>
            <div className="grid gap-2 mt-auto flex-grow">
                <div id="Price-order" className="mt-auto">
                    <div className="text-4xl font-bold py-8">
                        {isFormValid && <span>{cost}</span>}
                    </div>
                    <Button className="w-full" disabled={!isFormValid}>
                        Order
                    </Button>
                </div>
            </div>
        </div>
    )
}

export default SideInput;