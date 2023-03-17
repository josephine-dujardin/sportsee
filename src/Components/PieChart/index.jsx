import './piechart.css'
import React from "react";
import { PieChart, Pie, Cell } from 'recharts';
import { getData } from '../../API/GetData';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router';

export default function SimplePieChart() {

    const [data, setData] = useState([]);
    const { id } = useParams();

    useEffect(() => {
        const data = async () => {
            const request = await getData("USER_MAIN_DATA", id);
            if (!request) return alert('data error');
            // console.log(request)
            setData(request);
        };
        data();
    }, [id]);
    if (data.length === 0) return null;

    const score = [
        { value: data.todayScore || data.score },
        { value: 1 - data.todayScore || data.score },
    ];

    return (
        <div className='piechart-container'>
            <div className='pie-legend'>
                <h2 className='piechart-title'>Score</h2>
            </div>
            <PieChart width={300} height={300} >
                <Pie
                    data={score}
                    dataKey="value"
                    innerRadius={70}
                    outerRadius={85}
                    startAngle={90}
                >{score.map((entry, index) =>
                    index === 0 ? (
                        <Cell key={`cell-${index}`} cornerRadius={10} fill="#FF0000" />
                    ) : (
                        <Cell key={`cell-${entry}`} fill="#FBFBFB" />
                    )
                )}</Pie>
            </PieChart>
            <div className='div-score'>
                <div className='score'>
                    {score[0].value * 100}%<br />
                </div>
                de votre
                <br /> objectif
            </div>
        </div>
    );
}
