import React, { useEffect } from 'react';
import Head from 'next/head';
import AOS from 'aos';
import PropTypes from 'prop-types';
import Layout from '@/components/layouts/Layout';
import '@/styles/globals.css';
import 'aos/dist/aos.css';

const proptypes = {
    Component: PropTypes.func,
    pageProps: PropTypes.object,
};
export default function App({ Component, pageProps }) {
    useEffect(() => {
        AOS.init({
            duration: 1200,
        });
    }, []);

    return (
        <>
            <Head>
                <title>Diego Sagredo | Front-end Developer</title>
            </Head>
            <Layout>
                <Component {...pageProps} />
            </Layout>
        </>
    );
}

App.propTypes = proptypes;
