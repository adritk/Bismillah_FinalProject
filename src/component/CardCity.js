import React from 'react'
import {MDBCol, MDBCardImage, MDBCard} from 'mdbreact'



const CardCity = (props) => {
    const style ={
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            fontWeight: "900",
            fontSize: "20px",
            letterSpacing: "1px",
            color: 'white',
            fontFamily: 'Acme'
    }
        return (


        <MDBCol md="3">
            <MDBCard style={{ width: "16rem", marginTop: '25px' }}>
                <MDBCardImage style={{height: "15rem"}} className="img-fluid" src={props.foto} waves />
                <div style={style}>{props.title}</div>
            </MDBCard>
        </MDBCol>
        )
}
export default CardCity