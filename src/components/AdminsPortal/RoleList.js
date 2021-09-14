import { List, Datagrid, TextField } from 'react-admin';

export const RoleList = props => (
    <List {...props}>
        <Datagrid rowClick="edit">
            <TextField source="name" />
            <TextField source="id" />
        </Datagrid>
    </List>
);