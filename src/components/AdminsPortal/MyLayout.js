import { Layout } from 'react-admin';
// import { AppBar } from 'react-admin';

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

// import MySidebar from './MySidebar';
// import MyMenu from './MyMenu';
// import MyNotification from './MyNotification';


const MyLayout = props => {

    const MyAppBar = props => (
        <AppBar {...props}>
            {/* <Toolbar style={{}}>
                <Typography variant="h6" id="react-admin-title" />
            </Toolbar> */}
        </AppBar>
    );

return (
<Layout
    {...props}
    appBar={MyAppBar}
    // sidebar={MySidebar}
    // menu={MyMenu}
    // notification={MyNotification}
/>
)

}

export default MyLayout;