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
            <div className="login-container">
                <div>
                    <h2>LOGIN</h2>
                    <label className="login-input-item">
                        <span className="item-label">UserName:</span>
                        <input type="text" ref="username" placeholder="input your name..." autoFocus="autofocus" />
                    </label>
                    <label className="login-input-item">
                        <span className="item-label">PassWord:</span>
                        <input type="password" ref="password" placeholder="input your password..."/>
                    </label>
                    <div>
                        <button className="login-btn btn btn-primary" onClick={this.onLoginClick}>Login</button>
                    </div>
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
        result: state.reducer.login.rsp,
        isFetching: state.reducer.login.isFetching
    };
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({fetchPosts}, dispatch);
}


export default connect(mapStateToProps, mapDispatchToProps)(LoginCpt);