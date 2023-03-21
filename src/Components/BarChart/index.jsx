import './barchart.css'
import React from "react";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip } from "recharts";
import { getData } from '../../API/GetData';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router';
import PropTypes from 'prop-types';

/**
 * Displays a simple bar chart
 *
 * @return {(JSX | null)}
 */

export default function SimpleBarChart() {

  const [data, setData] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    const data = async () => {
      const request = await getData("USER_ACTIVITY", id);
      if (!request) return alert('data error');
      setData(request);
    };
    data();
  }, [id]);
  if (data.length === 0) return null;

  // add + 1 to day's value
  for (let i = 0; i < data.sessions.length; i++) {
    data.sessions[i].day = i + 1;
  }

  const CustomTooltip = ({ active, payload }) => {
    if (active) {
      return (
        <div>
          <p className='tooltip-text'>{payload[0].value}kg</p>
          <p className='tooltip-text'>{payload[1].value}Kcal</p>
        </div>

      );
    }

    return null;
  };

  CustomTooltip.propTypes = {
    active: PropTypes.bool,
    payload: PropTypes.array,
  };

  return (
    <>
      <div className='barchart-container'>
        <div className='legend'>
          <h2 className='barchart-title'>Activité quotidienne</h2>
          <div className='legend-text'>
            <div className='dot-kg'>
              <span className="black-dot"></span>
              <p className="legend-text">Poids (kg)</p>
            </div>
            <div className='dot-kcal'>
              <span className="red-dot"></span>
              <p className="legend-text">Calories brûlées (kCal)</p>
            </div>
          </div>
        </div>
        <BarChart className='barChart' width={746} height={230} data={data.sessions} barGap={8} >
          <CartesianGrid strokeDasharray="1 1" vertical={false} />
          <XAxis yAxisId="day" dataKey="day" tick={{ fontSize: 14 }} dy={15} stroke="1 1" />
          <YAxis yAxisId="kilogram" dataKey="kilogram" type="number" domain={['dataMin - 2', 'dataMax + 1']} tickCount="4" axisLine={false} orientation="right" tickLine={false} tick={{ fontSize: 14 }} dx={15} />
          <YAxis yAxisId="calories" dataKey="calories" type="number" domain={['dataMin - 20', 'dataMax + 10']} hide={true} />
          <Tooltip content={CustomTooltip} wrapperStyle={{ backgroundColor: "#E60000", padding: '15px 10px', outline: 'none' }} />
          <Bar yAxisId="kilogram" dataKey="kilogram" fill="#282D30" barSize={7} radius={[50, 50, 0, 0]} />
          <Bar yAxisId="calories" dataKey="calories" fill="#E60000" barSize={7} radius={[50, 50, 0, 0]} />
        </BarChart>
      </div>
    </>
  );
}
