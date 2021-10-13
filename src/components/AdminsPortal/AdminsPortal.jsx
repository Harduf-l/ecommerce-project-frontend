import * as React from "react";
import { useEffect } from 'react';

import { Admin, Resource } from 'react-admin';
import { UserList , UserEdit, UserCreate} from '../AdminsPortal/UserList'
import { ReviewList , ReviewEdit, ReviewCreate} from '../AdminsPortal/ReviewList'
import { CommentsList , CommentsEdit, CommentsCreate} from '../AdminsPortal/CommentsList'

import { TicketList , TicketEdit} from '../AdminsPortal/TicketsList'


import chart from './Chart'
import { ProductsList, ProductsEdit, ProductsCreate } from '../AdminsPortal/ProductsList'
import { OrdersEdit, OrdersList } from '../AdminsPortal/OrdersList'
import { createHashHistory } from 'history';
// import MyLayout from '../AdminsPortal/MyLayout'
import { FirebaseAuthProvider } from 'react-admin-firebase'
import { firebaseConfigAdmin } from '../../firebase'
import simpleRestProvider from 'ra-data-simple-rest'
import PeopleIcon from '@material-ui/icons/Person'
import ordersIcon from '@material-ui/icons/CalendarViewDay';

import myDashboard from './Dashboard'

// import ReviewsIcon from '@mui/icons-material/Reviews';
// import TimelineIcon from '@mui/icons-material/Timeline';
// import CommentIcon from '@mui/icons-material/Comment';
// import NoteIcon from '@mui/icons-material/Note';

const dataProvider = simpleRestProvider(process.env.REACT_APP_API_URL);


// const options = {}



// const authProvider = FirebaseAuthProvider(firebaseConfigAdmin,options)

// authProvider={authProvider}

const history = createHashHistory();

const AdminsPortal = () => {

      // useEffect(() => {

      //       window.scrollTo(0, 100);

                
      //     }, []);

return (
      <Admin  dashboard={myDashboard}  history={history}  dataProvider={dataProvider}>
            <Resource name="users" icon={PeopleIcon} create={UserCreate} edit={UserEdit} list={UserList} />
            <Resource name="products" create={ProductsCreate}  edit={ProductsEdit} list={ProductsList} /> 
            <Resource name="orders"  icon={ordersIcon}  edit={OrdersEdit} list={OrdersList} />
            <Resource name="reviews"   create={ReviewCreate} edit={ReviewEdit} list={ReviewList} />
            <Resource name="comments"   create={CommentsCreate} edit={CommentsEdit} list={CommentsList} />
            <Resource name="tickets"   edit={TicketEdit} list={TicketList} />
            <Resource name="graphs"   list={chart} />
      </Admin>
)

}


export default AdminsPortal;