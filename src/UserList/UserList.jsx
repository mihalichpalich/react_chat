import React from 'react'

const User = ({name, isSelected, onClick}) => {
    const className = isSelected ? "UserList-item UserList-item-selected" : "UserList-item";
    return <div className={className} onClick={onClick}>{name}</div>
}

const UserList = ({users, selectedUser, onSelect}) => {
    return (<div className="UserList">
                {users.map(({user_id, name}) => {
                    const isSelected = selectedUser === name;
                    const onUserSelect = () => onSelect(name);
                    return <User key={user_id} name={name} isSelected={isSelected} onClick={onUserSelect}/>
                })}
            </div>)
};

export default UserList