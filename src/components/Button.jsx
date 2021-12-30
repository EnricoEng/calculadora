import React from "react";
import './Button.css'

// export default function(props) {
//     return(
//     <button className="botaozinho">{props.label}</button>
//     )
//}

export default props => {
   return (
        <button  onClick = { e => props.click && props.click(props.label)} 
         className={`botaozinho ${props.operacao ? 'operacao' : ''}
                                    ${props.double ? 'double' : ''}
                                    ${props.doubleCol ? 'doubleCol' : ''}
                                    ${props.triple ? 'triple' : ''}
        `}>      
            {props.label}
        </button>
   )

   
//    Outra opção seria fazer da seguinte forma
//    let classes = 'botaozinho'
//    classes += props.operacao ? 'operacao' : ''
//    classes += props.double ? 'double' : ''
//    classes += props.triple ? 'triple' : ''
//    return (
//    <button className = {classes}>
//          {props.label}
//     </button>    
//    )

}
    