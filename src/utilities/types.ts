import { Dispatch } from 'react'

export interface Paths {
    endpoint: string,
    label: string,
    header: string,
    footer: string,
    icon: (props: any) => JSX.Element
}

export interface ContextProviderInterface {
    children: React.ReactNode
}

export interface GlobalContextInterface {
    selectedPage: number
    setSelectedPage: Dispatch<number>
}

export enum LoginInputs {
    email = 'email',
    password = 'password'
}