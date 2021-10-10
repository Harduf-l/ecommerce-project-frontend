import { List, Datagrid, TextField,Create, EditButton 
    , TextInput, SimpleForm, Edit, 
    } from 'react-admin';


export const ReviewList = props => (
<List {...props}>
    <Datagrid rowClick="edit">
    <TextField source="id" />
    <TextField source="name" />
    <TextField source="rating" />
    <TextField source="title" />
    <TextField source="content" />
    <TextField source="productId" />
    <EditButton />
    </Datagrid>
</List>
);


export const ReviewEdit = (props) => (
<Edit {...props}>
<SimpleForm>
<TextInput disabled source="id" />
  <TextInput source="name" />
  <TextInput source="rating" />
    <TextInput source="title" />
    <TextInput source="content" />
    <TextInput source="productId" />
</SimpleForm>
</Edit>
);


export const ReviewCreate = (props) => (
<Create {...props}>
    <SimpleForm>
<TextInput source="id" />
  <TextInput source="name" />
  <TextInput source="rating" />
    <TextInput source="title" />
    <TextInput source="content" />
    <TextInput source="productId" />
</SimpleForm>
</Create>
);

