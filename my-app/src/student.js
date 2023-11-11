import { BooleanField, Datagrid, DateField, List, ReferenceField, TextField, ShowButton, Show, SimpleShowLayout, EditButton, Create, CreateButton } from "react-admin";

export const StudentList = () => (
    <List>
        <Datagrid rowClick="edit">
            <ReferenceField source="StudentId" reference="Student" />
            <TextField source="id"/>
            <TextField source="username" />
            <DateField source="created"/>
            <DateField source="updated"/>
            <BooleanField source="emailVisibility"/>
            <BooleanField source="verified"/>
        <ShowButton/>
        </Datagrid>
    </List>
);

export const StudentShow = () => (
    <Show>
       <SimpleShowLayout>
            <ReferenceField source= "StudentId" reference="Student" />
            <TextField source="id"/>
            <TextField source="username" />
            <DateField source="created"/>
            <DateField source="updated"/>
            <BooleanField source="emailVisibility"/>
            <BooleanField source="verified"/>
        <ShowButton/>
        </SimpleShowLayout>
    </Show>
);

export const StudentCreate = () => (
    <Create>
        <Datagrid rowClick="create">
            <ReferenceField source="StudentId" reference="Student" />
            <TextField source="id"/>
            <TextField source="username" />
            <DateField source="created"/>
            <DateField source="updated"/>
            <BooleanField source="emailVisibility"/>
            <BooleanField source="verified"/>
        <CreateButton/>
        </Datagrid>
    </Create>
);
