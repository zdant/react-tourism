/**
 * Created by asher on 2016/3/30.
 */
import SlideMenuCpt from './slidemenu.cpt'
require('../sass/manager.all.sass');

class ManagerAllCpt extends React.Component<any,any> {
    
    render() {

        return (
            
            <div>
                <SlideMenuCpt/>
                <div className="main-content">
                    {this.props.children}
                </div>
            </div>
            
            
        )
    }
}

export default ManagerAllCpt;