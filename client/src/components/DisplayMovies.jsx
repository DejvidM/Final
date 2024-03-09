import React, { useEffect, useState } from "react";
import {Container ,Row , Col, Table, Button} from 'reactstrap'
import axios from 'axios'
import { useNavigate } from "react-router-dom";

const DisplayMovies = () => {
    const navigate = useNavigate();
    const [movies , setMovies] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:8000/api/movie')
            .then(res => { setMovies(res.data) ;})
            .catch(err => console.log(err))
    },[])

    return (
        <>
            
            <Container style={{border : 'dotted' , padding : '40px'}}>
                <Row>
                    <Col>
                        <Container style={{display : 'flex' , alignItems : 'center', justifyContent : "space-between"}}>
                        <h2>Movie List</h2> 
                        <h3 style={{border : '1px solid black' , paddingInline : '25px', backgroundColor : 'lightblue'}} onClick={() => navigate('/movies/new')}>Add a new movie</h3>
                        </Container>
                        <Table bordered striped style={{fontSize : '1.5em'}}>
                            <thead>
                                <tr>
                                    <th>Movie Title</th>
                                    <th>Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {movies.map( (movie,index) => 
                                    <tr key={movie._id}>
                                        <td>{movie.title}</td>
                                        <td style={{display :'flex', justifyContent :'space-around',alignItems : 'center'}}><Button onClick={() => navigate(`/movies/${movie._id}`)} color="success">Read Reviews</Button> <Button style={{backgroundColor : 'darkolivegreen'}} onClick={() => navigate(`/movies/${movie._id}/review`)}>Write a review</Button></td>
                                    </tr>
                                )}
                            </tbody>
                        </Table>
                    </Col>
                </Row>
            </Container>
        </>
    )
}

export default DisplayMovies