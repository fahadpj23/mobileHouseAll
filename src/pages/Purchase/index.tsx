import DetailsPage from "components/commonComponents/detailsPage";

const Purchase = () => {
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
      <DetailsPage formFieldDetails={formFieldDetails} />
    </div>
  );
};
export default Purchase;
