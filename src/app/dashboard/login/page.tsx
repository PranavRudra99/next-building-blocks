'use client'
import { Button, Input, Grid } from '@mantine/core'
import { useForm, SubmitHandler } from 'react-hook-form'

type LoginInputs = {
    username: string
    password: string
}

const Login = (): JSX.Element => {
    const {
        register,
        handleSubmit,
        setValue
    } = useForm<LoginInputs>()

    const handleLogin: SubmitHandler<LoginInputs> = (data) => {
        setValue('username', '')
        setValue('password', '')
    }

    return (
        <form onSubmit={handleSubmit(handleLogin)}>
            <Grid className='pl-1 pr-1'>
                <Grid.Col>
                    <Input.Wrapper label='Username'>
                        <Input placeholder='Enter user name' {...register('username', { required: true })}></Input>
                    </Input.Wrapper>
                </Grid.Col>
                <Grid.Col>
                    <Input.Wrapper label='Password'>
                        <Input type='password' placeholder='Enter password' {...register('password', { required: true })}></Input>
                    </Input.Wrapper>
                </Grid.Col>
                <Grid.Col className='center mt-1'>
                    <Button fullWidth type='submit'>Submit</Button>
                </Grid.Col>
            </Grid>
        </form>
    )
}

export default Login