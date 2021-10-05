import { List, Datagrid, TextField, ImageField,Create, EditButton 
        ,ReferenceInput,SelectInput, TextInput, SimpleForm, Edit
        } from 'react-admin';


export const UserList = props => (
    <List {...props}>
        <Datagrid rowClick="edit">
        <TextField source="id" />
        <TextField source="name" />
        <TextField source="age" />

{/* 
        <ReferenceField source="role" reference="roles">
                <TextField source="name" />
        </ReferenceField>
        <ReferenceField source="role" reference="roles">
                <TextField source="capabilities" />
        </ReferenceField> */}
        
        <EditButton />
        </Datagrid>
    </List>
);


export const UserEdit = (props) => (
        <Edit {...props}>
          <SimpleForm>
            <TextInput source="name" />
            <TextInput source="age" />
          </SimpleForm>
        </Edit>
      );
    
      export const UserCreate = (props) => (
        <Create {...props}>
          <SimpleForm>
            <TextInput source="name" />
            <TextInput source="age" />
          </SimpleForm>
        </Create>
      );