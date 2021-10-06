import { List, Datagrid, TextField, ImageField, EditButton 
,ReferenceInput,SelectInput, TextInput, SimpleForm, Edit, Create,
} from 'react-admin';


// const productFilters = [
//     <TextInput source="header" label="Search" alwaysOn />,
// ];
// filters={productFilters}


export const ProductsList = props => (
    <List  {...props}>
        <Datagrid>
            <TextField source="id" />
            <TextField source="header" label="Name" />
            <TextField source="price" />
            <TextField source="salePrice" />
            <EditButton />
        </Datagrid>
    </List>
);


export const ProductsEdit = (props) => (
    <Edit {...props}>
      <SimpleForm>
      <TextInput disabled source="id" />
        <TextInput source="header" />
        <TextInput source="rating" />
        <TextInput source="price" />
        <TextInput source="salePrice" />
        <TextInput source="quantity" />
        <TextInput source="shortDesc" />
        <TextInput source="longDesc" />
        <TextInput source="loveDesc" />
        <TextInput source="stroageInfo" />
        <TextInput source="category" />
        <TextInput source="vegan" />
        <TextInput source="lowcarb" />
        <TextInput source="pic1" />
        <TextInput source="pic2" />
        <TextInput source="pic3" />
      </SimpleForm>
    </Edit>
  );

  export const ProductsCreate = (props) => (
    <Create {...props}>
          <SimpleForm>
      <TextInput source="id" />
        <TextInput source="header" />
        <TextInput source="rating" />
        <TextInput source="price" />
        <TextInput source="salePrice" />
        <TextInput source="quantity" />
        <TextInput source="shortDesc" />
        <TextInput source="longDesc" />
        <TextInput source="loveDesc" />
        <TextInput source="stroageInfo" />
        <TextInput source="category" />
        <TextInput source="vegan" />
        <TextInput source="lowcarb" />
        <TextInput source="pic1" />
        <TextInput source="pic2" />
        <TextInput source="pic3" />
      </SimpleForm>
    </Create>
  );

