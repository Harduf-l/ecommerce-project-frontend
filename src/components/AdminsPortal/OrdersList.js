import { List, Datagrid, TextField,EditButton 
    ,ReferenceField, TextInput, SimpleForm, Edit, ArrayField
    } from 'react-admin';
    
    
    // const orderFilters = [
    //     <TextInput source="q" label="Search" alwaysOn />,
    // ];
    // filters={orderFilters}
    
    export const OrdersList = props => (
        <List   {...props}>
            <Datagrid>
                <TextField source="id" label="Order id" />
                <TextField source="orderSubTotal" label="Total"/>

                <ArrayField source="products">
                <Datagrid>
                    <TextField source="header" label="name" />
                    <TextField source="price" />
                    <TextField source="quantity" />
                </Datagrid>
              </ArrayField>
                <TextField source="status" />
                <ReferenceField source="customerId" reference="users">
                <TextField source="name" />
                </ReferenceField>
                <EditButton />
            </Datagrid>
        </List>
    );
    
    
    export const OrdersEdit = (props) => (
        <Edit {...props}>
          <SimpleForm>
            <TextInput source="status" />
            <TextInput source="customerId" />
          </SimpleForm>
        </Edit>
      );
    