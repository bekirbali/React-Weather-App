import { TextField } from "@mui/material";

const Search = ({ searcher, setCity, city }) => {
  return (
    <div>
      <form onSubmit={searcher}>
        <TextField
          id="outlined-basic"
          label="Search a City"
          variant="outlined"
          value={city}
          onChange={(e) =>
            setCity(
              e.target.value.charAt(0).toUpperCase() + e.target.value.slice(1)
            )
          }
        />
      </form>
    </div>
  );
};
export default Search;
