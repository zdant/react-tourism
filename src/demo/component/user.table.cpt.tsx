/**
 * Created by asher on 2016/3/30.
 */
import UserTableRowCpt from './user.table.row.cpt'

class UserTableCpt extends React.Component<any,any> {
    render() {

        const {users, modifyUserProperty, openUserFormAction} = this.props;
        var rows = [];

        users.forEach(function (user, index) {
            user['seq'] = index;
            rows.push(<UserTableRowCpt {...user} key={user.username} modifyUserProperty={modifyUserProperty}
                                                 openUserFormAction={openUserFormAction}/>)
        });

        return (

            <table className="table table-bordered table-striped">
                <thead>
                <tr>
                    <th className="text-center">check</th>
                    <th className="text-center">seq</th>
                    <th className="text-center">username</th>
                    <th className="text-center">age</th>
                    <th className="text-center">edit</th>
                </tr>
                </thead>
                <tbody>
                {rows}
                </tbody>
            </table>

        );
    }
}

export default UserTableCpt;