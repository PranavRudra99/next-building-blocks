'use client'
import { Button, TextInput, Grid, Card } from '@mantine/core'
import { useForm, SubmitHandler } from 'react-hook-form'

type LoginInputs = {
    email: string
    password: string
}

const Login = (): JSX.Element => {
    const {
        register,
        handleSubmit,
        reset,
        formState: {errors, isDirty, isValid, touchedFields}
    } = useForm<LoginInputs>({mode: "onChange", defaultValues: {email: '', password: ''}})

    const handleLogin: SubmitHandler<LoginInputs> = (data) => {
        console.log(data)
        reset()
    }

    return (
        <Card shadow='sm' padding='xl'>
            <h2 className='login-header center mb-1'>Welcome back!</h2>
            <form onSubmit={handleSubmit(handleLogin)}>
                <Grid className='pl-1 pr-1'>
                    <Grid.Col>
                            <TextInput label='Email' placeholder='Enter email' {...register('email', { required: true, pattern: /^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$/ })} required error={errors.email?.type} />
                    </Grid.Col>
                    <Grid.Col>
                        <TextInput type='password' label='Password' placeholder='Enter password' {...register('password', { required: true })} required error={errors.password?.type} />
                    </Grid.Col>
                    <Grid.Col className='center mt-1'>
                        <Button fullWidth type='submit' disabled={!isValid || !isDirty }>Submit</Button>
                    </Grid.Col>
                </Grid>
            </form>
        </Card>
    )
}

export default Login