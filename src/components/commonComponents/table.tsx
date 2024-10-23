import { FC, useContext, useState } from "react";
import React from "react";

import Popup from "reactjs-popup";
import "reactjs-popup/dist/index.css";

import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { deleteEntity, getEntityById } from "slice/crudSlice";
import { useAppDispatch } from "store";
import { BillingContext } from "context/billingContext";
import DynamiceFormCreate from "./dynamicFormCreate";
import { getAddFormDetails } from "utils/getAddFormDetails";

interface tableHeadValue {
  key: string;
  title: string;
}
interface props {
  tableHead: tableHeadValue[];
  tableData: any;
  pageName: string;
}
const ListTable: FC<props> = ({ tableHead, tableData, pageName }) => {
  const appDispatch = useAppDispatch();
  const billingContext = useContext(BillingContext);
  const [anchorEl, setAnchorEl] = React.useState<HTMLButtonElement | null>(
    null
  );
  const [editId, setEditId] = useState<number>();

  const handleDelete = (deleteId: number) =>
    appDispatch(deleteEntity({ pageName, deleteId }));

  const handleEdit = (id: number) => {
    billingContext?.handleFormModal();
    setEditId(id);
  };
  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;

  return (
    <div className="rounded-lg p-1 bg-whiteBackground w-full h-full ">
      <table className="w-full border-collapse">
        <thead>
          <tr>
            {tableHead?.map((head) => (
              <th key={head.key} className="text-sm p-2">
                {head.title}
              </th>
            ))}
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {tableData?.map((tableData: any, key: number) => (
            <tr key={key} className="text-center ">
              {tableHead?.map((head, key1: number) => {
                return (
                  <td key={key1} className="border-b-1 text-xs p-5 ">
                    {tableData[head.key]}
                  </td>
                );
              })}
              <td>
                <Popup
                  contentStyle={{ width: "80px" }}
                  trigger={
                    <button>
                      <MoreVertIcon sx={{ fontSize: 20 }} />
                    </button>
                  }
                  position="bottom right"
                >
                  <div className="flex flex-col space-y-3">
                    <button
                      onClick={() => handleEdit(tableData?.id)}
                      className="flex space-x-1 items-center"
                    >
                      <EditIcon sx={{ fontSize: 16 }} />
                      <h1 className="text-sm">edit</h1>
                    </button>
                    <button
                      onClick={() => handleDelete(tableData?.id)}
                      className="flex space-x-1 items-center"
                    >
                      <DeleteIcon sx={{ fontSize: 16 }} />
                      <h1 className="text-sm">delete</h1>
                    </button>
                  </div>
                </Popup>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      {editId && billingContext?.modalOpen && (
        <DynamiceFormCreate
          editId={editId}
          pageName={pageName}
          formFieldDetails={getAddFormDetails(pageName)}
          handleModal={billingContext.handleFormModal}
          modalOpen={billingContext?.modalOpen}
        />
      )}
    </div>
  );
};
export default ListTable;
