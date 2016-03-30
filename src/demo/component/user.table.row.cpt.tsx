/**
 * Created by asher on 2016/3/30.
 */

class UserTableRowCpt extends React.Component<any,any> {

    selected = () => {
        const {modifyUserProperty} = this.props;
        modifyUserProperty(
            this.refs['seq']['innerHTML'],
            this.refs['checkbox']['checked']
        );
    };
    
    openUserForm = () => {
      
        const  {openUserFormAction} = this.props;
        openUserFormAction(
            this.refs['username']['innerHTML'],
            this.refs['age']['innerHTML'],
            this.refs['seq']['innerHTML']
        );
        
    };
    
    
    render() {
        
        const {username, age, seq} = this.props;
        
        return (
            <tr>
                <td>
                    <input type="checkbox" onClick={this.selected} ref="checkbox" />
                </td>
                <td ref="seq">{seq}</td>
                <td ref="username">{username}</td>
                <td ref="age">{age}</td>
                <td>
                    <button onClick={this.openUserForm}>Edit</button>
                </td>
            </tr>
        )
        
    }


}

export default UserTableRowCpt;
