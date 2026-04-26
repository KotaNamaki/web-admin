import {
  Edit,
  SimpleForm,
  TextInput,
  SelectInput
} from 'react-admin';

export const UserEdit = () => (
  <Edit>
    <SimpleForm>
      <TextInput source="nama" label="Name" />
      <TextInput source="email" />
      <SelectInput source="role" choices={[
        { id: 'admin', name: 'Admin' },
        { id: 'trainer', name: 'Trainer' },
        { id: 'customer', name: 'Customer' },
      ]} />
      <TextInput source="propinsi" label="Province" />
      <TextInput source="kota" label="City" />
    </SimpleForm>
  </Edit>
);
