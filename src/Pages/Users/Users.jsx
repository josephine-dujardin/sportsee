import './users.css';
import WelcomeText from '../../Components/WelcomeText';
import SimpleBarChart from '../../Components/BarChart';
import SimpleLineChart from '../../Components/LineChart';
import SimpleRadarChart from '../../Components/RadarChart';
import SimplePieChart from '../../Components/PieChart';
import KeyInfos from '../../Components/KeyInfos';

/**
 * Display userPage
 *
 * @return {JSX}
 */

function User() {

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