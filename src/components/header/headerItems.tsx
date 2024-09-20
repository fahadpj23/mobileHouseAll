import Headers from "@constants/headers";
const HeaderItems = () => {
  return (
    <div>
      <div className="flex justify-between">
        {Headers.map((header, key) => {
          return <h1>{header.Name}</h1>;
        })}
      </div>
    </div>
  );
};
export default HeaderItems;
