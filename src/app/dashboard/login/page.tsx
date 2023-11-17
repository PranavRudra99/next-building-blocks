'use client'
import { Button, TextInput, Grid, Card } from '@mantine/core'
import { useForm, SubmitHandler, FieldError } from 'react-hook-form'
import errorMessages from '../../../content/errors.json'
import { LoginInputs } from '@/utilities/types'
import { IconMail, IconLock } from '@tabler/icons-react'

type FormInputs = {
    email: string
    password: string
}

const Login = (): JSX.Element => {
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors, isDirty, isValid, touchedFields }
    } = useForm<FormInputs>({ mode: "onChange", defaultValues: { email: '', password: '' } })

    const handleLogin: SubmitHandler<FormInputs> = (data) => {
        console.log(data)
        reset()
    }

    const getErrorMessage = (error: FieldError, touchedField: boolean = false, input: LoginInputs): string => {
        let response = '';
        if (touchedField && error.type === 'required') {
            response = errorMessages[input].required
        }
        else if (touchedField && error.type === 'pattern') {
            response = errorMessages[input].pattern
        }
        return response
    }

    return (
        <Card shadow='sm' padding='xl'>
            <h2 className='login-header center mb-1'>Welcome back!</h2>
            <form onSubmit={handleSubmit(handleLogin)}>
                <Grid className='pl-1 pr-1'>
                    <Grid.Col>
                        <TextInput
                            leftSection={<IconMail />}
                            label='Email'
                            placeholder='Enter email'
                            {...register('email', { required: true, pattern: /^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$/ })}
                            required
                            error={errors.email && getErrorMessage(errors.email, touchedFields.email, LoginInputs.email)}
                        />
                    </Grid.Col>
                    <Grid.Col>
                        <TextInput
                            leftSection={<IconLock />}
                            type='password'
                            label='Password'
                            placeholder='Enter password'
                            {...register('password', { required: true })}
                            required
                            error={errors.password && getErrorMessage(errors.password, touchedFields.password, LoginInputs.password)}
                        />
                    </Grid.Col>
                    <Grid.Col className='center mt-1'>
                        <Button fullWidth type='submit' disabled={!isValid || !isDirty}>Submit</Button>
                    </Grid.Col>
                </Grid>
            </form>
        </Card>
    )
}

export default Login