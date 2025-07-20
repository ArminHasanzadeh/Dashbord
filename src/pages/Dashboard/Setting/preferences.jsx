import React, { useState } from "react";
import { Switch } from "../../../../components/ui/switch";
import HeaderSetting from "./headerSetting";
import { Input } from "../../../../components/ui/input";

function Preferences(props) {
 const [on, setOn] = useState(false);
 const [on2, setOn2] = useState(false);
 const [on3, setOn3] = useState(false);
  const activeBg = "bg-[var(--SwitchColor)]";
  return (
    <div className="w-[100%] h-[55vh] bg-white rounded-2xl">
      <HeaderSetting />
      <div className="flex flex-col ">
        <div className="w-full h-[40vh] flex justify-center items-start pt-5">
          <div className="w-[45%] h-auto flex gap-3 flex-col ">
            <div className="w-[80%] h-auto gap-3 flex-col flex justify-center items-start">
              <p>Currency</p>
              <Input type="name" placeholder="USD"  className='h-12'/>
            </div>
            <div className=" flex-col text-2xl flex justify-center items-start gap-5">
              <h3 className="text-[var(--TextColor)]">Notification</h3>
              <div className=" w-full h-auto flex gap-3">
                <button
                  onClick={() => setOn(!on)}
                  className={`w-20 h-10 rounded-full transition-colors duration-300 ${
                    on ? activeBg : "bg-gray-300"
                  }`}
                >
                  <div
                    className={`h-8 w-8 bg-white rounded-full shadow-md transform transition-transform duration-300 ${
                      on ? "translate-x-10" : "translate-x-1"
                    }`}
                  />
                </button>
                <p>I send or receive digita currency</p>
              </div>
              <div className=" w-full h-auto flex gap-3">
                <button
                  onClick={() => setOn2(!on2)}
                  className={`w-20 h-10 rounded-full transition-colors duration-300 ${
                    on2 ? activeBg : "bg-gray-300"
                  }`}
                >
                  <div
                    className={`h-8 w-8 bg-white rounded-full shadow-md transform transition-transform duration-300 ${
                      on2 ? "translate-x-10" : "translate-x-1"
                    }`}
                  />
                </button>
                <p>I receive merchant order</p>
              </div>
              <div className=" w-full h-auto flex gap-3">
                <button
                  onClick={() => setOn3(!on3)}
                  className={`w-20 h-10 rounded-full transition-colors duration-300 ${
                    on3 ? activeBg : "bg-gray-300"
                  }`}
                >
                  <div
                    className={`h-8 w-8 bg-white rounded-full shadow-md transform transition-transform duration-300 ${
                      on3 ? "translate-x-10" : "translate-x-1"
                    }`}
                  />
                </button>
                <p>There are recommendation for my account</p>
              </div>
           
           
            </div>
          </div>
          <div className="w-[45%] h-auto ">
            <div className="w-[80%] h-auto gap-3  flex justify-center items-start flex-col">
              <p>Time Zone</p>
              <Input type="name" placeholder="(GMT-12:00) International Date Line West" className='h-12' />
            </div>
          </div>
        </div>
        <div className="w-[94%] h-[10vh] flex justify-end items-start pr-10 ">
          <button className="transition-all w-[15%] h-[60%] rounded-2xl bg-[var(--CardColor)] text-[20px] text-white text-center  hover:bg-[var(--HoverColor)]">
            Save
          </button>
        </div>
      </div>
    </div>
  );
}

export default Preferences;
