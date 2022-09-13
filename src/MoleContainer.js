import {useEffect} from 'react'
import Mole from './Mole'
import EmptySlot from './EmptySlot'
// Well...wherever you stored your moleImg.

const MoleContainer = (props) => {
    let [theMole, seTheMole] = useState(false)

    const handleClick = () => {
        props.setScore(props.score =1)
        setTheMole(false)
    }

    let displayMole = theMole? <Mole toggle={setTheMole} handleClick={handleClick}/> : 

}


