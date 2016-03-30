/**
 * Created by asher on 2016/3/30.
 */
import SlideMenuItemCpt from './slidemenu.item.cpt'
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'
import {toggleMenu} from '../actions/slidemenu.ac'
require('../sass/slidemenu.sass');

class SlideMenuCpt extends React.Component<any,any> {


    toggleSlideMenu = () => {
        //TODO toggle the slideMenu's open state
        const {isOpen} = this.props;
        toggleMenu(!isOpen);
    };

    render() {
        
        // const {menus} = this.props;
        var menus =[
            {label:"new user",icon:"fa fa-user-plus",to:"/newUser"},
            {label:"logout",icon:"fa fa-reply",to:"/"}
        ];
        
        var items=[];
        
        menus.forEach(function (menu) {
            items.push(<SlideMenuItemCpt {...menu} key={menu.to} />)
        });
        
        return (
           <nav className="slide-menu">
               <div className="nav-header"><i className="fa fa-th-list" onClick={this.toggleSlideMenu} /></div>
               {items}
           </nav>
        )        

    }
    
}

function mapStateToProps(state) {
    return {
        isOpen: state.reducer.slideMenu.isOpen
    };
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({toggleMenu}, dispatch);
}


export default connect(mapStateToProps, mapDispatchToProps)(SlideMenuCpt);
