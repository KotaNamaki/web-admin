import {
  Edit,
  SimpleForm,
  SelectInput,
  ReferenceField,
  TextField
} from 'react-admin';

export const BookingEdit = () => (
  <Edit>
    <SimpleForm>
      <ReferenceField source="session_id" reference="sessions" link="show">
        <TextField source="title" />
      </ReferenceField>
      <ReferenceField source="member_id" reference="users" label="Member">
        <TextField source="nama" />
      </ReferenceField>
      <SelectInput source="status" choices={[
        { id: 'Pending', name: 'Pending' },
        { id: 'Confirmed', name: 'Confirmed' },
        { id: 'Cancel', name: 'Cancel' },
      ]} />
    </SimpleForm>
  </Edit>
);
