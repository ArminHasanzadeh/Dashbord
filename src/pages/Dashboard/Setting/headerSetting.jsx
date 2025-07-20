import React from 'react';
import { Link, useLocation } from "react-router-dom";
import { useState } from "react";

function HeaderSetting(props) {
    const [open, setOpen] = useState(false);
           const location = useLocation()
          
          console.log(location.pathname == "/SettingEdit", "location.pathname");
    return (
        
        <header className='w-full h-[10%] flex justify-start items-center border-b-2 pt-5'>
            <ul className='w-[30%] h-full flex justify-center items-center gap-10'>
                <li className={`cursor-pointer transition-all border-b-2 border-transparent w-[20%] flex justify-center items-center hover:text-[var(--CardColor)] hover:border-b-2 hover:border-[var(--CardColor)] ${location.pathname === "/settings" ? "!border-[var(--CardColor)] !border-b-2 " : ""}`}>
                    <p><Link to="/settings" className={`w-full h-full  ${location.pathname === "/settings" ? "!text-[var(--HoverColor)] " : ""}`} >Edit Profile</Link></p>
                </li>
                <li  className={`cursor-pointer transition-all border-b-2 border-transparent w-[20%] flex justify-center items-center hover:text-[var(--CardColor)] hover:border-b-2 hover:border-[var(--CardColor)] ${location.pathname === "/settings/preferences" ? "!border-[var(--CardColor)] !border-b-2 " : ""}`}>
                    <p><Link to="/settings/preferences" className={`w-full h-full  ${location.pathname === "/settings/preferences" ? "!text-[var(--HoverColor)] " : ""}`} >Preferences</Link></p>
                </li>
                <li   className={`cursor-pointer transition-all border-b-2 border-transparent w-[20%] flex justify-center items-center hover:text-[var(--CardColor)] hover:border-b-2 hover:border-[var(--CardColor)] ${location.pathname === "/settings/security" ? "!border-[var(--CardColor)] !border-b-2 " : ""}`}>
                    <p><Link to="/settings/security" className={`w-full h-full  ${location.pathname === "/settings/security" ? "!text-[var(--HoverColor)] " : ""}`} >Security</Link></p>
                </li>
            </ul>
        </header>
        
    );
}

export default HeaderSetting;