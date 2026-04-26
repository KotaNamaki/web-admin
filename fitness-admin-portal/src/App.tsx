import { Admin, Resource, defaultTheme } from 'react-admin';
import { dataProvider } from './providers/dataProvider';
import { authProvider } from './auth/authProvider';
import users from './resources/users';
import sessions from './resources/sessions';
import bookings from './resources/bookings';
import progress from './resources/progress';
import reviews from './resources/reviews';
import trainers from './resources/trainers';
import Dashboard from './dashboard/Dashboard';
import { MyLayout } from './layout/Layout';
import LoginPage from './auth/LoginPage';

const myTheme = {
    ...defaultTheme,
    palette: {
        primary: {
            main: '#2563eb', // blue-600
        },
        secondary: {
            main: '#64748b', // slate-500
        },
        background: {
            default: '#f8fafc', // slate-50
            paper: '#ffffff',
        },
        text: {
            primary: '#1e293b', // slate-800
            secondary: '#64748b', // slate-500
        },
    },
    typography: {
        fontFamily: '"Inter", sans-serif',
        h6: {
            fontWeight: 700,
        },
    },
    components: {
        ...defaultTheme.components,
        MuiButton: {
            styleOverrides: {
                root: {
                    textTransform: 'none',
                    fontWeight: 600,
                    borderRadius: 8,
                },
            },
        },
        MuiCard: {
            styleOverrides: {
                root: {
                    borderRadius: 12,
                    boxShadow: '0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1)',
                    border: '1px solid #e2e8f0',
                },
            },
        },
        RaMenuItemLink: {
            styleOverrides: {
                root: {
                    borderRadius: 8,
                    margin: '2px 8px',
                    padding: '10px 12px',
                    color: '#94a3b8',
                    '&:hover': {
                        backgroundColor: '#1e293b',
                    },
                    '&.RaMenuItemLink-active': {
                        backgroundColor: 'rgba(37, 99, 235, 0.1)',
                        color: '#60a5fa',
                        border: '1px solid rgba(37, 99, 235, 0.2)',
                    },
                },
            },
        },
    }
};

export default function App() {
  return (
    <Admin
      dataProvider={dataProvider}
      authProvider={authProvider}
      dashboard={Dashboard}
      theme={myTheme}
      layout={MyLayout}
      loginPage={LoginPage}
    >
      <Resource
        name="users"
        {...users}
        options={{ label: 'Members' }}
      />
      <Resource
        name="trainers"
        {...trainers}
      />
      <Resource
        name="sessions"
        {...sessions}
      />
      <Resource
        name="bookings"
        {...bookings}
      />
      <Resource
        name="progress"
        {...progress}
      />
      <Resource
        name="reviews"
        {...reviews}
      />
    </Admin>
  );
}
