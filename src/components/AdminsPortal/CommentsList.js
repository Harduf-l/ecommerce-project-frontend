import { List, Datagrid, TextField, Create, EditButton 
    , TextInput, SimpleForm, Edit
    } from 'react-admin';


export const CommentsList = props => (
<List {...props}>
    <Datagrid rowClick="edit">
    <TextField source="id" />
    <TextField source="name" />
    <TextField source="email" />
    <TextField source="body" label="content" />
    <EditButton />
    </Datagrid>
</List>
);


export const CommentsEdit = (props) => (
<Edit {...props}>
<SimpleForm>
<TextInput disabled source="id" />
  <TextInput source="name" />
  <TextInput source="email" />
  <TextInput source="body" label="content" />
</SimpleForm>
</Edit>
);


export const CommentsCreate = (props) => (
<Create {...props}>
    <SimpleForm>
<TextInput source="id" />
  <TextInput source="name" />
  <TextInput source="email" />
  <TextField source="body" label="content" />
</SimpleForm>
</Create>
);

