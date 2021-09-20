import { List, Datagrid, TextField,EditButton 
    ,ReferenceField, TextInput, SimpleForm, Edit
    } from 'react-admin';
    
    
    const orderFilters = [
        <TextInput source="q" label="Search" alwaysOn />,
    ];
    
    
    
    
    
    export const OrdersList = props => (
        <List  filters={orderFilters} {...props}>
            <Datagrid>
                <TextField source="id" />
                <TextField source="status" />
                <ReferenceField source="customer" reference="users">
                <TextField source="name.firstname" />
                </ReferenceField>
                <EditButton />
            </Datagrid>
        </List>
    );
    
    
    export const OrdersEdit = (props) => (
        <Edit {...props}>
          <SimpleForm>
            <TextInput source="status" />
          </SimpleForm>
        </Edit>
      );
    