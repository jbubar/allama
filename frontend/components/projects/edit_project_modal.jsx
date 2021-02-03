import React from 'react';
import { GrClose } from 'react-icons/gr';

export default function EditProjectModal() {
    return (
        <div className="modal-background">
            <div className="modal-container">
                <header className="modal-header">
                    <h1>Project details</h1>
                    <div className="nav-icon exit">
                        <GrClose className="close" />
                    </div>
                </header>
                <form action="">
                    <input type="text" name="" id=""/>
                </form>
            </div>
        </div>
    )
}
