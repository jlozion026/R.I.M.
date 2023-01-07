import React, {FC} from "react";
import './style.css';
import ActLogsCategories from "./components/ActLogCards";
import { actLogsProps } from "./components/ActLogCards/utils";
import NavBar from "@/components/Navbar";
import BtnLogs from "./components/BtnLogs";
import InputField from "@/components/InputField";
import {IoIosSearch} from "react-icons/io";
import { BiArrowBack } from "react-icons/bi";
import { Link } from "react-router-dom";



const Logs: FC = () => {
    return(
        <div className= "mainGrid">
            <div className="navContainer">
                 <div className="navCont">
                    <NavBar cardSize="nav--bar"/>
                 </div>
             </div>

                <div className="categorieswrap">
                    <div className="topwrapper">
                    <div className="searchBarCon">
                    <InputField
                    placeholder="Search here"
                    label={""}
                    type={"text"}
                    auto={false}
                    name={"searchBar"}
                    forinput={""}
                    id={"searchBar"}
                    required={false}
                    getData={""}
                    readonly={false}/>
                    <span >
                    <IoIosSearch className="searchIcon"/> 
                    </span>
                    </div>
                    </div> 
                    
                    <div className="mobilesearchwrapper">
                            <div className="mobiletopwrapper">
                                 <div className="mobilesearchBarCon">
                                     <span >
                                        <Link to="/Dashboard"> 
                                        <BiArrowBack  className="backIcon" /></Link>
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
                                            getData={""}
                                            readonly={false}/>
                                            <span >
                                            <IoIosSearch className="mobilesearchIcon"/> 
                                            </span>

                                    </div> 
                                </div>
                        </div>

                    <div className="logsbuttons">
                    <BtnLogs />
                    </div>
                    
                </div>
              
             
                <div className="MapCards"> 
                {actLogsProps.map((val,key)=> {
                    return(
                        <div className="actLogContainer" key={key}>
                             <ActLogsCategories
                             cardIcon={val.cardIcon}
                             cardSize={val.cardSize}
                             city={val.city}
                             address={val.address}
                             />
                        </div>
                         );

                     })}
                
             </div> 
            
           
            
        

        
           </div> )

}
export default Logs;