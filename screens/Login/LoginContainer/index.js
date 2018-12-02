
import Router from 'next/router'
import { validateEmailId, validatePassword } from '../../../shared/helpers/validators'
import { FormGroup, FormControl, ControlLabel } from 'react-bootstrap'
import { ErrorMsgs } from 'components/Errors/ErrorMsgs'
import { styles, styleComponent } from './styles'
import CarouselContainer from '../components/CarouselContainer'

export default class LoginContainer extends React.Component {
  constructor(props, context) {
    super(props, context)
    this.state = {
      errors: {},
      email: '',
      password: '',
      index: 0,
      direction: null
    }
    this.handleChangeEmail = this.handleChangeEmail.bind(this)
    this.handleChangePassword = this.handleChangePassword.bind(this)
  }

  handleChangeEmail(e) {
    this.setState({ email: e.target.value })
  }

  handleChangePassword(e) {
    this.setState({ password: e.target.value })
  }

  onLogin() {
    const { email, password } = this.state
    Router.push(
      {
        pathname: '/home'
      },
      {
        pathname: '/Dashboard' //Giving an alias to show in the URL
      }
    )
  }

  render() {
    const { email, password } = this.state
    const validEmail = validateEmailId(email)
    const validPassword = validatePassword(password)
    //  style={{ minHeight: '1000px' }} shouldn't be here - it's a hack job, and needs fixing #TODO
    return (
      <div className="row" style={{ minHeight: '1000px' }}>
        <styleComponent.loginFormBackground className="col-md-8 col-sm-10 loginFormBackgroundMobile">
          <div className="row gridFrame">
            <styleComponent.loginBackground className="col-md-6 col-sm-6 login">
              <CarouselContainer />
            </styleComponent.loginBackground>
            <styleComponent.loginFormBg className="col-md-6 col-sm-6 col-xs-12 loginForm">
              <styleComponent.loginCredential className="loginCrediantsForm">
                <div className="col-md-12">
                  <form>
                    <div>
                      <styleComponent.loginHeading>LOGIN</styleComponent.loginHeading>
                    </div>
                    <FormGroup
                      controlId="email"
                      validationState={
                        validEmail ? 'success' : validEmail === null ? 'null' : 'error'
                      }>
                      <ControlLabel>Enter User name</ControlLabel>
                      <FormControl
                        type="email"
                        value={this.state.email}
                        placeholder="Enter User Name"
                        onChange={this.handleChangeEmail}
                      />
                      <p className="paraAlign">{validEmail === false ? ErrorMsgs.email : null}</p>
                      <FormControl.Feedback />
                    </FormGroup>
                    <FormGroup
                      controlId="password"
                      validationState={validPassword ? 'false' : 'null'}>
                      <ControlLabel>Enter Password</ControlLabel>
                      <FormControl
                        type="password"
                        value={this.state.password}
                        placeholder="Enter Password"
                        onChange={this.handleChangePassword}
                      />
                      {/* <p className="paraAlign">{validPassword ? ErrorMsgs.password : null}</p> */}
                      <FormControl.Feedback />
                    </FormGroup>
                  </form>
                  <div className="clearfix" />
                  <styleComponent.buttonStyle>
                    <styleComponent.loginbtn
                      className=" btn btn-success loginbtn "
                      disabled={!validEmail || validPassword}
                      onClick={() => this.onLogin()}>
                      LOGIN
                    </styleComponent.loginbtn>
                  </styleComponent.buttonStyle>
                  <styleComponent.forgetPassword>
                    <a href="#"> Forgot Password?</a>
                  </styleComponent.forgetPassword>
                </div>
              </styleComponent.loginCredential>
              <styleComponent.copyright>
                &copy; Copyright 2018. All Rights Reserved.
              </styleComponent.copyright>
            </styleComponent.loginFormBg>
          </div>
          <div className="clearfix" />
        </styleComponent.loginFormBackground>
        <style jsx>{styles}</style>
      </div>
    )
  }
}
