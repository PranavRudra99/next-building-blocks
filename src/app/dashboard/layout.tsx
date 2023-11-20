'use client'
import Navigation from '@/components/Navigation'
import { ActionIcon, useMantineColorScheme, useComputedColorScheme } from '@mantine/core'
import { IconPuzzleFilled, IconMoon, IconSun } from '@tabler/icons-react'
import content from '@/content/dashboard.json'
import {useColorScheme} from '@mantine/hooks'

const DashboardLayout = ({
    children,
}: {
    children: React.ReactNode
}) => {
    const colorScheme = useColorScheme();
    const { setColorScheme } = useMantineColorScheme();
    const computedColorScheme = useComputedColorScheme(colorScheme, { getInitialValueInEffect: true });
    return (
        <div className='d-flex flex-col full-height'>
            <div className='d-grid truly-center'>
                <div>
                    <Navigation />
                </div>
                <div className='vertical-center'>
                    <IconPuzzleFilled size={24} />
                    <div>
                        <h1 className='margin-none'>{content.primaryHeader}</h1>
                    </div>
                </div>
                <div className='vertical-center p-5p ml-auto'>
                    <ActionIcon
                        onClick={() => setColorScheme(computedColorScheme === 'light' ? 'dark' : 'light')}
                        variant='default'
                        size='lg'
                        aria-label={content.toggleADA}
                    >
                        {computedColorScheme === 'light' ? <IconMoon/>:<IconSun/>}
                    </ActionIcon>
                </div>
            </div>
            <div className='center flex-grow-1'>
                {children}
            </div>
        </div>
    )
}

export default DashboardLayout