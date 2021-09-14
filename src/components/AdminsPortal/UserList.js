import { List, Datagrid, TextField,ReferenceField  } from 'react-admin';

export const UserList = props => (
    <List {...props}>
        <Datagrid rowClick="edit">

        <ReferenceField source="role" reference="roles">
                <TextField source="name" />
        </ReferenceField>
        <ReferenceField source="role" reference="roles">
                <TextField source="capabilities" />
        </ReferenceField>
        
            <TextField source="id" />
            <TextField source="name.firstname" />
            <TextField source="name.lastname" />
        </Datagrid>
    </List>
);