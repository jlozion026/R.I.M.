import { ChangeEvent, FC, useContext } from "react";

import { MainContext } from "@/setup/context-manager/mainContext";
import { MainContextType } from "@/setup/context-manager/model";

import SearchResults from "./components/SearchResults";

import usePlacesAutocomplete, {
  getGeocode,
  getLatLng,
} from "use-places-autocomplete";

import useOnclickOutside from "react-cool-onclickoutside";

import { MdOutlinePinDrop } from "react-icons/md";

import { ISearch } from "./models";

import InputField from "@/components/InputField";
import { GoSearch } from "react-icons/go";
import { FiFilter } from "react-icons/fi";

import "./style.css";
import { GetAllSearchResultQuery, useGetAllSearchResultQuery } from "@/generated/graphql";
import graphqlRequestClient from "@/lib/client/graphqlRequestClient";
import { truncateString } from "@/lib/truncateString";

const Search: FC<ISearch> = ({ Name,
  PlaceHolder,
  Label,
  SetGenAdd,
  setTrigFilter,
  setFilterDate,
  resetFilter
}) => {
  const {
    value,
    suggestions: { status, data },
    setValue,
    clearSuggestions,
  } = usePlacesAutocomplete({
    debounce: 300,
  });

  const { data: searchResults } = useGetAllSearchResultQuery<GetAllSearchResultQuery, Error>(
    graphqlRequestClient, {
    searchString: value
  }, {
    refetchOnMount: false,
  }
  );
  const { mapRef } = useContext(MainContext) as MainContextType;

  const ref = useOnclickOutside(() => {
    // When user clicks outside of the component, we can dismiss
    // the searched suggestions by calling this method
    clearSuggestions();
    setValue("");
  });

  const handleInput = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  const handleSelect =
    ({ description }: google.maps.places.AutocompletePrediction) =>
      () => {
        // When user selects a place, we can replace the keyword without request data from API
        // by setting the second parameter to "false"
        SetGenAdd(description);
        setValue(description, false);
        clearSuggestions();

        // Get latitude and longitude via utility functions
        getGeocode({ address: description }).then((results) => {
          const { lat, lng } = getLatLng(results[0]);
          mapRef.current?.panTo({ lat, lng });
          mapRef.current?.setZoom(18);
        });
      };

  const renderSuggestions = () => {

    let res: string = "";
    return data.map((suggestion) => {
      const {
        place_id,
        structured_formatting: { main_text, secondary_text },
      } = suggestion;

      res = main_text + secondary_text

      return (
        <li
          className="main-search-item"
          key={place_id}
          onClick={handleSelect(suggestion)}
        >
          <p className="search-item-icon">
            <MdOutlinePinDrop />
          </p>
          <div className="search-word">
            {truncateString(res, 35)}
          </div>
        </li>
      );
    });
  }

  return (
    <div className="main-search-pos-cont">
      <div className="main-search-cont" ref={ref}>
        <InputField
          type={"text"}
          label={Label}
          name={Name}
          placeholder={PlaceHolder}
          getData={handleInput}
          value={value}
        />

        <span className="main-search-icon" onClick={() => {
          setTrigFilter()
          resetFilter()
          clearSuggestions()
        }}>
          <p>
            <GoSearch />
          </p>
        </span>
        <span className="main-filter-icon" onClick={() => {
          setTrigFilter()
          setFilterDate("")
          resetFilter()
          clearSuggestions()
        }}>
          <p>
            <FiFilter />
          </p>
        </span>
        {/* We can use the "status" to decide whether we should display the dropdown or not */}
        {status === "OK" ? (
          <ul className="main-search-results">
            <SearchResults searchData={searchResults?.reports} cbOnClick={SetGenAdd} setVal={setValue} />
            {renderSuggestions()}
          </ul>
        ) : null}
      </div>
    </div>
  );
};
export default Search;
