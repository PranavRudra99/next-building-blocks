import { stepperColors } from "@/utilities/types";
import { useState } from "react";

const Stepper = ({ items, bgColors }: { items: string[], bgColors: stepperColors }) => {
    const [selectedStep, setSelectedStep] = useState<number>(0);
    return (
        <div className="horizontal-center">
            {items.map((item, index) => {
                return (
                    <div key={index} style={index === selectedStep ? { background: bgColors.active } : { background: bgColors.inactive }}>
                        <div className="margin-all-1">
                            <div>
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