const SupplierAddForm = [
  {
    id: "name",
    label: "name",
    type: "text",
    allowNull: true,
  },
  {
    id: "address",
    label: "Address",
    type: "text",
    allowNull: false,
    multiline: true,
  },
  {
    id: "phone",
    label: "Phone Number",
    type: "number",
    allowNull: false,
  },
];
export default SupplierAddForm;
