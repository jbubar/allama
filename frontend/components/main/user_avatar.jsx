import React from 'react'
import { COLORS, getInitials } from '../../util/nav';
import { Link } from 'react-router-dom';

export default function UserAvatar({user}) {
    return (
        <Link to={`/tasks/${user.id}`} key={user.id} className={`nav-circle-item ${COLORS[user.id % 20]}`}>
            {getInitials(user)}
        </Link>
    )
}
