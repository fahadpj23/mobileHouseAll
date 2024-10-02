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
  return (
    <div className="rounded-lg p-1 bg-whiteBackground w-full h-full ">
      <table className="w-full">
        <tr>
          {tableHead?.map((head) => (
            <th className="text-sm p-2">{head.title}</th>
          ))}
        </tr>
        {tableData?.map((tableData: any) => (
          <tr className="text-center ">
            {tableHead?.map((head) => {
              return (
                <td className="border-b-1 text-xs p-2">
                  {tableData[head.key]}
                </td>
              );
            })}
          </tr>
        ))}
      </table>
    </div>
  );
};
export default ListTable;
