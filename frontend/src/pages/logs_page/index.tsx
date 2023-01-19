import { FC, ChangeEvent, useEffect, useState } from "react";

import useDebounce from './hooks/useDebounce'

import {
  GetAllReportsByTypeQuery,
  useGetAllReportsByTypeQuery,
  GetAllReportsByDescOrderQuery,
  useGetAllReportsByDescOrderQuery,
  GetAllReportsByAscOrderQuery,
  useGetAllReportsByAscOrderQuery,
  GetAllSearchResultQuery,
  useGetAllSearchResultQuery,

  ReportType
} from "@/generated/graphql";

import graphqlRequestClient from "@/lib/client/graphqlRequestClient";

import ActLogsCategories from "./components/ActLogCards";
import NavBar from "@/components/Navbar";
import BtnLogs from "./components/BtnLogs";
import InputField from "@/components/InputField";

import { IoIosSearch } from "react-icons/io";
import { BiArrowBack } from "react-icons/bi";


import Loader from "@/components/Loader";

import { Link, useLocation } from "react-router-dom";

import { getIcon } from '@/lib/getIcon'
import { stringToEnum } from '@/lib/stringToEnum'


import { INewReports } from './models'


import useOnclickOutside from "react-cool-onclickoutside";
import { addAddressAndPlusCode } from './utils'
import './style.css';

import { getToken } from "@/lib/auth";
import SearchResults from "./components/SearchResults";


const Logs: FC = () => {
  const [modReports, setModReports] = useState<INewReports>([]); //modified reports
  const [loadAddr, setLoadAddr] = useState(true);
  const [searchString, setSearchString] = useState<string>('');
  const [searchClick, setSearchClick] = useState<boolean>(false);

  const debouncedVal = useDebounce(searchString, 200);

  const [reportTypeQuery, setReportTypeQuery] = useState<string>('');

  const { state } = useLocation(); // stores the data passed by previous route

  // sets the reportTypeQuery when the component mounted
  useEffect(() => {
    setReportTypeQuery(state.type)
  }, []);

  graphqlRequestClient.setHeader('authorization', `bearer ${getToken()}`) // set authorization token

  const { isLoading } = useGetAllReportsByTypeQuery<GetAllReportsByTypeQuery, Error>(
    graphqlRequestClient, {
    reportType: stringToEnum(reportTypeQuery, ReportType)
  }, {
    refetchOnWindowFocus: false,
    onSuccess: async (data: GetAllReportsByTypeQuery) => {
      const report_arr = data.reports;
      const new_arr = await addAddressAndPlusCode(report_arr, setLoadAddr);
      setModReports(new_arr)
    },
  });

  // query reports by descending order
  const { refetch: fetch_report_desc } = useGetAllReportsByDescOrderQuery<
    GetAllReportsByDescOrderQuery,
    Error>
    (
      graphqlRequestClient, {},
      {
        enabled: false,
        refetchOnWindowFocus: false,
        onSuccess: async (data: GetAllReportsByDescOrderQuery) => {
          const report_arr = data.reports;
          const new_arr = await addAddressAndPlusCode(report_arr, setLoadAddr);
          setModReports(new_arr)
        },
      });

  const { data: searchResults  } = useGetAllSearchResultQuery<GetAllSearchResultQuery, Error>(
    graphqlRequestClient, {
    searchString: debouncedVal
  }, {
    refetchOnMount: false,
  }
  );

  // query reports by ascending order
  const { refetch: fetch_report_asc } = useGetAllReportsByAscOrderQuery<
    GetAllReportsByAscOrderQuery,
    Error>
    (
      graphqlRequestClient, {},
      {
        enabled: false,
        refetchOnWindowFocus: false,
        onSuccess: async (data: GetAllReportsByDescOrderQuery) => {
          const report_arr = data.reports;
          const new_arr = await addAddressAndPlusCode(report_arr, setLoadAddr);
          setModReports(new_arr)
        },
      });


  // call back function for buttons
  const trigFetch = (btnID: string) => {
    if (btnID === "Recent") fetch_report_desc();
    else if (btnID === "Oldest") fetch_report_asc();
    else {
      setReportTypeQuery(btnID);
    }

  }

  const getSearch = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchString(e.target.value);
  };

  const ref = useOnclickOutside(() => {
    setSearchClick(!searchClick);
    setSearchString("");
  });

  return (
    <div className="logsmainGrid">
      <div className="logsnavContainer">
        <div className="logsnavCont">
          <NavBar cardSize="nav--bar" />
        </div>
      </div>

      <div className="categorieswrap">
        <div className="logstopwrapper">
          <div
            className="searchBarCon"
            onClick={() => setSearchClick(!searchClick)}
            ref={ref} >

            <InputField
              placeholder={"Search"}
              type={"text"}
              auto={false}
              name={"searchBar"}
              id={"searchBar"}
              required={false}
              getData={getSearch}
              value={searchString}
              readonly={false} />
            <span >
              <IoIosSearch className="searchIcon" />
            </span>
            {searchClick ?
              <SearchResults searchData={searchResults?.reports} />
              : null
            }
          </div>
        </div>

        <div className="mobilesearchwrapper">
          <div className="mobiletopwrapper">
            <div className="mobilesearchBarCon">
              <span >
                <Link to="/Dashboard">
                  <BiArrowBack className="backIcon" /></Link>
              </span>
              <InputField
                placeholder="Search here"
                label={""}
                type={"text"}
                auto={false}
                name={"searchBar"}
                forinput={""}
                id={"searchBar"}
                required={false}
                getData={getSearch}
                readonly={false} />
              <span >
                <IoIosSearch className="mobilesearchIcon" />
              </span>

            </div>
          </div>
        </div>

        <div className="logsbuttons">
          <BtnLogs TrigFetch={trigFetch} />
        </div>

      </div>
      <div className="MapCards">
        {loadAddr && !isLoading ?
          <Loader />
          :
          modReports.length > 0 ?
            modReports.map((val, key) => {
              return (
                <div className="actLogContainer" key={key}>
                  <ActLogsCategories
                    reportID={val.report_id}
                    cardIcon={getIcon(val.report_type)}
                    cardSize={"card"}
                    city={val.form_addr}
                    address={val.plus_code as string}
                  />
                </div>
              );

            })
            :
            <h1 className="logs-warning">No {state.type.replace(/([A-Z])/g, " $1").trim()} Reports Available</h1>
        }
      </div>
    </div>)

}
export default Logs;
