import React from 'react';
import { Outlet } from 'react-router-dom';

function SettingLayout() {
    return (
        <section className='w-[100%] h-[90vh] bg-[var(--BgColor)] flex justify-center items-start p-8 '>
            
                 <Outlet />
            
        </section>
    );
}

export default SettingLayout;