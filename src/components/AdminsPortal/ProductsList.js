import { List, Datagrid, TextField, ImageField, EditButton 
,ReferenceInput,SelectInput, TextInput, SimpleForm, Edit
} from 'react-admin';


// const productFilters = [
//     <TextInput source="header" label="Search" alwaysOn />,
// ];
// filters={productFilters}


export const ProductsList = props => (
    <List  {...props}>
        <Datagrid>
            <TextField source="id" />
            <TextField source="header" />
            <TextField source="price" />
            <TextField source="salePrice" />
            <EditButton />
        </Datagrid>
    </List>
);


export const ProductsEdit = (props) => (
    <Edit {...props}>
      <SimpleForm>
        <TextInput source="header" />
        <TextInput source="price" />
        <TextInput source="salePrice" />
      </SimpleForm>
    </Edit>
  );
