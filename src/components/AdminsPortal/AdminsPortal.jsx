import * as React from "react";
import { Admin, Resource } from 'react-admin';
import jsonServerProvider from 'ra-data-json-server';
import { UserList } from '../AdminsPortal/UserList'
import { RoleList } from '../AdminsPortal/RoleList'
import { ProductsList, ProductsEdit } from '../AdminsPortal/ProductsList'

import MyLayout from '../AdminsPortal/MyLayout'
import { createHashHistory } from 'history';

const dataProvider = jsonServerProvider('http://localhost:5000');

const history = createHashHistory();

const AdminsPortal = () => (

      <Admin  history={history} layout={MyLayout}  dataProvider={dataProvider}>
            <Resource name="users" list={UserList} />
            <Resource name="roles" list={RoleList} />
            <Resource name="products"  edit={ProductsEdit} list={ProductsList} />
      </Admin>

  );


export default AdminsPortal;