import React from 'react'
import UserAvatar from "../main/user_avatar";
import {GrClose} from 'react-icons/gr';


export default function ProfileSettingsModal(props) {
    return (
        <div className="modal-background">
            <div className="modal-top-buffer"></div>
            <div className="outer-modal-container">
                <div className="modal-container" >
                    <header className="modal-header">
                        <h2>My Profile Settings</h2>
                        <div className="btn exit" onClick={()=>console.log('close!!!')}>
                            <GrClose className="close" />
                        </div>
                    </header>
                     {/* <UserAvatar user={member} /> */}
                    <form onSubmit={(e)=>{e.preventDefault()}}>
                        <label><p>Full Name</p>
                            <input
                                type="text" 
                                title="Project name" 
                                // value={inputVal}
                                // onChange={ e => {
                                //     setInputVal(e.target.value)
                                //     nameValue.current = e.target.value
                                // }}
                                // onBlur={updateProject('name', nameValue.current)}
                            />
                        </label>
                        <label><p>Email</p>
                            <input
                                type="text" 
                                title="Project name" 
                                // value={inputVal}
                                // onChange={ e => {
                                //     setInputVal(e.target.value)
                                //     nameValue.current = e.target.value
                                // }}
                                // onBlur={updateProject('name', nameValue.current)}
                            />
                        </label>
                        <input type="submit" value="Save Changes"/>
                    </form>
                </div>
            </div>
            <div className="modal-bottom-buffer"></div>
        </div>
    )
}
