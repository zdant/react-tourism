/**
 * Created by asher on 2016/3/30.
 */
import UserTableRowCpt from './user.table.row.cpt'

class UserTableCpt extends React.Component<any,any> {
    render() {

        const {user, modifyUserProperty, openUserFormAction} = this.props;
        var rows = [];

        user.forEach(function (user, index) {
            user['req'] = index;
            rows.push(<UserTableRowCpt {...user} key={user.username} modifyUserProperty={modifyUserProperty}
                                                 openUserFormAction={openUserFormAction}/>)
        });

        return (

            <table>
                <thead>
                <tr>
                    <th></th>
                    <th>seq</th>
                    <th>username</th>
                    <th>age</th>
                    <th>edit</th>
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