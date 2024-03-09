import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Col, Container, Input, Label, Row ,Form, Button} from "reactstrap";

const AddMovie = () => {


    const navigate = useNavigate();
    const [user , setUser ] = useState({
        name : '', 
        rating : '',
        review : ''
    })

    const [movie , setMovie] = useState({
        title : '',
    })

        const [errorstitle , setErrorstitle] = useState({
        title :''});

        const [errorsname , setErrorsname] = useState({
            name :''});

        const [errorsrating , setErrorsrating] = useState({
            rating :''});
            
        const [errorsreview , setErrorsreview] = useState({
            review :''});

    const addMovie = (e) => {
        e.preventDefault();
        console.log(user)
        axios.post('http://localhost:8000/api/movie' , {title : movie.title , userName : user})
            .then(res => {console.log(res); navigate('/') })
            .catch(err => {  console.log(err ,movie);err.response.data.errors['userName.0.name'] ? setErrorsname(err.response.data.errors['userName.0.name']) : '' ;  err.response.data.errors['userName.0.rating'] ? setErrorsrating( err.response.data.errors['userName.0.rating']) : '' ;  err.response.data.errors['userName.0.review'] ? setErrorsreview(err.response.data.errors['userName.0.review']) : ''
        ; err.response.data.errors.title ? setErrorstitle(err.response.data.errors.title) : '' ;
    })
    }

    return(
        <>
            <Container style={{border : 'dotted' , padding : '40px'}}>
                <Row>
                    <Col>
                        <h2>Submit a movie and a review</h2>
                        <Form style={{fontSize :'1.5em'}} onSubmit={addMovie}>
                            {errorstitle ? <p style={{color : 'red'}}>{errorstitle.message}</p>
                            :''}
                            <div style={{border : 'none' , display : 'flex' , alignItems : 'center' , width : '640px',justifyContent : 'space-between' , marginBottom : '20px'}}>
                                <Label>Movie Title</Label>
                                <Input type="text" style={{width : '70%'}} value={movie.title} onChange={(e) => setMovie({...movie , title : e.target.value})}/>
                            </div>
                            {errorsname ? <p style={{color : 'red'}}>{errorsname.message}</p>
                            :''}
                            <div style={{border : 'none' , display : 'flex' , alignItems : 'center' , width : '640px',justifyContent : 'space-between', marginBottom : '20px'}}>
                                <Label>Your Name</Label>
                                <Input type="text" style={{width : '70%'}} value={user.name } onChange={(e) => setUser({...user , name : e.target.value})} />
                            </div>
                            {errorsrating ? <p style={{color : 'red'}}>{errorsrating.message}</p>
                            :''}
                            <div style={{border : 'none' , display : 'flex' , alignItems : 'center' , width : '640px',justifyContent : 'space-between', marginBottom : '20px'}}>
                                <Label>Rating</Label>
                                <Input type="number" style={{width : '70%'}} value={user.rating} onChange={(e) => setUser({...user , rating : e.target.value})}/>
                            </div>
                            {errorsreview ? <p style={{color : 'red'}}>{errorsreview.message}</p>
                            :''}
                            <div style={{border : 'none' , display : 'flex' , alignItems : 'center' , width : '664px',justifyContent : 'space-between', marginBottom : '20px'}}>
                                <Label>Your review</Label>
                                <textarea rows='5' cols='40' style={{outline : 'none'}} value={user.review} onChange={(e) => setUser({...user , review : e.target.value})}></textarea>
                            </div>
                            <div style={{border : 'none' , display : 'flex' , alignItems : 'center' , width : '290px',justifyContent : 'space-between' }}>
                                <Button type="submit" color="none" style={{border : '1px solid black', boxShadow : "5px 5px black"}}>Submit</Button>
                                <Button color="none" style={{border : '1px solid black', boxShadow : "5px 5px black"}} onClick={() => navigate('/movies')}>Cancel</Button>
                            </div>
                        </Form>
                    </Col>
                </Row>
            </Container>
        </>
    )
}

export default AddMovie;