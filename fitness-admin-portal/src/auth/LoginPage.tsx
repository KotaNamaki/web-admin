import React, { useState } from 'react';
import { useLogin, useNotify, Notification } from 'react-admin';
import { Box, Card, CardContent, TextField, Button, Typography, Avatar } from '@mui/material';
import { Lock } from 'lucide-react';

const LoginPage = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const login = useLogin();
    const notify = useNotify();

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        login({ username, password }).catch(() =>
            notify('Invalid email or password')
        );
    };

    return (
        <Box
            sx={{
                display: 'flex',
                flexDirection: 'column',
                minHeight: '100vh',
                alignItems: 'center',
                justifyContent: 'center',
                background: 'linear-gradient(135deg, #0f172a 0%, #1e293b 100%)',
            }}
        >
            <Card sx={{ maxWidth: 400, width: '100%', borderRadius: 3, boxShadow: 10 }}>
                <CardContent sx={{ p: 4 }}>
                    <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', mb: 3 }}>
                        <Avatar sx={{ m: 1, bgcolor: '#2563eb', width: 56, height: 56 }}>
                            <Lock />
                        </Avatar>
                        <Typography variant="h5" component="h1" sx={{ fontWeight: 700, mt: 1 }}>
                            FitAdmin Pro
                        </Typography>
                        <Typography variant="body2" color="textSecondary">
                            Please sign in to continue
                        </Typography>
                    </Box>
                    <form onSubmit={handleSubmit}>
                        <TextField
                            label="Email"
                            variant="outlined"
                            fullWidth
                            margin="normal"
                            value={username}
                            onChange={e => setUsername(e.target.value)}
                        />
                        <TextField
                            label="Password"
                            type="password"
                            variant="outlined"
                            fullWidth
                            margin="normal"
                            value={password}
                            onChange={e => setPassword(e.target.value)}
                        />
                        <Button
                            type="submit"
                            variant="contained"
                            color="primary"
                            fullWidth
                            size="large"
                            sx={{ mt: 3, py: 1.5, fontWeight: 700 }}
                        >
                            Log In
                        </Button>
                    </form>
                    <Box sx={{ mt: 3, textAlign: 'center' }}>
                         <Typography variant="caption" color="textSecondary">
                            Demo: admin@example.com / password123
                         </Typography>
                    </Box>
                </CardContent>
            </Card>
            <Notification />
        </Box>
    );
};

export default LoginPage;
