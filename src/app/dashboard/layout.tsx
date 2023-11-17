'use client'
import Navigation from "@/components/Navigation"
import { ActionIcon, useMantineColorScheme, useComputedColorScheme } from "@mantine/core"
import { IconPuzzleFilled, IconMoon, IconSun } from '@tabler/icons-react'

const DashboardLayout = ({
    children,
}: {
    children: React.ReactNode
}) => {
    const { setColorScheme } = useMantineColorScheme();
    const computedColorScheme = useComputedColorScheme('dark', { getInitialValueInEffect: true });
    return (
        <div className="d-flex flex-col full-height">
            <div className="d-grid truly-center">
                <div>
                    <Navigation />
                </div>
                <div className="vertical-center">
                    <IconPuzzleFilled size={24} />
                    <div>
                        <h1 className="margin-none">Building Blocks</h1>
                    </div>
                </div>
                <div className="vertical-center p-5p ml-auto">
                    <ActionIcon
                        onClick={() => setColorScheme(computedColorScheme === 'light' ? 'dark' : 'light')}
                        variant='default'
                        size='lg'
                        aria-label='Toggle color switch'
                    >
                        {computedColorScheme === 'light' ? <IconMoon/>:<IconSun/>}
                    </ActionIcon>
                </div>
            </div>
            <div className="center flex-grow-1">
                {children}
            </div>
        </div>
    )
}

export default DashboardLayout