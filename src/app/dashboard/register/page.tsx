'use client'
import CardContainer from "@/components/CardContainer"
import Stepper from "@/components/Stepper"
import content from '@/content/registration.json'
import { Button } from "@mantine/core"
import Link from "next/link"

const Registration = (): JSX.Element => {
    return (
        <div>
            <CardContainer>
                <Stepper items={content.stepper.steps} bgColors={content.stepper.backgroundColors}></Stepper>
                <form></form>
            </CardContainer>
            <CardContainer>
                <div className='center'>
                    <p className='margin-none pr-1'>{content.loginPrompt.existingUser}</p>
                    <Link href='/dashboard/login'>
                        <Button>{content.loginPrompt.login}</Button>
                    </Link>
                </div>
            </CardContainer>
        </div>
    )
}

export default Registration