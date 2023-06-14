import React, { useState } from 'react';
import AddIcon from '@mui/icons-material/Add';
import DeleteIcon from '@mui/icons-material/Delete';
import { Button } from '@mui/material';


const App = ()=>{

    const[num,setNum] = useState(0);

    const incNum = ()=>{
        setNum(num+1);
    }
    const decNum = ()=>{
        if(num == 0){
            alert("Sorry , Zero Position Reached");
        }
        else{
        setNum(num-1);
        }
    }
    return(<>
        <div className='outer-box'>
            <div className='inner-box'>
                <h1>{num}</h1>
                <div className='btn'>
                    <Button onClick={incNum} variant='contained' color='success'> <AddIcon/> </Button>
                    <Button onClick={decNum} variant='contained' color='error'> <DeleteIcon/></Button>
                  
                </div>
            </div>
        </div>
        </>);
}
export default App;