import * as React from "react";
import { Admin, Resource } from 'react-admin';
import jsonServerProvider from 'ra-data-json-server';
import { UserList } from '../AdminsPortal/UserList'
import { RoleList } from '../AdminsPortal/RoleList'
import { ProductsList, ProductsEdit } from '../AdminsPortal/ProductsList'

import MyLayout from '../AdminsPortal/MyLayout'

const dataProvider = jsonServerProvider('http://localhost:5000');


const AdminsPortal = () => (
    <div style={{marginTop: "0px"}}>
      <Admin  layout={MyLayout}  dataProvider={dataProvider}>
            <Resource name="users" list={UserList} />
            <Resource name="roles" list={RoleList} />
            <Resource name="products"  edit={ProductsEdit} list={ProductsList} />
      </Admin>
      </div>
  );


export default AdminsPortal;