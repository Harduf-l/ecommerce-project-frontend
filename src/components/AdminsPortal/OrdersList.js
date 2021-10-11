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
                <TextField source="firebaseEmail" label="User email"/>
                {/* <ReferenceField source="customerId" reference="users">
                <TextField source="name" />
                </ReferenceField> */}
                <EditButton />
            </Datagrid>
        </List>
    );
    
    
    export const OrdersEdit = (props) => (
        <Edit {...props}>
          <SimpleForm>
            {/* <TextInput source="status" /> */}

            <TextInput disabled source="id" label="order id" />
            <TextInput source="orderSubTotal" label="sub total" />
            <SelectInput source="status" choices={[
            { id: 'payment accepted', name: 'payment accepted' },
            { id: 'left warehouse', name: 'left warehouse' },
            { id: 'on the way', name: 'on the way' },
            { id: 'arrived country destination', name: 'arrived country destination' },
            { id: 'delivery completed', name: 'delivery completed' },
]} />
          </SimpleForm>
        </Edit>
      );
    