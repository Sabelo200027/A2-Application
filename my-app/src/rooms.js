import { Datagrid, DateField, List, ReferenceField, TextField, NumberField, EditButton } from "react-admin";

export const RoomList = () => (
    <List>
        <Datagrid rowClick="edit">
            <TextField source="id"/>
            <NumberField source="Room-Number"/>
            <TextField source="Room_Type" />
            <DateField source="created"/>
            <DateField source="updated"/>
        <EditButton/>
        </Datagrid>
    </List>
);