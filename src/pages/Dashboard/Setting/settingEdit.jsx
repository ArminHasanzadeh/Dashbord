import React from "react";
import { Switch } from "../../../../components/ui/switch";
import { Link, useLocation } from "react-router-dom";
import { useState } from "react";
import HeaderSetting from "./headerSetting";
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "../../../../components/ui/avatar";
import { Input } from "../../../../components/ui/input";


function SettingEdit(props) {
    const [open, setOpen] = useState(false);

 

  return (
    <div className="w-[100%] h-[75vh] bg-white rounded-2xl  max-lg:h-auto mb-20 ">
      <HeaderSetting />
      <div className="flex justify-center gap-20 items-center w-full h-[60vh] max-lg:flex-col max-lg:h-auto max-lg:gap-4">
        <div className="w-[15%] h-full flex ">
          <div className="flex justify-center items-start w-[100%] h-[40%] pt-10 relative max-lg:h-auto">
            <Avatar className={"w-40 h-40 "}>
              <AvatarImage src="https://github.com/shadcn.png" />
            </Avatar>
            <div className="absolute bottom-10 right-10 max-lg:bottom-0 max-lg:left-15">
              <span>
                <svg
                  width="30"
                  height="30"
                  viewBox="0 0 30 30"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle cx="15" cy="15" r="15" fill="#1814F3" />
                  <g clip-path="url(#clip0_112_404)">
                    <path
                      d="M22.5872 11.1632L21.2366 12.5138C21.0989 12.6515 20.8763 12.6515 20.7386 12.5138L17.4866 9.26184C17.3489 9.12415 17.3489 8.90149 17.4866 8.76379L18.8372 7.41321C19.385 6.86536 20.2757 6.86536 20.8265 7.41321L22.5872 9.17395C23.138 9.7218 23.138 10.6124 22.5872 11.1632ZM16.3265 9.92395L8.63309 17.6173L8.012 21.1769C7.92704 21.6573 8.34599 22.0734 8.82645 21.9913L12.386 21.3673L20.0794 13.674C20.2171 13.5363 20.2171 13.3136 20.0794 13.1759L16.8274 9.92395C16.6868 9.78626 16.4642 9.78626 16.3265 9.92395ZM11.636 16.9581C11.4749 16.797 11.4749 16.5392 11.636 16.3781L16.1477 11.8663C16.3089 11.7052 16.5667 11.7052 16.7278 11.8663C16.889 12.0275 16.889 12.2853 16.7278 12.4464L12.2161 16.9581C12.055 17.1193 11.7972 17.1193 11.636 16.9581ZM10.5784 19.422H11.9847V20.4855L10.095 20.8165L9.18388 19.9054L9.51493 18.0157H10.5784V19.422Z"
                      fill="white"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_112_404">
                      <rect
                        width="15"
                        height="15"
                        fill="white"
                        transform="translate(8 7)"
                      />
                    </clipPath>
                  </defs>
                </svg>
              </span>
            </div>
          </div>
        </div>
        <div className="w-[30%] h-full flex-col flex justify-center items-center gap-10 max-lg:w-[95%]">
          <div className="w-[90%] h-auto gap-3 flex-col flex justify-center items-start ">
            <p>Your Name</p>
            <Input type="name" placeholder="Name" />
          </div>
          <div className="w-[90%] h-auto gap-3 flex-col flex justify-center items-start">
            <p>Email</p>
            <Input type="email" placeholder="Email" />
          </div>
          <div className="w-[90%] h-auto gap-3 flex-col flex justify-center items-start">
            <p>Date of Birth</p>
            <Input type="date"  />
          </div>
          <div className="w-[90%] h-auto gap-3 flex-col flex justify-center items-start">
            <p>Permanent Address</p>
            <Input type="name" placeholder="San Jose, California, USA" />
          </div>
          <div className="w-[90%] h-auto gap-3 flex-col flex justify-center items-start">
            <p>Postal Code</p>
            <Input type="number" placeholder="45859" />
          </div>
        </div>
        <div className="w-[30%] h-full flex-col flex justify-center items-center gap-10 max-lg:w-[95%]">
          <div className="w-[90%] h-auto gap-3 flex-col flex justify-center items-start ">
            <p>User Name</p>
            <Input type="name" placeholder="Name" />
          </div>
          <div className="w-[90%] h-auto gap-3 flex-col flex justify-center items-start">
            <p>Password</p>
            <Input type="password" placeholder="************" />
          </div>
          <div className="w-[90%] h-auto gap-3 flex-col flex justify-center items-start">
            <p>Present Address</p>
            <Input type="name"  placeholder="San Jose, California, USA"  />
          </div>
          <div className="w-[90%] h-auto gap-3 flex-col flex justify-center items-start">
            <p>City</p>
            <Input type="name" placeholder="San Jose" />
          </div>
          <div className="w-[90%] h-auto gap-3 flex-col flex justify-center items-start">
            <p>Country</p>
            <Input type="name" placeholder="USA" />
          </div>
        </div>
        
      </div>
          <div className="w-[94%] h-[10vh] flex justify-end items-start pr-10  ">
            <button className="transition-all w-[15%] h-[60%] rounded-2xl bg-[var(--CardColor)] text-[20px] text-white text-center  hover:bg-[var(--HoverColor)] max-lg:w-[50%] max-lg:mt-5">Save</button>
          </div>
    </div>
  );
}

export default SettingEdit;
