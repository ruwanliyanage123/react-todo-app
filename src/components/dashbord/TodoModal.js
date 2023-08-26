import { useState } from 'react';
import './TodoModal.css';


function TodoModal({closeModal}){
    const [weight, setWeight] = useState('');
    const [height, setHeight] = useState('');
    const [result, setResult] = useState('Enter values');

    function whenSubmit(){
        var numb = parseInt(weight) * parseInt(height);
        console.log(numb);
        setResult(numb);
    }

    return(
        <div>
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
                    <tr>
                        <td></td>
                        <td>
                            <button onClick={closeModal}>close</button>
                        </td>
                    </tr>
                </table>
            </div> 
        </div>
    );
}

export default TodoModal;