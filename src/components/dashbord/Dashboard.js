import { useState } from 'react';
import './Dashboard.css';
import Modal from './Modal';

const Dashboard = ()=>{
    const [weight, setWeight] = useState('');
    const [height, setHeight] = useState('');
    const [result, setResult] = useState('Enter values');

    return(
        <div className='dashboard'>
            <div className='content-table'>
                <table>
                    <tr>               
                        <th></th>
                        <th></th>
                    </tr>
                    <tr>
                        <td>
                            Result:
                        </td>
                        <td>
                            <h1>{result}</h1>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            Weight:
                        </td>
                        <td>
                            <input type= "number" value={weight} onChange={(e)=> setWeight(e.target.value)}/>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            Height:
                        </td>
                        <td>
                            <input type="number" value={height} onChange={(e)=> setHeight(e.target.value)}/>  
                        </td>
                    </tr>
                    <tr>
                        <td></td>
                        <td>
                            <button onClick={whenSubmit}>Submit</button>
                        </td>
                    </tr>
                </table>
            </div>  
        </div>
    );

    function whenSubmit(){
        var numb = parseInt(weight) * parseInt(height);
        console.log(numb);
        setResult(numb);
    }
}

export default Dashboard;