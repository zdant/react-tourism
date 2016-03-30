/**
 * Created by asher on 2016/3/30.
 */
import {Link} from 'react-router'

require('../sass/toolbar.sass');

class ToolCarCpt extends React.Component<any,any> {
    render() {
        const {deleteUser} = this.props;
        return (
            <div>
                <button><Link to="/newUser">new</Link></button>
                <button onClick={deleteUser}>delete the users selected</button>
            </div>
        )
    }
}

export default ToolCarCpt;