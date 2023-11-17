'use client'
import Navigation from "@/components/Navigation"
import { IconPuzzleFilled } from '@tabler/icons-react'

const DashboardLayout = ({
    children,
}: {
    children: React.ReactNode
}) => {
    return (
        <div className="d-flex flex-col full-height">
            <div className="d-grid truly-center">
                <div>
                    <Navigation />
                </div>
                <div className="vertical-center">
                    <IconPuzzleFilled size={24} />
                    <div className="pt-0">
                        <h1 className="primary-header">Building Blocks</h1>
                    </div>
                </div>
                <div>
                    {/*Dummy div - required for centering primary header*/}
                </div>
            </div>
            <div className="center flex-grow-1">
                {children}
            </div>
        </div>
    )
}

export default DashboardLayout