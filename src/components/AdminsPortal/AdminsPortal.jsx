import * as React from "react";
import { Admin, Resource } from 'react-admin';
import jsonServerProvider from 'ra-data-json-server';
import { UserList } from '../AdminsPortal/UserList'
import { RoleList } from '../AdminsPortal/RoleList'
import { ProductsList, ProductsEdit } from '../AdminsPortal/ProductsList'
import { OrdersEdit, OrdersList } from '../AdminsPortal/OrdersList'

import { createHashHistory } from 'history';

const dataProvider = jsonServerProvider('http://localhost:5000');

const history = createHashHistory();

const AdminsPortal = () => (

      <Admin  history={history}  dataProvider={dataProvider}>
            <Resource name="users" list={UserList} />
            <Resource name="roles" list={RoleList} />
            <Resource name="products"  edit={ProductsEdit} list={ProductsList} />
            <Resource name="orders"  edit={OrdersEdit} list={OrdersList} />
      </Admin>

  );


export default AdminsPortal;