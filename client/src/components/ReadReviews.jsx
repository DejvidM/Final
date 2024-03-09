import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Col, Container, Row ,Label , Input , Button ,Form, Table} from "reactstrap";

const ReadReviews = () => {
    const {_id} = useParams();
    const navigate = useNavigate();
    const [ movie , setMovie] =useState({
        title : '',
        userName : []
    });

    useEffect(() => {
        axios.get(`http://localhost:8000/api/movie/${_id}`)
            .then(res => {console.log(res.data); setMovie(res.data) })
            .catch(err => console.log(err))
    },[])

    const handleButton = () => {
        axios.delete(`http://localhost:8000/api/movie/${_id}` )
            .then(res => navigate('/'))
            .catch(err => console.log(err))
    }

    return(
        <>
            <Container style={{border : 'dotted' , padding : '40px'}}>
                <Row>
                    <Col>
                        <h2>Reviews for {movie.title}</h2>
                        <Table bordered striped style={{fontSize : '1.5em'}}>
                            <thead>
                                <tr>
                                    <th>
                                        Reviewer
                                    </th>
                                    <th>
                                        Rating
                                    </th>
                                    <th>
                                        Review
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                {movie.userName.map( (user) => 
                                    <tr key={user._id}>
                                        <td>{user.name}</td>
                                        <td>{user.rating}</td>
                                        <td>{user.review}</td>
                                    </tr>
                                )}
                            </tbody>
                        </Table>
                        <Button size="lg" color="danger" onClick={() => handleButton()}>Delete</Button>
                        <Button onClick={() => navigate('/')}>Back to home</Button>
                    </Col>
                </Row>
            </Container>
        </>
    )
}
export default ReadReviews