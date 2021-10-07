import { List, Datagrid, TextField,EditButton 
    ,ReferenceField, TextInput, SimpleForm, Edit, ArrayField, SelectInput,
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
            {/* <TextInput source="status" /> */}
            <TextInput disabled source="id" label="order id" />
            <SelectInput source="status" choices={[
            { id: 'payment accepted', name: 'payment accepted' },
            { id: 'left warehouse', name: 'left warehouse' },
            { id: 'left warehouse', name: 'on the way' },
            { id: 'left warehouse', name: 'arrived country destination' },
            { id: 'photography', name: 'delivery completed' },
]} />
          </SimpleForm>
        </Edit>
      );
    