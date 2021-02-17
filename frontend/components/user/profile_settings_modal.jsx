import React, {useState} from 'react';
import {connect} from 'react-redux';
import UserAvatar from "../main/user_avatar";
import {GrClose} from 'react-icons/gr';
import { closeSettingsModal } from '../../actions/ui_actions';


function ProfileSettingsModal(props) {
    const [fullName, setFullName] = useState(props.currentUser.fullName)
    const [email, setEmail] = useState(props.currentUser.email)
    function handleSubmit(e){
        e.preventDefault();
        props.close();
    }
    return (
        <div className="modal-background">
            <div className="modal-top-buffer"></div>
            <div className="outer-modal-container">
                <div className="modal-container" >
                    <header className="modal-header">
                        <h2>My Profile Settings</h2>
                        <div className="btn exit" onClick={props.close}>
                            <GrClose className="close" />
                        </div>
                    </header>
                    <form onSubmit={handleSubmit}>
                        {/* <UserAvatar user={props.currentUser} /> */}
                        <label><p>Full Name</p>
                            <input
                                type="text" 
                                title="Full Name" 
                                value={fullName}
                                onChange={ e => {
                                    setFullName(e.target.value)
                                }}
                                // onBlur={updateProject('name', nameValue.current)}
                            />
                        </label>
                        <label><p>Email</p>
                            <input
                                type="text" 
                                title="Email" 
                                value={email}
                                onChange={ e => {
                                    setEmail(e.target.value)
                                }}
                                // onBlur={updateProject('name', nameValue.current)}
                            />
                        </label>
                        <input 
                            type="submit" 
                            value="Save Changes" 
                            className="settings-btn btn"
                            disabled={(email != props.currentUser.email || fullName != props.currentUser.fullName) ? false : true}
                        />
                    </form>
                </div>
            </div>
            <div className="modal-bottom-buffer"></div>
        </div>
    )
}

const mapStateToProps = (state) => ({
    currentUser: state.entities.users[state.session.currentUserId],
})
const mapDispatchToProps = (dispatch) => ({
    close: () => dispatch(closeSettingsModal()),
})
export default connect(mapStateToProps, mapDispatchToProps)(ProfileSettingsModal)