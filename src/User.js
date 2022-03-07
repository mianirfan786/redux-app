import React from 'react';

const User = (props) => {
    const {data} = props;
    return(
        <h1>
            User Component
            {data.name}
            {data.age}

        </h1>
    )
}
export  default User;