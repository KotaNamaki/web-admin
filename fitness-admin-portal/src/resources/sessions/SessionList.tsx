import {
  List,
  Datagrid,
  TextField,
  ReferenceField,
  DateField,
  NumberField,
  EditButton,
  DeleteButton
} from 'react-admin';

export const SessionList = () => (
  <List perPage={20}>
    <Datagrid rowClick="edit">
      <TextField source="id" />
      <TextField source="title" />
      <ReferenceField source="trainer_id" reference="users">
        <TextField source="nama" />
      </ReferenceField>
      <DateField source="start_time" showTime />
      <DateField source="end_time" showTime />
      <NumberField source="price" options={{ style: 'currency', currency: 'IDR' }} />
      <TextField source="status" />
      <EditButton />
      <DeleteButton />
    </Datagrid>
  </List>
);
