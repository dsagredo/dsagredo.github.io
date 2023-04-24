import React from 'react';
import PropTypes from 'prop-types';
import '@/styles/globals.css';
import Layout from '@/components/layouts/Layout';

const proptypes = {
    Component: PropTypes.func,
    pageProps: PropTypes.func,
};
export default function App({ Component, pageProps }) {
    return (
        <Layout>
            <Component {...pageProps} />
        </Layout>
    );
}

App.propTypes = proptypes;
