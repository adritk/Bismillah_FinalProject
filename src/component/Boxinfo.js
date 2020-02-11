import React from 'react'
import '../style/boxinfo.css'
import { MDBCol} from "mdbreact";

const Boxinfo = (props) => {
    return (
        <MDBCol size="4" id = 'card-col'>
            <img src = {props.foto} />
            <h1>{props.title}</h1>
            <p>{props.text}</p>
        </MDBCol>
    )
}

export default Boxinfo