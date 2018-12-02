import React from 'react'
import { storiesOf } from '@storybook/react'
import L from 'screens/Login'
import withBootstrap from 'storybook/Hocs/withBootstrap'

const Login = withBootstrap(L)

export default module => storiesOf('Screens/Login', module).add('Fresh', () => <Login />)
