import './radarchart.css'
import React from "react";
import { Radar, RadarChart, PolarGrid, PolarAngleAxis } from 'recharts';
import { getData } from '../../API/GetData';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router';

export default function SimpleRadarChart() {

    const [data, setData] = useState([]);
    const { id } = useParams();

    useEffect(() => {
        const data = async () => {
            const request = await getData("USER_PERFORMANCE", id);
            if (!request) return alert('data error');
            const formatData = request.data.map((data) => {
                switch (data.kind) {
                    case 1:
                        return { ...data, kind: 'Cardio' };
                    case 2:
                        return { ...data, kind: 'Energie' };
                    case 3:
                        return { ...data, kind: 'Endurance' };
                    case 4:
                        return { ...data, kind: 'Force' };
                    case 5:
                        return { ...data, kind: 'Vitesse' };
                    case 6:
                        return { ...data, kind: 'Intensité' };
                    default:
                        return { ...data };
                }
            });
            setData(formatData);
        };
        data();
    }, [id]);
    if (data.length === 0) return null;

    return (
        <div className='radarchart-container'>
            <RadarChart
                cx={150}
                cy={150}
                outerRadius={80}
                width={300}
                height={300}
                data={data}
            >
                <PolarGrid gridType="polygon"
                    polarRadius={[10, 20, 40, 60, 80]}
                    stroke="#fff"
                    radialLines={false} />
                <PolarAngleAxis dataKey="kind" stroke='white' tickLine={false} tick={{ fontSize: 10 }} />
                <Radar
                    dataKey="value"
                    stroke="#FF0101"
                    fill="#FF0101"
                    fillOpacity={0.6}
                />
            </RadarChart>
        </div>
    );
}
