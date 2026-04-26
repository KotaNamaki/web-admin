import React from 'react';
import { Layout, Sidebar } from 'react-admin';
import AppBar from './AppBar';
import Menu from './Menu';

const MySidebar = (props: any) => (
    <Sidebar 
        {...props} 
        sx={{
            '& .MuiDrawer-paper': {
                backgroundColor: '#0f172a',
                color: '#94a3b8',
                borderRight: 'none',
                width: 256,
            },
            '& .RaSidebar-fixed': {
                width: 256,
            }
        }}
    />
);

export const MyLayout = (props: any) => (
    <Layout 
        {...props} 
        appBar={AppBar} 
        sidebar={MySidebar}
        menu={Menu}
        sx={{
            '& .RaLayout-content': {
                backgroundColor: '#f8fafc',
                padding: '2rem !important',
            }
        }}
    />
);

export default MyLayout;
