/**
* Renders a simple radar chart component.
* @function
* @returns {JSX.Element} The SimpleRadarChart component.
*/

import './radarchart.css'
import React from "react";
import { Radar, RadarChart, PolarGrid, PolarAngleAxis } from 'recharts';
import { getData } from '../../API/GetData';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router';

export default function SimpleRadarChart() {

    /**
     * The state hook for the chart data.
     * @type {Array<Object>}
     */

    const [data, setData] = useState([]);

    /**
     * The route parameter for the user ID.
     * @type {string}
     */
    const { id } = useParams();

    useEffect(() => {
        /**
        * Retrieves the data from the API and formats it to match the chart's expected format.
        * @function
        * @async
        * @returns {void}
        */
        const data = async () => {
            const request = await getData("USER_PERFORMANCE", id);
            if (!request) return console.log("SimpleRadarChart's data was not call");
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
                cx={130}
                cy={130}
                outerRadius={80}
                width={262}
                height={262}
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
