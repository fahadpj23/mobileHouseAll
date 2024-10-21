import DetailsPage from "components/commonComponents/detailsPage";

import CONSTANTVALUES from "constants/constantValues";

const Inventory = () => {
  const formFieldDetails = [
    {
      label: "name",
      type: "input",
      allowNull: true,
    },
    {
      label: "hsn",
      type: "input",
      allowNull: false,
    },
    {
      label: "category",
      type: "select",
      options: [
        {
          id: 1,
          label: "phone",
        },
        {
          id: 2,
          label: "accessories",
        },
      ],
    },
  ];
  return (
    <div className="">
      <DetailsPage pageName={CONSTANTVALUES.INVENTORY} />
    </div>
  );
};
export default Inventory;
