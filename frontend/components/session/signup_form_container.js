import { connect } from "react-redux";
import { clearErrors, signup, login } from "../../actions/session_actions";
import SessionForm from "./session_form";

const mapStateToProps = state => ({
  formType: "Sign Up",
  errors: state.errors,
  user: {
    full_name: '',
    team_id: '',
    email: "",
    password: "",
  },
});

const mapDispatchToProps = (dispatch) => ({
  action: (user) => dispatch(signup(user)),
  clearErrors: () => dispatch(clearErrors()),
  login: (user) => dispatch(login(user))
});
export default connect(mapStateToProps, mapDispatchToProps)(SessionForm);
