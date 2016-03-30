/**
 * Created by asher on 2016/3/30.
 */
import {Link} from 'react-router'

require('../sass/toolbar.sass');

class ToolCarCpt extends React.Component<any,any> {
    render() {
        const {deleteUser} = this.props;
        return (
            <div className="toolbar">
                <Link className="route-link btn btn-default" to="/newUser">new</Link>
                <button className="btn btn-danger toolbar-other-item" onClick={deleteUser}>delete the users selected</button>
            </div>
        )
    }
}

export default ToolCarCpt;