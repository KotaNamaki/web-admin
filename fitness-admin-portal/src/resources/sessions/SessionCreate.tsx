import {
  Create,
  SimpleForm,
  TextInput,
  ReferenceInput,
  SelectInput,
  DateTimeInput,
  NumberInput
} from 'react-admin';

export const SessionCreate = () => (
  <Create>
    <SimpleForm>
      <TextInput source="title" fullWidth />
      <TextInput source="deskripsi" multiline fullWidth />
      <ReferenceInput source="trainer_id" reference="users" filter={{ role: 'trainer' }}>
        <SelectInput optionText="nama" label="Trainer" />
      </ReferenceInput>
      <DateTimeInput source="start_time" />
      <DateTimeInput source="end_time" />
      <NumberInput source="price" />
      <SelectInput source="status" defaultValue="scheduled" choices={[
        { id: 'scheduled', name: 'Scheduled' },
        { id: 'ongoing', name: 'Ongoing' },
        { id: 'completed', name: 'Completed' },
        { id: 'cancelled', name: 'Cancelled' },
      ]} />
    </SimpleForm>
  </Create>
);
