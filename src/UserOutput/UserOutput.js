import React from 'react';

const UserOutput = (props) => {
    return (
        <div className="UserOutput">
            <p>Username: {props.userName}</p>
            <p>This paragraph belongs to me</p> 
        </div>
    );    
}

export default UserOutput;