import React from 'react';
import { Box, Typography } from '@mui/material';

interface StatusBadgeProps {
    status: string;
    type?: 'success' | 'warning' | 'error' | 'info' | 'default';
}

const StatusBadge = ({ status, type = 'default' }: StatusBadgeProps) => {
    const getColors = () => {
        switch (type) {
            case 'success': return { bg: '#ecfdf5', text: '#059669' };
            case 'warning': return { bg: '#fffbeb', text: '#d97706' };
            case 'error': return { bg: '#fef2f2', text: '#dc2626' };
            case 'info': return { bg: '#eff6ff', text: '#2563eb' };
            default: return { bg: '#f1f5f9', text: '#475569' };
        }
    };

    const colors = getColors();

    return (
        <Box sx={{
            display: 'inline-flex',
            px: 1.5,
            py: 0.5,
            borderRadius: '9999px',
            backgroundColor: colors.bg,
            color: colors.text,
            fontSize: '0.75rem',
            fontWeight: 700,
            textTransform: 'uppercase',
            letterSpacing: '0.025em'
        }}>
            {status}
        </Box>
    );
};

export default StatusBadge;
