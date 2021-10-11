import { List, Datagrid, TextField, Create, EditButton, ReferenceField
        , TextInput, SimpleForm, Edit, BooleanField, BooleanInput,ArrayField
        } from 'react-admin';


export const UserList = props => (
    <List {...props}>
        <Datagrid rowClick="edit">
        <TextField source="id" />
        <TextField source="name" />
        <ArrayField source="orders">
                <Datagrid>
                    <ReferenceField source="id" reference="orders">
                <TextField source="id" />
                </ReferenceField>

                </Datagrid>
              </ArrayField>

        <TextField source="phone" />
        <TextField source="email" />
        <TextField source="address" />
        <BooleanField source="active" />
        <EditButton />
        </Datagrid>
    </List>
);


export const UserEdit = (props) => (
  <Edit {...props}>
    <SimpleForm>
    <TextInput disabled source="id" />
      <TextInput source="name" />
      <TextInput source="phone" />
      <TextInput source="email" />
      <TextInput source="address" />
      <BooleanInput source="active" />
    </SimpleForm>
  </Edit>
);


export const UserCreate = (props) => (
  <Create {...props}>
        <SimpleForm>
    <TextInput source="id" />
      <TextInput source="name" />
      <TextInput source="phone" />
      <TextInput source="email" />
      <TextField source="address" />
      <TextField source="active" />
      <BooleanField source="active" />
    </SimpleForm>
  </Create>
);
  
