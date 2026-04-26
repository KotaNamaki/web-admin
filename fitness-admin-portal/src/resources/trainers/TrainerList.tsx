import {
  List,
  Datagrid,
  TextField,
  EmailField,
  EditButton,
  DeleteButton,
  DateField
} from 'react-admin';

export const TrainerList = () => (
  <List perPage={20}>
    <Datagrid rowClick="edit">
      <TextField source="id" />
      <TextField source="nama" label="Name" />
      <EmailField source="email" />
      <TextField source="propinsi" label="Province" />
      <TextField source="kota" label="City" />
      <DateField source="created_at" showTime />
      <EditButton />
      <DeleteButton />
    </Datagrid>
  </List>
);
