import * as React from "react";
import { Admin, Resource } from 'react-admin';
import jsonServerProvider from 'ra-data-json-server';
import { UserList } from '../AdminsPortal/UserList'
import { RoleList } from '../AdminsPortal/RoleList'
import MyLayout from '../AdminsPortal/MyLayout'

const dataProvider = jsonServerProvider('http://localhost:5000');


const AdminsPortal = () => (
    <div style={{marginTop: "0px"}}>
      <Admin  layout={MyLayout}  dataProvider={dataProvider}>
            <Resource name="users" list={UserList} />
            <Resource name="roles" list={RoleList} />
      </Admin>
      </div>
  );


export default AdminsPortal;