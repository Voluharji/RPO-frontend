import './PriceRangeSelector.css'
import { useState, useEffect } from "react";

function PriceRangeSelector(){
    const [sliderMinValue] = useState(0);
    const [sliderMaxValue] = useState(1000);
    const [minVal, setMinVal] = useState(0);
    const [maxVal, setMaxVal] = useState(1000);
    const [minInput, setMinInput] = useState(0);
    const [maxInput, setMaxInput] = useState(1000);
    const [isDragging, setIsDragging] = useState(false)

    const slideMin = (e) => {
        const value = parseInt(e.target.value, 10);
        if (value >= sliderMinValue) {
            setMinVal(value);
            setMinInput(value);
        }
    };

    const slideMax = (e) => {
        const value = parseInt(e.target.value, 10);
        if (value <= sliderMaxValue) {
            setMaxVal(value);
            setMaxInput(value);
        }
    };

    const setSliderTrack = () => {
        const range = document.querySelector(".slider-track");

        if (range) {
            const minPercent =
                ((minVal - sliderMinValue) / (sliderMaxValue - sliderMinValue)) * 100;
            const maxPercent =
                ((maxVal - sliderMinValue) / (sliderMaxValue - sliderMinValue)) * 100;

            range.style.left = `${minPercent}%`;
            range.style.right = `${100 - maxPercent}%`;
        }
    };

    useEffect(() => {
        setSliderTrack();
    }, [minVal, maxVal]);

    const handleMinInput = (e) => {
        const value =
            e.target.value === "" ? sliderMinValue : parseInt(e.target.value, 10);
        if (value >= sliderMinValue) {
            setMinInput(value);
            setMinVal(value);
        }
    };

    const handleMaxInput = (e) => {
        const value =
            e.target.value === "" ? sliderMinValue : parseInt(e.target.value, 10);
        if (value <= sliderMinValue) {
            setMinInput(value);
            setMinVal(value);
        }
    };

    const handleInputKeyDown = (e, type) => {
        if (e.key === "Enter") {
            const value = parseInt(e.target.value, 10);
            if (
                type === "min" &&
                value >= sliderMinValue
            ) {
                setMinVal(value);
            } else if (
                type === "max" &&
                value <= sliderMaxValue
            ) {
                setMaxVal(value);
            }
        }
    };

    const startDrag = () => {
        setIsDragging(true);
    };

    const stopDrag = () => {
        setIsDragging(false);
    };



    return (
        <div className="double-slider-box">
            <p className='title-text'>Set price (min/max):</p>
            <div className="input-box">
                <div className="min-box">
                    <input
                        type="number"
                        value={minInput}
                        onChange={handleMinInput}
                        onKeyDown={(e) => handleInputKeyDown(e, "min")}
                        className="min-input"
                        min={sliderMinValue}
                        max={maxVal}
                    />
                </div>
                <div className="max-box">
                    <input
                        type="number"
                        value={maxInput}
                        onChange={handleMaxInput}
                        onKeyDown={(e) => handleInputKeyDown(e, "max")}
                        className="max-input"
                        min={minVal}
                        max={sliderMaxValue}
                    />
                </div>
            </div>
            <div className="range-slider">
                <div className="slider-track"></div>
                <input
                    type="range"
                    min={sliderMinValue}
                    max={sliderMaxValue}
                    value={minVal}
                    onChange={slideMin}
                    onMouseDown={startDrag}
                    onMouseUp={stopDrag}
                    onTouchStart={startDrag}
                    onTouchEnd={stopDrag}
                    className="min-val"
                />
                <input
                    type="range"
                    min={sliderMinValue}
                    max={sliderMaxValue}
                    value={maxVal}
                    onChange={slideMax}
                    onMouseDown={startDrag}
                    onMouseUp={stopDrag}
                    onTouchStart={startDrag}
                    onTouchEnd={stopDrag}
                    className="max-val"
                />
                {isDragging && <div className="min-tooltip">{minVal}</div>}
                {isDragging && <div className="max-tooltip">{maxVal}</div>}
            </div>
        </div>
    )
}

export default PriceRangeSelector