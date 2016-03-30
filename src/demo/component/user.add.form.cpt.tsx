/**
 * Created by asher on 2016/3/30.
 */

import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'
import {addUserAction, modifyUserPropertyAction} from '../actions/manager.ac'

class UserAddFormCpt extends React.Component<any,any> {

    componentWillMount() {
        const {params} = this.props;
        this.setState(params)
    }

    addUser = () => {
        const {addUserAction} = this.props;
        addUserAction(
            this.refs['username']['value'],
            this.refs['age']['value']
        )
    };

    modifyUser = () => {
        const {modifyUserPropertyAction} = this.props;
        modifyUserPropertyAction(
            this.refs['username']['value'],
            this.refs['age']['value'],
            this.state['seq']
        );
    };

    render() {
        const {route} = this.props;
        return (
            <div className="add-container">
                <form className="form-horizontal">
                    <div className="form-group">
                        <label htmlFor="name" className="col-md-4">Name</label>
                        <input id="name" ref="username" type="text" className="col-md-8" placeholder="input your name here"
                               defaultValue={this.state.username}/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="age" className="col-md-4">Age</label>
                        <input id="age" ref="age" type="number" className="col-md-8" placeholder="input your age here"
                               defaultValue={this.state.age}/>
                    </div>
                    <button className="btn btn-success block"
                            onClick={route.path === '/newUser' ? this.addUser : this.modifyUser}>
                        save
                    </button>
                </form>
            </div>
        )
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({addUserAction, modifyUserPropertyAction}, dispatch);
}


export default connect(null, mapDispatchToProps)(UserAddFormCpt);