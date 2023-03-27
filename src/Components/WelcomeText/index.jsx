/**
 * @fileoverview Component for displaying welcome text for a user
 * @module WelcomeText
 */

import './welcome.css';
import { getData } from '../../API/GetData';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router';

/**
 * Component for displaying welcome text for a user
 * @function
 * @returns {JSX.Element} WelcomeText component template
 */

function WelcomeText() {

    const [data, setData] = useState([]);
    const { id } = useParams();

    useEffect(() => {
        /**
        * Fetches user data and updates component state
        * @async
        * @function
        * @returns {Promise<void>}
        */
        const data = async () => {
            const request = await getData("USER_MAIN_DATA", id);
            if (!request) return console.log("WelcomeText's data was not call");
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