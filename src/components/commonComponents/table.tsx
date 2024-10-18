import { FC } from "react";
import React from "react";

import Popup from "reactjs-popup";
import "reactjs-popup/dist/index.css";

import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import MoreVertIcon from "@mui/icons-material/MoreVert";

interface tableHeadValue {
  key: string;
  title: string;
}
interface props {
  tableHead: tableHeadValue[];
  tableData: any;
}
const ListTable: FC<props> = ({ tableHead, tableData }) => {
  const [anchorEl, setAnchorEl] = React.useState<HTMLButtonElement | null>(
    null
  );

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
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
                    <button className="flex space-x-1 items-center">
                      <EditIcon sx={{ fontSize: 16 }} />
                      <h1 className="text-sm">edit</h1>
                    </button>
                    <button className="flex space-x-1 items-center">
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
    </div>
  );
};
export default ListTable;
