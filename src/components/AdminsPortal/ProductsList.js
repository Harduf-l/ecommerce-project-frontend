import { List, Datagrid, TextField, ImageField, EditButton 
,ReferenceInput,SelectInput, TextInput, SimpleForm, Edit
} from 'react-admin';


const productFilters = [
    <TextInput source="q" label="Search" alwaysOn />,
];





export const ProductsList = props => (
    <List  filters={productFilters} {...props}>
        <Datagrid>
            <TextField source="id" />
            <TextField source="title" />
            <EditButton />
        </Datagrid>
    </List>
);


export const ProductsEdit = (props) => (
    <Edit {...props}>
      <SimpleForm>
      <TextInput source="id" />
        <TextInput source="title" />
      </SimpleForm>
    </Edit>
  );
