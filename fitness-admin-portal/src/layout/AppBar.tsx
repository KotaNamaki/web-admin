import React, { forwardRef } from 'react';
import { AppBar, UserMenu, Logout, useGetIdentity, MenuItemLink } from 'react-admin';
import { Typography, Box } from '@mui/material';
import { UserCircle } from 'lucide-react';

const ConfigurationMenu = forwardRef((props, ref) => {
    const { identity } = useGetIdentity();
    return (
        <MenuItemLink
            ref={ref}
            to={`/users/${identity?.id}`}
            primaryText="My Profile"
            leftIcon={<UserCircle size={18} />}
            {...props}
        />
    );
});

const MyUserMenu = () => (
    <UserMenu>
        <ConfigurationMenu />
        <Logout />
    </UserMenu>
);

const MyAppBar = (props: any) => (
    <AppBar
        {...props}
        elevation={0}
        userMenu={<MyUserMenu />}
        sx={{
            backgroundColor: '#ffffff',
            color: '#0f172a',
            borderBottom: '1px solid #e2e8f0',
            '& .RaAppBar-toolbar': {
                minHeight: 64,
            }
        }}
    >
        <Typography
            variant="h6"
            color="inherit"
            sx={{
                flex: 1,
                textOverflow: 'ellipsis',
                whiteSpace: 'nowrap',
                overflow: 'hidden',
                fontWeight: 700,
                fontSize: '1.25rem',
                letterSpacing: '-0.025em',
            }}
            id="react-admin-title"
        />
    </AppBar>
);

export default MyAppBar;
