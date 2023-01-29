import { FC, ChangeEvent, useEffect, useState, useCallback } from "react";

import useDebounce from '@/lib/useDebounce';

import {
  PaginatedGetAllReportsByTypeQuery,
  usePaginatedGetAllReportsByTypeQuery,
  GetAllReportsByAscOrderQuery,
  useGetAllReportsByAscOrderQuery,
  GetAllReportsByDescOrderQuery,
  useGetAllReportsByDescOrderQuery,
  GetAllSearchResultQuery,
  useGetAllSearchResultQuery,

  ReportType
} from "@/generated/graphql";

import graphqlRequestClient from "@/lib/client/graphqlRequestClient";

import ActLogsCategories from "./components/ActLogCards";
import NavBar from "@/components/Navbar";
import BtnLogs from "./components/BtnLogs";
import InputField from "@/components/InputField";

import PageButtons from "./components/PageBtn";

import { IoIosSearch } from "react-icons/io";
import { BiArrowBack } from "react-icons/bi";

import Loader from "@/components/Loader";

import { Link, useLocation } from "react-router-dom";

import { getIcon } from '@/lib/getIcon'
import { getToken } from "@/lib/auth";
import { stringToEnum } from '@/lib/stringToEnum'

import SearchResults from "./components/SearchResults";

import { INewReports, ArrReports } from './models'


import useOnclickOutside from "react-cool-onclickoutside";


import './style.css';

const Logs: FC = () => {
  const [modReports, setModReports] = useState<ArrReports>([]); //modified reports

  const [loadAddr, setLoadAddr] = useState(true);
  const [searchString, setSearchString] = useState<string>('');
  const [searchClick, setSearchClick] = useState<boolean>(false);

  const [page, setPage] = useState<number>(0);
  const [orderPage, setOrderPage] = useState<number>(0);

  const debouncedVal = useDebounce(searchString, 200);

  const [reportTypeQuery, setReportTypeQuery] = useState<string>('');
  const [typeOrder, setTypeOrder] = useState<string>('');

  const { state } = useLocation(); // stores the data passed by previous route


  graphqlRequestClient.setHeader('authorization', `bearer ${getToken()}`) // set authorization token

  const { data: reportData, isLoading, isFetching } = usePaginatedGetAllReportsByTypeQuery<PaginatedGetAllReportsByTypeQuery, Error>(
    graphqlRequestClient, {
    reportType: stringToEnum(reportTypeQuery, ReportType),
    take: 5,
    skip: page,
  }, {
    refetchOnWindowFocus: false,
    keepPreviousData: true,
    onSuccess: async (data: PaginatedGetAllReportsByTypeQuery) => {
      const report_arr = data.reports;
      setLoadAddr(false);
      setModReports(report_arr as INewReports);
    },
  });

  const { data: searchResults } = useGetAllSearchResultQuery<GetAllSearchResultQuery, Error>(
    graphqlRequestClient, {
    searchString: debouncedVal
  }, {
    refetchOnMount: false,
  }
  );

  // query reports by ascending order
  const { refetch: refetchAsc } = useGetAllReportsByAscOrderQuery<
    GetAllReportsByAscOrderQuery,
    Error>
    (
      graphqlRequestClient, {
      take: 5,
      skip: orderPage,
    },
      {
        //staleTime: 1 * (60 * 1000), // 1 min refresh time
        enabled: false,
        refetchOnWindowFocus: false,
        keepPreviousData: true,
        onSuccess: async (data: GetAllReportsByAscOrderQuery) => {
          const report_arr = data.reports;
          setModReports(report_arr as INewReports);

        },
      });

  // query reports by descending order
  const { refetch: refetchDesc } = useGetAllReportsByDescOrderQuery<
    GetAllReportsByDescOrderQuery,
    Error>
    (
      graphqlRequestClient, {
      take: 5,
      skip: orderPage,
    },
      {
        enabled: false,
        refetchOnWindowFocus: false,
        keepPreviousData: true,
        onSuccess: async (data: GetAllReportsByDescOrderQuery) => {
          setModReports(data.reports as INewReports);

        },
      });

  useEffect(() => {
    if(typeOrder == "Recent"){
      refetchDesc()
    }
    else if(typeOrder == "Oldest"){
      refetchAsc();
    }
  }, [orderPage])


  // call back function for buttons
  const trigFetch = async (btnID: string) => {
    if (btnID === "Recent") {
      setTypeOrder(btnID);
      setLoadAddr(true);
      refetchDesc();
      setLoadAddr(false);
      setOrderPage(0);
    }
    else if (btnID === "Oldest") {
      setTypeOrder(btnID);
      setLoadAddr(true);
      refetchAsc();
      setLoadAddr(false);
      setOrderPage(0);
    }
    else {
      setTypeOrder("");
      setReportTypeQuery(btnID);
      setModReports(reportData?.reports as ArrReports);
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



      <div className="logscategorieswrap">
        <div className="logstopwrapper">
          <div
            className="searchBarCon"
            onClick={() => setSearchClick(true)}
            ref={ref} >

            <span >

              <Link to="/Dashboard">
                <BiArrowBack className="backIcon" /></Link>

            </span>

            <InputField
              placeholder={"Search here"}
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
              <ul className="logs-search-results">
                <SearchResults searchData={searchResults?.reports} />
              </ul>
              : null
            }
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
                    city={val.location.addresses.general_address}
                    address={val.location.addresses.from}
                  />
                </div>
              );

            })
            :
            <h1 className="logs-warning">No {reportTypeQuery.replace(/([A-Z])/g, " $1").trim()} Reports Available</h1>
        }
      </div>
      <div className="page-btns">
        <PageButtons
          orderPage={orderPage}
          page={page}
          setPage={setPage}
          setOrderPage={setOrderPage}
          typeOrder={typeOrder}
          length={modReports.length}
        />

      </div>
      {isFetching}

    </div>)
}
export default Logs;
