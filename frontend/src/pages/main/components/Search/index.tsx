import { ChangeEvent, FC } from 'react';

import usePlacesAutocomplete, { getGeocode, getLatLng } from 'use-places-autocomplete'

import useOnclickOutside from "react-cool-onclickoutside";

import { MdOutlinePinDrop } from 'react-icons/md'

import { ISearch } from './models'

import './style.css'


import InputField from '@/components/InputField';

const Search: FC<ISearch> = ({
  SetCoordinates,
  SetPlace,
  Name,
  PlaceHolder,
  Label
}) => {

  const {
    value,
    suggestions: { status, data },
    setValue,
    clearSuggestions,
  } = usePlacesAutocomplete({
    debounce: 300,
  });

  const ref = useOnclickOutside(() => {
    // When user clicks outside of the component, we can dismiss
    // the searched suggestions by calling this method
    clearSuggestions();
  });

  const handleInput = (e: ChangeEvent<HTMLInputElement>) => { setValue(e.target.value); };

  const handleSelect = ({ description }: google.maps.places.AutocompletePrediction) =>
    () => {
      // When user selects a place, we can replace the keyword without request data from API
      // by setting the second parameter to "false"
      SetPlace(description);
      setValue(description, false);
      clearSuggestions();

      // Get latitude and longitude via utility functions
      getGeocode({ address: description }).then((results) => {
        const { lat, lng } = getLatLng(results[0]);
        SetCoordinates({ lat, lng })
      });
    };

  const renderSuggestions = () =>
    data.map((suggestion) => {
      const {
        place_id,
        structured_formatting: { main_text, secondary_text },
      } = suggestion;

      return (
        <li className='search-item' key={place_id} onClick={handleSelect(suggestion)}>
          <MdOutlinePinDrop />
          <div className="search-word">
            <strong>{main_text}</strong> 
            <small>{secondary_text}</small>
          </div>
        </li>
      );
    });


  return (
    <div className='search-cont' ref={ref}>
      <InputField
        type={"text"}
        label={Label}
        name={Name}
        placeholder={PlaceHolder}
        getData={handleInput}
        value={value}
        auto={false}
        readonly={false}
        required={false}
        forinput={""}
        id={""}
      />
      {/* We can use the "status" to decide whether we should display the dropdown or not */}
      {status === "OK" && <ul className='search-results'>{renderSuggestions()}</ul>}
    </div>
  );
}
export default Search;
