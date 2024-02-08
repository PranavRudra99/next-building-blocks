import { stepperColors } from "@/utilities/types";
import { useState } from "react";

const Stepper = ({ items, bgColors }: { items: string[], bgColors: stepperColors }) => {
    
    const [selectedStep, setSelectedStep] = useState<number>(0);
    
    const handleClick = (index: number) => {
        setSelectedStep(index)
    }
    
    return (
        <div className="horizontal-center">
            {items.map((item, index) => {
                return (
                    <div key={index} style={index === selectedStep ? { background: bgColors.active } : { background: bgColors.inactive }} onClick={() => {handleClick(index)}}>
                        <div className="margin-all-1">
                            <div style={index === selectedStep ? { color: "white" } : { color: "black" }}>
                                {item}
                            </div>
                        </div>
                    </div>
                )
            })}
        </div>
    )
}

export default Stepper;