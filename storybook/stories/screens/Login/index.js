import React from 'react'
import { storiesOf } from '@storybook/react'
import L from 'screens/Login'

const Login = L

export default module => storiesOf('Screens/Login', module).add('Fresh', () => <Login />)
