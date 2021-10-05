import * as React from "react";
import { Admin, Resource } from 'react-admin';
import jsonServerProvider from 'ra-data-json-server';
import { UserList , UserEdit, UserCreate} from '../AdminsPortal/UserList'
import { RoleList } from '../AdminsPortal/RoleList'
import { ProductsList, ProductsEdit } from '../AdminsPortal/ProductsList'
import { OrdersEdit, OrdersList } from '../AdminsPortal/OrdersList'
import { createHashHistory } from 'history';
// import MyLayout from '../AdminsPortal/MyLayout'
import { FirebaseAuthProvider } from 'react-admin-firebase'
import { firebaseConfig } from '../../firebase'
import simpleRestProvider from 'ra-data-simple-rest'

const dataProvider = simpleRestProvider('http://localhost:3000');


const options = {}
const authProvider = FirebaseAuthProvider(firebaseConfig,options)


const history = createHashHistory();

const AdminsPortal = () => (

      <Admin authProvider={authProvider} history={history}  dataProvider={dataProvider}>
            <Resource name="users" create={UserCreate} edit={UserEdit} list={UserList} />
            <Resource name="products"  edit={ProductsEdit} list={ProductsList} />
            {/* <Resource name="roles" list={RoleList} />
            <Resource name="orders"  edit={OrdersEdit} list={OrdersList} /> */}
      </Admin>

  );


export default AdminsPortal;