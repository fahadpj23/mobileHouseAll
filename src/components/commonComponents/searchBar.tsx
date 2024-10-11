import SearchIcon from "@mui/icons-material/Search";

const SearchBar = () => {
  return (
    <>
      <input type="text" placeholder="search" className="focus:outline-none" />
      <SearchIcon />
    </>
  );
};
export default SearchBar;
