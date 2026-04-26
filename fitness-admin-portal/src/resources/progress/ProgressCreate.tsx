import {
  Create,
  SimpleForm,
  TextInput,
  ReferenceInput,
  SelectInput,
  NumberInput
} from 'react-admin';

export const ProgressCreate = () => (
  <Create>
    <SimpleForm>
      <ReferenceInput source="member_id" reference="users" filter={{ role: 'customer' }}>
        <SelectInput optionText="nama" label="Member" />
      </ReferenceInput>
      <TextInput source="activity" />
      <NumberInput source="duration" label="Duration (min)" />
      <TextInput source="note" multiline />
      <ReferenceInput source="booking_id" reference="bookings">
        <SelectInput optionText="id" />
      </ReferenceInput>
    </SimpleForm>
  </Create>
);
