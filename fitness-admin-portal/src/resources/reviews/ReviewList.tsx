import {
  List,
  Datagrid,
  TextField,
  ReferenceField,
  NumberField,
  DateField,
  DeleteButton
} from 'react-admin';

export const ReviewList = () => (
  <List perPage={20}>
    <Datagrid>
      <TextField source="id" />
      <ReferenceField source="session_id" reference="sessions">
        <TextField source="title" />
      </ReferenceField>
      <ReferenceField source="member_id" reference="users" label="Member">
        <TextField source="nama" />
      </ReferenceField>
      <NumberField source="rating_score" label="Rating" />
      <TextField source="comment" />
      <DateField source="datetime_created" label="Reviewed At" showTime />
      <DeleteButton />
    </Datagrid>
  </List>
);
