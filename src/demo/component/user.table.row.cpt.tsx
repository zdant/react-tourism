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
                <td className="text-center">
                    <input type="checkbox" onClick={this.selected} ref="checkbox" />
                </td>
                <td className="text-center" ref="seq">{seq}</td>
                <td className="text-center" ref="username">{username}</td>
                <td className="text-center" ref="age">{age}</td>
                <td className="text-center">
                    <button className="btn btn-primary" onClick={this.openUserForm}>Edit</button>
                </td>
            </tr>
        )
        
    }


}

export default UserTableRowCpt;
