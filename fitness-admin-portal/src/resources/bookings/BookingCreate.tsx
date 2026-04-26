import {
  Create,
  SimpleForm,
  ReferenceInput,
  SelectInput
} from 'react-admin';

export const BookingCreate = () => (
  <Create>
    <SimpleForm>
      <ReferenceInput source="session_id" reference="sessions">
        <SelectInput optionText="title" />
      </ReferenceInput>
      <ReferenceInput source="member_id" reference="users" filter={{ role: 'customer' }}>
        <SelectInput optionText="nama" label="Member" />
      </ReferenceInput>
      <SelectInput source="status" defaultValue="Pending" choices={[
        { id: 'Pending', name: 'Pending' },
        { id: 'Confirmed', name: 'Confirmed' },
        { id: 'Cancel', name: 'Cancel' },
      ]} />
    </SimpleForm>
  </Create>
);
