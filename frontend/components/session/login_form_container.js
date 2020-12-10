import { connect } from 'react-redux';
import { clearErrors, login } from '../../actions/session_actions'
import SessionForm from './session_form';

const mapStateToProps = (state, ownProps) => ({
    formType: 'Log In',
    errors: state.errors,
    user: { 
        email: '',
        password: ''
    }
})

const mapDispatchToProps = dispatch => ({
    action: (user) => dispatch(login(user)),
    clearErrors: () => dispatch(clearErrors())
})
export default connect(mapStateToProps, mapDispatchToProps)(SessionForm)