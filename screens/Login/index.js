import Head from '../components/head';
import Router from 'next/router';
import { validateEmailId, validatePassword } from 'shared/helpers/validators';
import { Grid, FormGroup, FormControl, ControlLabel } from 'react-bootstrap';
import { ErrorMsgs } from 'components/Errors/ErrorMsgs';
import Styled from './styled';
import CarouselContainer from './components/CarouselContainer';

// import theme from 'screens/theme'

export default class Login extends React.Component {
	constructor(props, context) {
		super(props, context);
		this.state = {
			errors: {},
			email: '',
			password: '',
			index: 0,
			direction: null
		};
		this.handleChangeEmail = this.handleChangeEmail.bind(this);
		this.handleChangePassword = this.handleChangePassword.bind(this);
	}

	static async getInitialProps(req) {
		const isServer = !!req;
		return { isServer };
	}

	handleChangeEmail(e) {
		this.setState({ email: e.target.value });
	}

	handleChangePassword(e) {
		this.setState({ password: e.target.value });
	}

	onLogin() {
		const { email, password } = this.state;
		Router.push(
			{
				pathname: '/home'
			},
			{
				pathname: '/Dashboard' //Giving an alias to show in the URL
			}
		);
	}

	render() {
		const { email, password } = this.state;
		const validEmail = validateEmailId(email);
		const validPassword = validatePassword(password);

		return (
			<Styled.background>
				<Styled.noScroll />
				<Head title={'login'} />
				<Grid style={{ minHeight: '1000px' }}>
					<Styled.panelBackground md={8} sm={10}>
						<Styled.Image md={6} xs={12}>
							<CarouselContainer />
						</Styled.Image>
						<Styled.credentialPanel md={6} xs={12}>
							<Styled.form>
								<Styled.Heading>Educe Login</Styled.Heading>
								<FormGroup
									controlId="email"
									validationState={validEmail ? 'success' : validEmail === null ? 'null' : 'error'}
								>
									<ControlLabel>Username</ControlLabel>
									<FormControl
										type="email"
										value={this.state.email}
										placeholder="Username / email"
										onChange={this.handleChangeEmail}
									/>
									<p className="paraAlign">{validEmail === false ? ErrorMsgs.email : null}</p>
									<FormControl.Feedback />
								</FormGroup>
								<FormGroup controlId="password" validationState={validPassword ? 'false' : 'null'}>
									<ControlLabel>Password</ControlLabel>
									<FormControl
										type="password"
										value={this.state.password}
										placeholder="Password"
										onChange={this.handleChangePassword}
									/>
									<FormControl.Feedback />
								</FormGroup>
							</Styled.form>
							<Styled.loginBtn
								bsStyle="success"
								disabled={!validEmail || validPassword}
								onClick={() => this.onLogin()}
							>
								LOGIN
							</Styled.loginBtn>
							<Styled.forgetPassword>
								<a href="#"> Forgot Password?</a>
							</Styled.forgetPassword>
							<Styled.copyright>&copy; Copyright 2018. All Rights Reserved.</Styled.copyright>
						</Styled.credentialPanel>
					</Styled.panelBackground>
				</Grid>
			</Styled.background>
		);
	}
}
