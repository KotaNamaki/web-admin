import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { Card, CardContent, CardHeader } from '@mui/material';

const BookingStats = ({ statusDistribution }: { statusDistribution: any[] }) => {
    const data = statusDistribution.map(item => ({
        name: item.status,
        bookings: item.count
    }));

    const displayData = data.length > 0 ? data : [
        { name: 'Pending', bookings: 0 },
        { name: 'Confirmed', bookings: 0 },
        { name: 'Cancel', bookings: 0 },
    ];

    return (
        <Card className="shadow-sm border-slate-200">
            <CardHeader
                title="Booking Status Breakdown"
                titleTypographyProps={{ variant: 'subtitle1', fontWeight: 700, className: 'text-slate-800' }}
            />
            <CardContent sx={{ height: 300 }}>
                <ResponsiveContainer width="100%" height="100%">
                    <BarChart data={displayData}>
                        <CartesianGrid strokeDasharray="3 3" vertical={false} />
                        <XAxis dataKey="name" axisLine={false} tickLine={false} />
                        <YAxis axisLine={false} tickLine={false} />
                        <Tooltip
                             contentStyle={{ borderRadius: '8px', border: 'none', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)' }}
                        />
                        <Bar dataKey="bookings" fill="#2563eb" radius={[4, 4, 0, 0]} />
                    </BarChart>
                </ResponsiveContainer>
            </CardContent>
        </Card>
    );
};

export default BookingStats;
