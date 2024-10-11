import CustomSelectBox from "./customSelectBox";
import CustomTextField from "./customTextField";
import CustomFileUpload from "./customFileUpload";

const DynamiceFormCreate = () => {
  const formDetails = [
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

  const handleSubmit = (event: any) => {
    event.preventDefault();
    const data = new FormData(event.target);
    console.log(data);
  };
  return (
    <div className="w-96 h-96 fixed right-10  top-3 bg-whiteBackground space-y-4 p-2">
      <form onSubmit={handleSubmit}>
        {formDetails?.map((item, key) => {
          switch (item.type) {
            case "input":
              return <CustomTextField label={item.label} type={item.type} />;
            case "select":
              return (
                <CustomSelectBox label={item.label} options={item.options} />
              );
          }
        })}
        <CustomFileUpload />
        <button className="bg-red-300" type="submit">
          submit
        </button>
      </form>
    </div>
  );
};
export default DynamiceFormCreate;
