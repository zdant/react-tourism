/**
 * Created by asher on 2016/3/30.
 */
import {Link} from 'react-router'
require('../sass/slidemenu.sass');

class SlideMenuItemCpt extends React.Component<any,any> {

    render() {
        
        const {label,icon,to} = this.props;
        
        return (
            <div className="nav-item">
                <Link to={to}>
                    <i className={icon} />
                    <span>{label}</span>
                </Link>
            </div>
        )
    }

}

export default SlideMenuItemCpt;