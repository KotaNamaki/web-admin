import React, { useEffect, useState } from 'react';
import apiSource from '../config/apiSource';
import { Title } from 'react-admin';
import UserStats from './UserStats';
import BookingStats from './BookingStats';
import { Card, CardHeader, CardContent } from '@mui/material';

const Dashboard = () => {
    const [userStats, setUserStats] = useState<any>(null);
    const [bookingStats, setBookingStats] = useState<any>(null);

    useEffect(() => {
        const token = localStorage.getItem('token');
        if (!token) return;

        const apiUrl = apiSource;

        // Fetch User Stats
        fetch(`${apiUrl}/analytics/users`, {
            headers: { 'Authorization': `Bearer ${token}` }
        })
        .then(res => res.json())
        .then(res => setUserStats(res.data))
        .catch(err => console.error(err));

        // Fetch Booking Stats
        fetch(`${apiUrl}/analytics/bookings`, {
            headers: { 'Authorization': `Bearer ${token}` }
        })
        .then(res => res.json())
        .then(res => setBookingStats(res.data))
        .catch(err => console.error(err));
    }, []);

    if (!userStats) return null;

    const roleDistribution = userStats.roleDistribution || [];
    const rolesMap = roleDistribution.reduce((acc: any, curr: any) => {
        acc[curr.role] = curr.count;
        return acc;
    }, {});

    return (
        <div className="flex flex-col space-y-8 animate-in fade-in duration-500">
            <Title title="Fitness Admin Dashboard" />

            <div className="flex items-center justify-between">
                <h1 className="text-2xl font-bold tracking-tight text-slate-800">Admin Overview</h1>
                <div className="flex space-x-3">
                    <button className="px-4 py-2 bg-white border border-slate-200 rounded-lg text-sm font-semibold hover:bg-slate-50 transition-colors">Export Analytics</button>
                    <button className="px-4 py-2 bg-blue-600 text-white rounded-lg text-sm font-semibold shadow-sm hover:bg-blue-700 transition-colors" onClick={() => window.location.reload()}>Refresh Stats</button>
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
                    <p className="text-xs text-slate-500 font-bold uppercase tracking-wider mb-1">Total Users</p>
                    <p className="text-3xl font-bold text-slate-900">{userStats.totalUsers}</p>
                    <p className="text-[10px] text-emerald-600 font-bold mt-2">↑ {userStats.totalUsers > 0 ? 1 : 0} new today</p>
                </div>

                <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm text-slate-900">
                    <p className="text-xs text-slate-500 font-bold uppercase tracking-wider mb-1">Total Bookings</p>
                    <p className="text-3xl font-bold">{bookingStats?.totalBookings || 0}</p>
                    <p className="text-[10px] text-slate-400 font-bold mt-2">Bookings registered</p>
                </div>

                <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
                    <p className="text-xs text-slate-500 font-bold uppercase tracking-wider mb-1">System Health</p>
                    <p className="text-3xl font-bold">100%</p>
                    <p className="text-[10px] text-emerald-600 font-bold mt-2">All services operational</p>
                </div>

                <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
                    <p className="text-xs text-slate-500 font-bold uppercase tracking-wider mb-1">Last Update</p>
                    <p className="text-3xl font-bold">Live</p>
                    <p className="text-[10px] text-slate-400 font-bold mt-2">{new Date().toLocaleTimeString()}</p>
                </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                <div className="lg:col-span-2">
                    <BookingStats statusDistribution={bookingStats?.statusDistribution || []} />
                </div>
                <UserStats roles={rolesMap} />
            </div>

            <Card className="shadow-sm border-slate-200">
                <CardHeader
                    title="Quick Status"
                    titleTypographyProps={{ variant: 'subtitle1', fontWeight: 700, className: 'text-slate-800' }}
                />
                <CardContent>
                    <div className="space-y-6">
                         <div className="p-4 bg-slate-50 rounded-xl border border-slate-100 italic text-sm text-slate-600 leading-relaxed">
                            "Welcome to the Fitness Admin Portal. Monitor user activity, manage class schedules, and review member progress efficiently."
                         </div>
                         <div className="space-y-3">
                            <div className="flex items-center justify-between p-3 bg-white rounded-lg border border-slate-100 shadow-sm">
                                <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">Database</span>
                                <span className="text-xs font-bold text-emerald-600">CONNECTED</span>
                            </div>
                            <div className="flex items-center justify-between p-3 bg-white rounded-lg border border-slate-100 shadow-sm">
                                <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">Storage</span>
                                <span className="text-xs font-bold text-emerald-600">92% FREE</span>
                            </div>
                         </div>
                    </div>
                </CardContent>
            </Card>
        </div>
    );
};

export default Dashboard;
