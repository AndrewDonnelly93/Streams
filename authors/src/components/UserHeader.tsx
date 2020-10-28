import React from 'react';
import {connect} from 'react-redux';
import {RootState, User} from '../reducers';

interface UserHeaderProps {
    userId: number;
    user?: User
}

const UserHeader: React.FC<Partial<UserHeaderProps>> = ({user}) => {
    if (!user) {
        return <div>Loading the name...</div>;
    }

    return (
        <div className="header">
            {user.name}
        </div>
    )
};

export default connect(
    ({users}: RootState, ownProps: UserHeaderProps) => ({user: users?.find(user => user.id === ownProps.userId)})
)(UserHeader);