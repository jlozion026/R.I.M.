import { FC } from 'react';

import { ISearchResults } from './models';
import { getIcon } from '@/lib/getIcon'

import { useNavigate } from "react-router-dom";

import './styles.css';

const SearchResults: FC<ISearchResults> = ({ searchData }) => {

  const navigate = useNavigate();

  const change_page = (reportID: string) => {
    navigate("/info", {
      state: {
        type: reportID
      }
    })
  }
  const truncateString = (word: string, maxLength: number): string => {
    if (word.length > maxLength) {
      return word.substring(0, maxLength) + "...";
    }
    return word
  }

  return (
    <ul className='search-results'>
      {searchData ? searchData?.slice(0, 6).map((report, key) => {
        return (
          <li className="search-item" key={key} onClick={() => change_page(report.report_id)}>
            <img src={getIcon(report.report_type)} alt="icon" />
            {truncateString(report.description, 22)}
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
