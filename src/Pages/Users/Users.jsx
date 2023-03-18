import { getData } from '../../API/GetData';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router';
import './users.css';
import WelcomeText from '../../Components/WelcomeText';
import SimpleBarChart from '../../Components/BarChart';
import SimpleLineChart from '../../Components/LineChart';
import SimpleRadarChart from '../../Components/RadarChart';
import SimplePieChart from '../../Components/PieChart';
import KeyInfos from '../../Components/KeyInfos';

function User() {

    const [data, setData] = useState([]);
    const { id } = useParams();

    useEffect(() => {
        const data = async () => {
            const request = await getData("USER_MAIN_DATA", id);
            if (!request) return alert('data error');
            // console.log(request)
            setData(request.userInfos);
        };
        data();
    }, [id]);
    useEffect(() => {
        const data = async () => {
            const request = await getData("USER_ACTIVITY", id);
            if (!request) return alert('data error');
            // console.log(request)
            setData(request);
        };
        data();
    }, [id]);
    useEffect(() => {
        const data = async () => {
            const request = await getData("USER_AVERAGE_SESSIONS", id);
            if (!request) return alert('data error');
            // console.log(request)
            setData(request);
        };
        data();
    }, [id]);
    useEffect(() => {
        const data = async () => {
            const request = await getData("USER_PERFORMANCE", id);
            if (!request) return alert('data error');
            // console.log(request)
            setData(request);
        };
        data();
    }, [id]);
    if (data.length === 0) return null;
    //format data.day
    for (let i = 0; i < data.length; i++) { data[i].firstName = i + 1; }

    // console.log(data.userId)

    return (
        <>
            <div className='container'>
                <WelcomeText />
                <div className='global-div'>
                    <div className='left-div'>
                        <SimpleBarChart />
                        <div className='flex-div'>
                            <SimpleLineChart />
                            <SimpleRadarChart />
                            <SimplePieChart />
                        </div>
                    </div>
                    <div className='right-div'>
                        <KeyInfos />
                    </div>
                </div>
            </div>
        </>
    )
}

export default User