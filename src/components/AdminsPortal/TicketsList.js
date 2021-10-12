import { List, Datagrid, TextField, EditButton , SelectInput
    , TextInput, SimpleForm, Edit, 
    } from 'react-admin';


export const TicketList = props => (
<List {...props}>
    <Datagrid rowClick="edit">
    <TextField source="id" />
    <TextField source="email" />
    <TextField source="name" />
    <TextField source="subject" />
    <TextField source="content" />
    <TextField source="status" />
    <EditButton />
    </Datagrid>
</List>
);


export const TicketEdit = (props) => (
<Edit {...props}>
<SimpleForm>
<TextInput disabled source="id" />
  <TextInput source="email" />

  <SelectInput source="status" choices={[
            { id: 'pending', name: 'pending' },
            { id: 'accepted', name: 'accepted' },
            { id: 'rejected', name: 'rejected' },
            { id: 'closed', name: 'closed' },
]} />

    <TextInput source="response"/>
</SimpleForm>
</Edit>
);

