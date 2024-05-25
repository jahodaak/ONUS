import * as React from "react";
import { List, Datagrid, ListProps, DateField, TextField } from "react-admin";
import Pagination from "../Components/Pagination";

export const BroadcastList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"Broadcasts"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
        <DateField source="createdAt" label="Created At" />
        <TextField label="endTime" source="endTime" />
        <TextField label="ID" source="id" />
        <TextField label="startTime" source="startTime" />
        <TextField label="status" source="status" />
        <TextField label="title" source="title" />
        <DateField source="updatedAt" label="Updated At" />
      </Datagrid>
    </List>
  );
};
