import React, { FC, ChangeEvent, useState } from "react";
import './style.css';
import { credentials } from "./models";
import { LoginProps } from "./utils";
import InputField from "../../components/InputField";
import Button from "../../components/Button";
import wave from "../../Assets/svg/wave.svg";
import things from "../../Assets/svg/things.svg";
import QCLOGO from "../../Assets/svg/QCLOGO.svg";


const SignIn: FC = () => {

  const [errMsg, setErrMsg] = useState("");
  const [data, setData] = useState<credentials>({
        email: "",
        password: "",
    })

  const getCred = (val: ChangeEvent<HTMLInputElement>) => {
    setData({
      ...data,
      [val.target.name]: val.target.value
    })
  }


  const valicred = {
    email:"test@gmail.com",
    password:"testpass123"
  }

  
  const onSubmit = (e: React.FormEvent<HTMLFormElement>) =>{
        e.preventDefault();
        if(data.email === valicred.email && data.password === valicred.password) {
           setErrMsg("");
           console.log(data);
        }else{
            setErrMsg("*Wrong Email or Password!");
        }
        
    }

  return(
      <div className="main-grid">
          <div className="login-container">
                    <div className="wrap-container">
                        <div className="title"><h1>LOGIN</h1></div>
                            <form className="login" onSubmit={e => onSubmit(e)}>
                                {LoginProps.map((val, key)=>{return(
                                    <div className="wrapper" key={key}>
                                        <InputField 
                                        label = {val.label}
                                        id = {val.id}
                                        forinput = {val.forinput}
                                        type = {val.type}
                                        placeholder = {val.place_holder}
                                        name = {val.name}
                                        auto = {val.auto}
                                        getData = {getCred}
                                        required />
                                        <div className="validation">*Required</div>
                                    </div>                          
                                );})}
                                
                                {errMsg ? <div className="err">{errMsg}</div> : ""}

                                <div className="check-container">
                                    <input type="checkbox" />
                                    <label>Remember me</label>
                                </div>
                                <div className="btn-container">
                                    <Button
                                    type={"submit"}
                                    buttonStyle={"btn--primary"}
                                    onClick={onSubmit}
                                    buttonSize={"btn--medium"} 
                                    children={"Login"} ></Button>
                                </div>
                            </form>
                        </div>
                    </div>
            <div className="wave-container"><img src={wave} alt="test" /></div>
            <div className="svg-container">
                <div className="header"><img src={QCLOGO} alt="logo" /></div>
                <div className="svg"><img src={things} alt="hello" /></div>
          </div>
        </div>
  );
}

export default SignIn;
