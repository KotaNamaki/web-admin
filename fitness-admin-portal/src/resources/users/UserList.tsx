import {
  List,
  Datagrid,
  TextField,
  EmailField,
  EditButton,
  DeleteButton,
  DateField,
  Pagination
} from 'react-admin';

const UserPagination = () => <Pagination rowsPerPageOptions={[10, 20, 50, 100]} />;

export const UserList = () => (
    <List perPage={20} pagination={<UserPagination />}>
      <Datagrid rowClick="edit">
        <TextField source="id" />
        <TextField source="nama" label="Name" />
        <EmailField source="email" />
        <TextField source="role" />
        <TextField source="propinsi" label="Province" />
        <TextField source="kota" label="City" />
        <DateField source="created_at" showTime />
        <EditButton />
        <DeleteButton />
      </Datagrid>
    </List>
);
