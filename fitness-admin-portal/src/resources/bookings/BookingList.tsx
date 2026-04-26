import {
  List,
  Datagrid,
  TextField,
  ReferenceField,
  DateField,
  EditButton,
  DeleteButton
} from 'react-admin';

export const BookingList = () => (
  <List perPage={20}>
    <Datagrid rowClick="edit">
      <TextField source="id" />
      <ReferenceField source="session_id" reference="sessions">
        <TextField source="title" />
      </ReferenceField>
      <ReferenceField source="member_id" reference="users" label="Member">
        <TextField source="nama" />
      </ReferenceField>
      <TextField source="status" />
      <DateField source="datetime_created" label="Booked At" showTime />
      <EditButton />
      <DeleteButton />
    </Datagrid>
  </List>
);
