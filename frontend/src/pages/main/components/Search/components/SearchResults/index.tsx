import { FC, useContext } from 'react';

import { MainContext } from "@/setup/context-manager/mainContext";
import { MainContextType } from "@/setup/context-manager/model";

import { ISearchResults } from './models';
import { getIcon } from '@/lib/getIcon'

import './styles.css';
import { truncateString } from '@/lib/truncateString';

const SearchResults: FC<ISearchResults> = ({ searchData }) => {

  const { mapRef } = useContext(MainContext) as MainContextType;

  return (
    <>
      {searchData ? searchData?.slice(0, 6).map((report, key) => {
        return (
          <li className="search-item" key={key} onClick={
            () => {
              mapRef.current?.panTo(report.location.origin)
              mapRef.current?.setZoom(18);
            }
          } >
            <img src={getIcon(report.report_type)} alt="icon" />
            {truncateString(report.location.addresses.general_address, 22)}
          </li>
        );

      })
        :
        null
      }
    </>

  )

}

export default SearchResults;
