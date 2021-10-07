import * as React from "react";
import { Admin, Resource } from 'react-admin';
import { UserList , UserEdit, UserCreate} from '../AdminsPortal/UserList'
import { ProductsList, ProductsEdit, ProductsCreate } from '../AdminsPortal/ProductsList'
import { OrdersEdit, OrdersList } from '../AdminsPortal/OrdersList'
import { createHashHistory } from 'history';
// import MyLayout from '../AdminsPortal/MyLayout'
import { FirebaseAuthProvider } from 'react-admin-firebase'
import { firebaseConfig } from '../../firebase'
import simpleRestProvider from 'ra-data-simple-rest'
import PeopleIcon from '@material-ui/icons/Person'
import ordersIcon from '@material-ui/icons/CalendarViewDay';


const dataProvider = simpleRestProvider('http://localhost:5000');


const options = {}
const authProvider = FirebaseAuthProvider(firebaseConfig,options)


const history = createHashHistory();

const AdminsPortal = () => (

      <Admin authProvider={authProvider} history={history}  dataProvider={dataProvider}>
            <Resource name="users" icon={PeopleIcon} create={UserCreate} edit={UserEdit} list={UserList} />
            <Resource name="products" create={ProductsCreate}  edit={ProductsEdit} list={ProductsList} /> 
            <Resource name="orders"  icon={ordersIcon}  edit={OrdersEdit} list={OrdersList} />
      </Admin>

  );


export default AdminsPortal;