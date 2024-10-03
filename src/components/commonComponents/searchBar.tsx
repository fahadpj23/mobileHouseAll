import SearchIcon from "@mui/icons-material/Search";

const SearchBar = () => {
  return (
    <div className="w-full flex justify-end">
      <div className="p-2 flex bg-whiteBackground rounded-lg my-2 w-56 justify-end  ">
        <input
          type="text"
          placeholder="search"
          className="focus:outline-none"
        />
        <SearchIcon />
      </div>
    </div>
  );
};
export default SearchBar;
