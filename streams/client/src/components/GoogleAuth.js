import React from 'react';
import {connect} from 'react-redux';
import {signIn, signOut} from '../actions';

class GoogleAuth extends React.Component {
    componentDidMount() {
        // Initialising the library Gapi
        window.gapi.load('client:auth2', () => {
            window.gapi.client.init({
                clientId: '344443296476-tthco50urcrij3rtea0f31jqi93sre57.apps.googleusercontent.com',
                // What different parts of the user profile we want to have access to
                // (it will appear on the Google Oath confirmation screen)
                scope: 'email'
            }).then(() => {
               this.auth = window.gapi.auth2.getAuthInstance();
               this.onAuthChange(this.auth.isSignedIn.get());
               this.auth.isSignedIn.listen(this.onAuthChange);
            });
        });
    }

    onAuthChange = (isSignedIn) => {
     if (isSignedIn) {
         this.props.signIn(this.auth.currentUser.get().getId());
     } else {
         this.props.signOut();
     }
    };

    renderAuthButton() {
        const {isSignedIn} = this.props;
        if (isSignedIn === null) {
            return null;
        } else if (isSignedIn) {
            return (
                <button
                    className="ui red google button"
                    onClick={() => this.auth.signOut()}
                >
                    <i className="google icon"/>
                    Sign Out
                </button>
            )
        } else {
             return (
                <button
                    className="ui red google button"
                    onClick={() => this.auth.signIn()}
                >
                    <i className="google icon"/>
                    Sign In with Google
                </button>
            )
        }
    }

    render() {
        return (
            <div>{this.renderAuthButton()}</div>
        )
    }
}

export default connect(
    ({auth}) => ({isSignedIn: auth.isSignedIn}),
    {
        signIn,
        signOut
    }
)(GoogleAuth);