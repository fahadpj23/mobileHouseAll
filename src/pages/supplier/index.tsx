import DetailsPage from "components/commonComponents/detailsPage";

const Supplier = () => {
  const formFieldDetails = [
    {
      label: "name",
      type: "text",
      allowNull: true,
    },
    {
      label: "Address",
      type: "text",
      allowNull: false,
      multiline: true,
    },
    {
      label: "Phone Number",
      type: "number",
      allowNull: false,
    },
  ];
  return (
    <div>
      <DetailsPage formFieldDetails={formFieldDetails} />
    </div>
  );
};
export default Supplier;
