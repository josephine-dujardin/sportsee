import './keyinfos.css';
import calorie from '../../assets/calories-icon.svg'
import protein from '../../assets/proteines-icon.svg'
import carbohydrate from '../../assets/glucides-icon.svg'
import lipid from '../../assets/lipides-icon.svg'
import { getData } from '../../API/GetData';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router';

function KeyInfos() {

    const [data, setData] = useState([]);
    const { id } = useParams();

    useEffect(() => {
        const data = async () => {
            const request = await getData("USER_MAIN_DATA", id);
            if (!request) return alert('data error');
            // console.log(request)
            setData(request.keyData);
        };
        data();
    }, [id]);
    if (data.length === 0) return null;

    // console.log(data)

    return (
        <div className="key-data">
            <div className="data-flex-div">
                <img alt='calorie' src={calorie} className="calorie" />
                <div className="calorie-data">
                    <p className="calorie">{data.calorieCount}kCal</p>
                    <p>Calories</p>
                </div>
            </div>
            <div className="data-flex-div">
                <img alt='protein' src={protein} className="protein" />
                <div className="protein-data">
                    <p className="protein">{data.proteinCount}g</p>
                    <p>Proteines</p>
                </div>
            </div>
            <div className="data-flex-div">
                <img alt='carbohydrate' src={carbohydrate} className="carbohydrate" />
                <div className="carbohydrate-data">
                    <p className="carbohydrate">{data.carbohydrateCount}g</p>
                    <p>Glucides</p>
                </div>
            </div>
            <div className="data-flex-div">
                <img alt='lipid' src={lipid} className="lipid" />
                <div className="lipid-data">
                    <p className="lipid">{data.lipidCount}g</p>
                    <p>Lipides</p>
                </div>
            </div>
        </div>
    )
}

export default KeyInfos