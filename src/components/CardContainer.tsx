import { Card } from "@mantine/core";

const CardContainer = ({children}: {children: React.ReactNode}): JSX.Element => {
    return (
        <div className='mt-1'>
            <Card radius='md' shadow='lg' padding='lg'>
                {children}
            </Card>
        </div>
    )
}

export default CardContainer;