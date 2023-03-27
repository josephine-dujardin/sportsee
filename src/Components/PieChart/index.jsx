import './piechart.css'
import React from "react";
import { PieChart, Pie, Cell } from 'recharts';
import { getData } from '../../API/GetData';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router';

/**
* @function SimplePieChart
* @description This function displays a pie chart representing the user's score data obtained from an API or data mocked
* @returns {JSX.Element} JSX code representing the SimplePieChart component
*/

export default function SimplePieChart() {

    /**
     * @constant {[object]} data - represents the score data obtained from the API or data mocked
     * @function setData - function used to set the score data
     * @constant {string} id - represents the user's id obtained from the url
     */

    const [data, setData] = useState([]);
    const { id } = useParams();

    /**
     * @function useEffect
     * @description This function is executed when the component is mounted, it gets the score data for a user from the API or data mocked
     * @returns {function} - returns the score data
     */

    useEffect(() => {
        const data = async () => {
            const request = await getData("USER_MAIN_DATA", id);
            if (!request) return console.log("SimplePieChart's data was not call");
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
            <PieChart width={262} height={262} >
                <Pie
                    data={score}
                    dataKey="value"
                    innerRadius={70}
                    outerRadius={82}
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
