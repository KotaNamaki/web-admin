import React from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip } from 'recharts';
import { Card, CardContent, CardHeader } from '@mui/material';

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

const UserStats = ({ roles }: { roles: any }) => {
    const roleData = Object.keys(roles).map(role => ({
        name: role,
        value: Number(roles[role])
    }));

    const displayData = roleData.length > 0 ? roleData : [
        { name: 'customer', value: 0 },
        { name: 'trainer', value: 0 },
        { name: 'admin', value: 0 },
    ];

    return (
        <Card className="shadow-sm border-slate-200">
            <CardHeader
                title="User Distribution"
                titleTypographyProps={{ variant: 'subtitle1', fontWeight: 700, className: 'text-slate-800' }}
            />
            <CardContent sx={{ height: 320 }}>
                <ResponsiveContainer width="100%" height="100%" minHeight={1}>
                    <PieChart>
                        <Pie
                            data={displayData}
                            cx="50%"
                            cy="50%"
                            innerRadius={70}
                            outerRadius={100}
                            paddingAngle={5}
                            dataKey="value"
                            animationBegin={0}
                            animationDuration={1500}
                        >
                            {displayData.map((entry, index) => (
                                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                            ))}
                        </Pie>
                        <Tooltip
                            contentStyle={{ borderRadius: '8px', border: 'none', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)' }}
                        />
                    </PieChart>
                </ResponsiveContainer>
                <div className="flex justify-center space-x-6 mt-4">
                    {displayData.map((entry, index) => (
                        <div key={entry.name} className="flex items-center space-x-2">
                            <div className="w-3 h-3 rounded-full" style={{ backgroundColor: COLORS[index % COLORS.length] }}></div>
                            <span className="text-xs font-semibold text-slate-600 capitalize">{entry.name}</span>
                        </div>
                    ))}
                </div>
            </CardContent>
        </Card>
    );
};

export default UserStats;
