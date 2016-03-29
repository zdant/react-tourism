/**
 * Created by asher on 2016/3/29.
 */
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'
require('../sass/login.sass');

import {fetchPosts} from '../actions/login.ac'

class LoginCpt extends React.Component<any,any> {
    render() {
        return (
            <div>
                <h2>LOGIN</h2>
                <label>
                    <span>UserName:</span>
                    <input type="text" ref="username" placeholder="input your name..."/>
                </label>
                <label>
                    <span>PassWord:</span>
                    <input type="password" ref="password" placeholder="input your password..."/>
                </label>
                <div>
                    <button className="login-btn" onClick={this.onLoginClick}>Login</button>
                </div>
            </div>
        );
    }
    
    onLoginClick = () => {
        const {fetchPosts} = this.props;
        const  username = this.refs['username']['value'].trim();
        const  password = this.refs['password']['value'].trim();
        fetchPosts(username, password);
    }
}

function mapStateToProps(state) {
    return {

    };
}