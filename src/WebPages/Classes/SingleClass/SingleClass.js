import React, { useEffect, useState } from 'react';
import {useParams} from "react-router-dom"
import {Container, Row, Col} from "react-bootstrap"
import "./SingleClass.css"
const SingleClass = () => {
    let { userId } = useParams();
    const [singleClass, setSingleClass]= useState({})
    const [myLengths, setMyLenght]= useState([])
    useEffect(()=>{
        const url= `http://localhost:5000/myClass/${userId}`
        fetch(url)
        .then(res=>res.json())
        .then(data=>setSingleClass(data))
    },[])
   useEffect(()=>{
    const url= `http://localhost:5000/gymClass`
    fetch(url)
    .then(res=>res.json())
    .then(data=>setMyLenght(data))
   },[]) 
    return (
        <div>
            <Container>
                <Row>
                    <Col xs={12} md={9} lg={9}>
                    <img className='singleClassImage' src={singleClass.image} alt="" />
                    <div className="singleText">
                    <h2 className='class-names'>{singleClass.name}</h2>
                    <article className='myArticle'>{singleClass.description}</article>
                    </div>
                    </Col>
                    <Col xs={12} md={3} lg={3}>
                   <div className="right-title">
                    <div className="titleNames">
             
                   {myLengths.filter(getNames => getNames.includes('Weightloss')).map(filteredName => (
                    <article>Name:{filteredName.length} </article>
                  ))}
                  </div>
                    <div className="titleLength">
                        <p>Length</p>
                    </div>
                   </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default SingleClass;