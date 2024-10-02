import ListTable from "components/commonComponents/table";
import MiniDetailCard from "components/commonComponents/miniDetailCard";
import SubHeadingWithIcon from "components/commonComponents/subHeadingWithIcon";
import PurchaseTableHead from "constants/purchaseTableHead";

const DashBoard = () => {
  const tableData = [
    {
      invoiceNo: 12,
      invoiceDate: "12-05-2024",
      seller: "ABC",
      amount: 10000,
    },
    {
      invoiceNo: 13,
      invoiceDate: "12-05-2024",
      seller: "ABC",
      amount: 10000,
    },
    {
      invoiceNo: 14,
      invoiceDate: "12-05-2024",
      seller: "ABC",
      amount: 10000,
    },
  ];

  const DetailTable = ({ TableHeadRow, TableDataRow, title, icon }: any) => (
    <div className="mt-5 w-[45%]">
      <SubHeadingWithIcon icon={icon?.toString()} title={title} />
      <div className="h-[25vh]">
        <ListTable tableHead={TableHeadRow} tableData={TableDataRow} />
      </div>
    </div>
  );

  return (
    <div className="space-y-4 overflow-x-hidden">
      <SubHeadingWithIcon
        icon={"EqualizerOutlined"}
        title="Business OverView"
      />
      <div className="flex justify-evenly">
        <MiniDetailCard />
      </div>
      <div className="flex space-x-3 ">
        <DetailTable
          TableHeadRow={PurchaseTableHead}
          TableDataRow={tableData}
          title="Purchase"
          icon={"ShoppingCartOutlined"}
        />
        <DetailTable
          TableHeadRow={PurchaseTableHead}
          TableDataRow={tableData}
          title="Sales"
          icon="ArticleOutlined"
        />
      </div>
      <div className="flex space-x-3">
        <DetailTable
          TableHeadRow={PurchaseTableHead}
          TableDataRow={tableData}
          title="Inventory"
          icon="ArticleOutlined"
        />
        <DetailTable
          TableHeadRow={PurchaseTableHead}
          TableDataRow={tableData}
          title="Inventory"
          icon="PeopleAltOutlined"
        />
      </div>
    </div>
  );
};
export default DashBoard;
