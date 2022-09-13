import { useState } from 'react';
import Mole from './Mole'
import EmptySlot from './EmptySlot'

function MoleContainer(props){
 const [theMole, setTheMole] = useState(false)

 function handleClick(e){
  props.setScore(props.score +1)
  setTheMole(false)
 }

 let displayMole = theMole ? <Mole toggle={setTheMole} handleClick={handleClick} /> : <EmptySlot toggle={setTheMole} />

    return (
        <div style={{'display': 'inline-block', 'width': '30vw'}}>
            {displayMole}``
        </div>
    )
}

export default MoleContainer;