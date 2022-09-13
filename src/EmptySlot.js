import { useEffect } from "react";
import MoleHill from './molehill.png'

const EmptySlot = {props} => {
    useEffect(() => {
        let randSeconds =Math.ceil(Math.random() * 5000)
        let timer = setTimeout(() => {
                props.toggle(true)
        }, randSeconds)
    })
    return (
        <div>
            <img style={{ 'width': '30vw'}} src { Molehill} />
        
            </div>
    )
}