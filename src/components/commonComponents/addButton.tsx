import DynamiceFormCreate from "./dynamicFormCreate";

const AddButton = () => {
  return (
    <>
      <div className="bg-green-600 text-white p-2 rounded-md font-semibold">
        <button>Add+</button>
      </div>
      <DynamiceFormCreate />
    </>
  );
};
export default AddButton;
