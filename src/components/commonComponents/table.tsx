import { FC } from "react";

interface tableHeadValue {
  key: string;
  title: string;
}
interface props {
  tableHead: tableHeadValue[];
  tableData: any;
}
const ListTable: FC<props> = ({ tableHead, tableData }) => {
  console.log(tableData);
  return (
    <div className="rounded-lg p-1 bg-whiteBackground w-full h-full ">
      <table className="w-full">
        <thead>
          <tr>
            {tableHead?.map((head) => (
              <th key={head.key} className="text-sm p-2">
                {head.title}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {tableData?.map((tableData: any, key: number) => (
            <tr key={key} className="text-center ">
              {tableHead?.map((head, key1: number) => {
                return (
                  <td key={key1} className="border-b-1 text-xs p-2">
                    {tableData[head.key]}
                  </td>
                );
              })}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
export default ListTable;
