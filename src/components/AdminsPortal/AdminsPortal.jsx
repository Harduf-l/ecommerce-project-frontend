import * as React from "react";
import { Admin, Resource } from 'react-admin';
import jsonServerProvider from 'ra-data-json-server';
import { UserList } from '../AdminsPortal/UserList'
import { RoleList } from '../AdminsPortal/RoleList'


const dataProvider = jsonServerProvider('http://localhost:5000');


const AdminsPortal = () => (
      <Admin dataProvider={dataProvider}>
            <Resource name="users" list={UserList} />
            <Resource name="roles" list={RoleList} />
      </Admin>
  );


export default AdminsPortal;