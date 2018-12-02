// import { connect } from 'react-redux'
// import { actions as identityActions } from 'shared/redux/modules/identity';
import LoginScreen from '../screens/Login';

export default //   connect(
//   state => ({ identity: state.identity }),
//   { login: identityActions.login } // <= actions here
// )(
class Login extends React.Component {
	render() {
		console.log('THISPROPS', this.props);
		// const { identity } = this.props
		// return <LoginScreen user={identity} />
		return <LoginScreen />;
	}
}
// )
