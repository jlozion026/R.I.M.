import { FC } from 'react';

import { ISearchResults } from './models';
import { getIcon } from '@/lib/getIcon'

import './styles.css';
import { truncateString } from '@/lib/truncateString';
import { useNavigate } from 'react-router-dom';

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
    <>
      {searchData ? searchData?.slice(0, 6).map((report, key) => {
        return (
          <li className="main-search-item" key={key} onClick={() => change_page(report.report_id)}>
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
