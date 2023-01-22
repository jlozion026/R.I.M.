import { FC, ChangeEvent, useEffect, useState, useMemo } from "react";

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
import { GiNextButton } from 'react-icons/gi';


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
import Button from "@/components/Button";
import { btnType } from '@/components/Button/models';


const Logs: FC = () => {
  const [modReports, setModReports] = useState<INewReports>([]); //modified reports

  const [loadAddr, setLoadAddr] = useState(true);
  const [searchString, setSearchString] = useState<string>('');
  const [searchClick, setSearchClick] = useState<boolean>(false);

  const [page, setPage] = useState<number>(0);

  const debouncedVal = useDebounce(searchString, 200);

  const [reportTypeQuery, setReportTypeQuery] = useState<string>('');

  const { state } = useLocation(); // stores the data passed by previous route


  graphqlRequestClient.setHeader('authorization', `bearer ${getToken()}`) // set authorization token

  const { isLoading, isFetching } = useGetAllReportsByTypeQuery<GetAllReportsByTypeQuery, Error>(
    graphqlRequestClient, {
    reportType: stringToEnum(reportTypeQuery, ReportType),
    take: 5,
    skip: page,
  }, {
    refetchOnWindowFocus: false,
    keepPreviousData: true,
    onSuccess: async (data: GetAllReportsByTypeQuery) => {
      const report_arr = data.reports;
      const new_arr = await addAddressAndPlusCode(report_arr, setLoadAddr);
      setModReports(new_arr as INewReports);
    },
  });

  const { data: searchResults } = useGetAllSearchResultQuery<GetAllSearchResultQuery, Error>(
    graphqlRequestClient, {
    searchString: debouncedVal
  }, {
    refetchOnMount: false,
  }
  );

  // query reports by descending order
  const { data: descData, isStale: descIsStale, refetch: fetch_report_desc } = useGetAllReportsByDescOrderQuery<
    GetAllReportsByDescOrderQuery,
    Error>
    (
      graphqlRequestClient, {},
      {
        staleTime: 10000,
        refetchOnWindowFocus: false,
      });



  // query reports by ascending order
  const { data: ascData, isStale, refetch: fetch_report_asc } = useGetAllReportsByAscOrderQuery<
    GetAllReportsByAscOrderQuery,
    Error>
    (
      graphqlRequestClient, {},
      {
        staleTime: 10000,
        refetchOnWindowFocus: false,
      });

  //memomized ascending data
  //const transform_asc_data = useMemo(async () => await addAddressAndPlusCode(
  //  ascData?.reports as ArrReports,
  //  setLoadAddr
  //), [ascData])

  //const transform_desc_data = useMemo(async () => await addAddressAndPlusCode(
  //  descData?.reports as ArrReports,
  //  setLoadAddr
  //), [descData])


  // call back function for buttons
  const trigFetch = async (btnID: string) => {
    if (btnID === "Recent") {
      console.log("recent");
    }
    else if (btnID === "Oldest") {
      if (!isStale) {
        console.log("oldest")
      }
      else {
        console.log("oldest")
      }
    }
    else {
      setReportTypeQuery(btnID);
    }
    setPage(0);
  }

  // sets the reportTypeQuery when the component mounted
  useEffect(() => {
    setReportTypeQuery(state.type)
  }, []);

  const getSearch = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchString(e.target.value);
  };

  const ref = useOnclickOutside(() => {
    setSearchClick(false);
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
            onClick={() => setSearchClick(true)}
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
        <div className="page-btns">
          {page !== 0 ?
            <Button
              type={btnType.Button}
              onClick={() => setPage(page - 5)}
            >
              Previous
            </Button>
            : null
          }
          {
            modReports.length > 0 ?

              <Button
                type={btnType.Button}
                onClick={() => setPage(page + 5)}
              >
                Next
              </Button>
              : null
          }

        </div>
        {isFetching}
      </div>
    </div>)

}
export default Logs;
