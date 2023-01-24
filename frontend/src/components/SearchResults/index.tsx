import { FC } from 'react';

import { ISearchResults } from './models';
import { getIcon } from '@/lib/getIcon'

import { useNavigate } from "react-router-dom";

import './styles.css';
import { truncateString } from '@/lib/truncateString';

const SearchResults: FC<ISearchResults> = ({ searchData }) => {

  const navigate = useNavigate();

  const change_page = (reportID: string) => {
    navigate("/info", {
      state: {
        type: reportID
      }
    })
  }

  return (
    <ul className='search-results'>
      {searchData ? searchData?.slice(0, 6).map((report, key) => {
        return (
          <li className="search-item" key={key} onClick={() => change_page(report.report_id)}>
            <img src={getIcon(report.report_type)} alt="icon" />
            {truncateString(report.location.addresses.general_address, 22)}
          </li>
        );

      })
        :
        null
      }
    </ul>

  )

}

export default SearchResults;
