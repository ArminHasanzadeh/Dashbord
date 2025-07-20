import React, { useState } from "react";
import HeaderSetting from "./headerSetting";
import { Input } from "../../../../components/ui/input";
function Security(props) {
  const [on, setOn] = useState(false);
  const activeBg = "bg-[var(--SwitchColor)]";
  return (
    <div className="w-[100%] h-[55vh] bg-white rounded-2xl">
      <HeaderSetting />
      <div className="flex flex-col ">
        <div className="w-full h-[40vh] flex justify-center items-start pt-5">
          <div className="w-[45%] h-auto flex gap-3 flex-col ">
            <div className=" flex-col text-2xl flex justify-center items-start gap-5">
              <h3 className="text-[20px] text-[var(--TextColor)]">Two-factor Authentication</h3>
              <div className=" w-full h-auto flex gap-3 text-[16px] justify-start items-center">
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
                <p>Enable or disable two factor authentication</p>
              </div>
              <div>
                <h4 className="text-[20px] text-[var(--TextColor)]">Change Password</h4>
              </div>
                <div className="w-[90%] h-auto gap-3 flex-col flex justify-center items-start text-[16px]">
                  <p>Current Password</p>
                  <Input type="password" placeholder="************" />
                </div>
                <div className="w-[90%] h-auto gap-3 flex-col flex justify-center items-start text-[16px]">
                  <p>New Password</p>
                  <Input type="password" placeholder="************" />
                </div>
            </div>
          </div>
          <div className="w-[45%] h-auto "></div>
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

export default Security;
