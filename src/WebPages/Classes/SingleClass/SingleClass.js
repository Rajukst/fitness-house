import React, { useEffect, useState } from 'react';
import {useParams} from "react-router-dom"
import {Container, Row, Col} from "react-bootstrap"
import "./SingleClass.css"
const SingleClass = () => {
    let { userId } = useParams();
    const [singleClass, setSingleClass]= useState({})
    useEffect(()=>{
        const url= `http://localhost:5000/myClass/${userId}`
        fetch(url)
        .then(res=>res.json())
        .then(data=>setSingleClass(data))
    },[])
    
    return (
        <div>
            <Container>
                <Row>
                    <Col xs={12} md={9} lg={9}>
                    <img className='singleClassImage' src={singleClass.image} alt="" />
                    <h2>{singleClass.name}</h2>
                    <p>{singleClass.description}</p>
                    </Col>
                    <Col xs={12} md={3} lg={3}>
                    <h1>This is Right</h1>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default SingleClass;