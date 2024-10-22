import ListTable from "components/commonComponents/table";
import MiniDetailCard from "components/commonComponents/miniDetailCard";
import SubHeadingWithIcon from "components/commonComponents/subHeadingWithIcon";
import PurchaseTableHead from "constants/purchaseTableHead";

const DashBoard = () => {
  const tableData = [
    {
      invoiceNo: 12,
      invoiceDate: "12-05-2024",
      supplier: "ABC",
      amount: 10000,
    },
    {
      invoiceNo: 13,
      invoiceDate: "12-05-2024",
      supplier: "ABC",
      amount: 10000,
    },
    {
      invoiceNo: 14,
      invoiceDate: "12-05-2024",
      supplier: "ABC",
      amount: 10000,
    },
  ];

  const DetailTable = ({
    TableHeadRow,
    TableDataRow,
    title,
    icon,
    link,
  }: any) => (
    <div className="mt-5 w-[48%]">
      <SubHeadingWithIcon
        icon={icon?.toString()}
        title={title}
        linkSrc={link}
      />
      <div className="h-[25vh]">
        <ListTable
          tableHead={TableHeadRow}
          tableData={TableDataRow}
          pageName="dashBoard"
        />
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
      <div className="flex justify-between ">
        <DetailTable
          TableHeadRow={PurchaseTableHead}
          TableDataRow={tableData}
          title="Purchase"
          icon={"ShoppingCartOutlined"}
          link="/purchase"
        />
        <DetailTable
          TableHeadRow={PurchaseTableHead}
          TableDataRow={tableData}
          title="Sales"
          icon="ArticleOutlined"
          link="/sales"
        />
      </div>
      <div className="flex justify-between">
        <DetailTable
          TableHeadRow={PurchaseTableHead}
          TableDataRow={tableData}
          title="Inventory"
          icon="ArticleOutlined"
          link="/inventory"
        />
        <DetailTable
          TableHeadRow={PurchaseTableHead}
          TableDataRow={tableData}
          title="Customers"
          icon="PeopleAltOutlined"
          link="/customers"
        />
      </div>
    </div>
  );
};
export default DashBoard;
