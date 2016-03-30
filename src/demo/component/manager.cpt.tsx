/**
 * Created by asher on 2016/3/30.
 */
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux' 

import ToolBarCpt from './toolbar.cpt'
import UserTableCpt from './user.table.cpt'
import * as Actions from '../actions/manager.ac'

require('../sass/manager.sass');

class ManagerCpt extends React.Component<any,any> {

    componentDidMount() {
        const {fetchGetIfNeeded} = this.props;
        fetchGetIfNeeded();
    }

    render() {
        const {users, modifyUserProperty, deleteUser, openUserFormAction} = this.props;
        return (
            <div>
                <ToolBarCpt  deleteUser={deleteUser} />
                <UserTableCpt users={users} modifyUserProperty={modifyUserProperty} openUserFormAction={openUserFormAction} />
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        users:state.reducer.manager.users
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators(Actions, dispatch);
}

export default connect(mapStateToProps,mapDispatchToProps)(ManagerCpt);