import React from 'react';
import PropTypes from 'prop-types';
import Menu from '../menu/Menu';
import Sidebar from '../sidebar/Sidebar';
import Navbar from '../navbar/Navbar';
import Footer from '../footer/Footer';

const proptypes = {
    children: PropTypes.object,
};

const Layout = ({ children }) => (
    <>
        <Menu />
        <div className="lg:container lg:mx-auto mx-3 grid grid-cols-12 lg:gap-10 lg:mt-[220px] mb-7">
            <div className="lg:sticky top-44 col-span-12 lg:col-span-4 lg:h-screen">
                <Sidebar />
            </div>
            <div className="col-span-12 lg:col-span-8">
                <Navbar />
                <div className="bg-[#212425] p-5 border border-white">
                    <main>{children}</main>
                </div>
                <Footer />
            </div>
        </div>
    </>
);

Layout.propTypes = proptypes;

export default Layout;
