import React from "react"
import {BsCheck2All} from "react-icons/bs"
import {AiOutlineEdit} from "react-icons/ai"
import {GoTrashcan} from "react-icons/go"

function Items(){
    return(
        <React.Fragment>
            <li>
            <BsCheck2All/>
            <p> aca iria el texto</p>
            <div>
                <AiOutlineEdit/>
                <GoTrashcan/>
            </div>
            </li>
        </React.Fragment>
    )
}

export {Items}