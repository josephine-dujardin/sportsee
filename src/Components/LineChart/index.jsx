import './linechart.css'
import React from "react";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip } from "recharts";
import { getData } from '../../API/GetData';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router';

export default function SimpleLineChart() {

    const [data, setData] = useState([]);
    const { id } = useParams();

    useEffect(() => {
        const data = async () => {
            const request = await getData("USER_AVERAGE_SESSIONS", id);
            if (!request) return alert('data error');
            const formatData = request.sessions.map((data) => {
                switch (data.day) {
                    case 1:
                        return { ...data, day: "L" };
                    case 2:
                        return { ...data, day: "M" };
                    case 3:
                        return { ...data, day: "M" };
                    case 4:
                        return { ...data, day: "J" };
                    case 5:
                        return { ...data, day: "V" };
                    case 6:
                        return { ...data, day: "S" };
                    case 7:
                        return { ...data, day: "D" };
                    default:
                        return { ...data };
                }
            });
            setData(formatData);
        };
        data();
    }, [id]);
    if (data.length === 0) return null;

    const CustomTooltip = ({ active, payload }) => {
        if (active) {
            return (
                <div>
                    <p className='line-tooltip-text'>{payload[0].value}min</p>
                </div>

            );
        }

        return null;
    };


    return (
        <>
            <div className='linechart-container'>
                <div className='line-legend'>
                    <h2 className='line-barchart-title'>Durée moyenne des sessions</h2>
                </div>
                <LineChart
                    width={262}
                    height={262}
                    data={data}
                    margin={{
                        top: 5,
                        right: 30,
                        left: 20,
                        bottom: 5,
                    }}
                >
                    <CartesianGrid strokeDasharray="3 3" vertical={false} horizontal={false} />
                    <XAxis type="category"
                        dataKey="day"
                        tickLine={true}
                        stroke="#FF0000"
                        padding={{ right: 5, left: 5 }}
                        tick={{ fontSize: 13, stroke: "white", opacity: 0.8 }} />
                    <YAxis dataKey="sessionLength"
                        domain={[0, "dataMax + 30"]}
                        hide={true} />
                    <Tooltip content={CustomTooltip} wrapperStyle={{ backgroundColor: "white", padding: '0px 15px', outline: 'none' }} />
                    <Line type="monotone"
                        dataKey="sessionLength"
                        strokeWidth={2}
                        dot={false}
                        stroke="rgba(255, 255, 255, 0.7)"
                        activeDot={{ r: 4, strokeWidth: 4, stroke: "white" }} />
                </LineChart>
            </div>
        </>
    );
}
