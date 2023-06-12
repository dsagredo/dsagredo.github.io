import React from 'react';
import PropTypes from 'prop-types';
import Menu from '../menu/Menu';
import Sidebar from '../sidebar/Sidebar';
import Navbar from '../navbar/Navbar';

const proptypes = {
    children: PropTypes.object,
};

const Layout = ({ children }) => (
    <>
        <Menu />
        <div className="lg:container mx-auto grid grid-cols-12 lg:gap-10 lg:mt-[220px]">
            <div className="lg:sticky top-44 col-span-12 lg:col-span-4 lg:h-screen">
                <Sidebar />
            </div>
            <div className="col-span-12 lg:col-span-8">
                <Navbar />
                <div className="bg-[#212425] p-5 border border-white">
                    <main>{children}</main>
                </div>
            </div>
        </div>
    </>
);

Layout.propTypes = proptypes;

export default Layout;
