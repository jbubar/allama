import React from 'react'
import { COLORS, getInitials } from '../../util/nav';

export default function UserAvatar({user}) {
    return (
        <span key={user.id} className={`nav-circle-item ${COLORS[user.id % 20]}`}>
            {getInitials(user)}
        </span>
    )
}
