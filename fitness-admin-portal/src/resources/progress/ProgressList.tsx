import {
  List,
  Datagrid,
  TextField,
  ReferenceField,
  DateField,
  DeleteButton,
  NumberField
} from 'react-admin';

export const ProgressList = () => (
  <List perPage={20}>
    <Datagrid>
      <TextField source="id" />
      <ReferenceField source="member_id" reference="users" label="Member">
        <TextField source="nama" />
      </ReferenceField>
      <TextField source="activity" />
      <NumberField source="duration" label="Duration (min)" />
      <TextField source="note" />
      <DateField source="jam_nyatat" label="Recorded At" showTime />
      <DeleteButton />
    </Datagrid>
  </List>
);
