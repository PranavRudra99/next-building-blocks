import { Paths } from './types'
import { IconFingerprint, IconAnalyze, IconUserPlus } from '@tabler/icons-react'

export const paths: Paths[] = [
    {
        endpoint: '/dashboard/register',
        label: 'Registration',
        icon: IconUserPlus,
        header: 'Sign up',
        footer: 'Phasellus faucibus scelerisque eleifend donec pretium vulputate sapien. Nisi lacus sed viverra tellus in hac habitasse platea.'
    },
    {
        endpoint: '/dashboard/demo',
        label: 'Demo',
        icon: IconAnalyze,
        header: 'Test Header',
        footer: 'Test Footer'
    },
    {
        endpoint: '/dashboard/login',
        label: 'Login',
        icon: IconFingerprint,
        header: 'Sign in',
        footer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
    }
]