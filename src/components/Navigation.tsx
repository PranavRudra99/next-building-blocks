import { paths } from '@/utilities/constants'
import { Menu, Burger } from '@mantine/core'
import { useDisclosure } from '@mantine/hooks'
import Link from 'next/link'

const Navigation = (): JSX.Element => {
    const [opened, { toggle }] = useDisclosure()
    const handleClick = () => {
        toggle()
    }

    return (
        <Menu>
            <Menu.Target>
                <Burger opened={opened} onClick={toggle}></Burger>
            </Menu.Target>
            <Menu.Dropdown>
                {paths.map((path) => {
                    return (
                        <Link href={path.endpoint} key={path.label}>
                            <Menu.Item leftSection={<path.icon />} onClick={() => { handleClick() }}>
                                {path.label}
                            </Menu.Item>
                        </Link>
                    )
                })}
            </Menu.Dropdown>
        </Menu>
    )
}

export default Navigation