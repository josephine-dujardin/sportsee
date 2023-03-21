import './welcome.css';
import { getData } from '../../API/GetData';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router';

/**
 * Display user welcome text
 *
 * @return {(JSX | null)}
 */

function WelcomeText() {

    const [data, setData] = useState([]);
    const { id } = useParams();

    useEffect(() => {
        const data = async () => {
            const request = await getData("USER_MAIN_DATA", id);
            if (!request) return alert('data error');
            setData(request.userInfos);
        };
        data();
    }, [id]);
    if (data.length === 0) return null;

    return (
        <div className="User">
            <h1 className="user_title">Bonjour <span className="user_name">{data.firstName}</span></h1>
            <p>Félicitation ! Vous avez explosé vos objectifs hier 👏</p>
        </div>
    )
}

export default WelcomeText