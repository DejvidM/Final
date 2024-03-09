import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Col, Container, Row ,Label , Input , Button ,Form} from "reactstrap";

const WriteReview = () => {
    const navigate = useNavigate();
    const {_id} = useParams();
    const [ movie , setMovie] =useState({
        title : ''
    });
    const [user , setUser ] = useState({
        name : '', 
        rating : '',
        review : ''
    })

    const [errors , setErrors] = useState({
        userName : '' ,
        rating : '',
        review : ''
    })

    useEffect(() => {
        axios.get(`http://localhost:8000/api/movie/${_id}`)
            .then(res => {console.log(res); setMovie(res.data) })
            .catch(err => console.log(err))
    },[])

    const [errorsname , setErrorsname] = useState({
        name :''});

    const [errorsrating , setErrorsrating] = useState({
        rating :''});
        
    const [errorsreview , setErrorsreview] = useState({
        review :''});

    const handleReview = (e) =>{
        e.preventDefault();
        axios.patch(`http://localhost:8000/api/user/${_id}` , user)
            .then(res => {console.log(res) ; navigate('/')})
            .catch(err => {console.log(err.response.data.errors) ; err.response.data.errors['userName.name'] ? setErrorsname(err.response.data.errors['userName.name']) : '' ;  err.response.data.errors['userName.rating'] ? setErrorsrating( err.response.data.errors['userName.rating']) : '' ;  err.response.data.errors['userName.review'] ? setErrorsreview(err.response.data.errors['userName.review']) : ''})
    }

    return(
        <>
            <Container style={{border : 'dotted' , padding : '40px'}}>
                <Row>
                    <Col>
                        <h1>Add a review for {movie.title}</h1>
                        <Form onSubmit={ handleReview} style={{fontSize :'1.5em'}} >
                        {errorsname ? <p style={{color : 'red'}}>{errorsname.message}</p>
                            :''}
                            <div style={{border : 'none' , display : 'flex' , alignItems : 'center' , width : '640px',justifyContent : 'space-between', marginBottom : '20px'}}>
                                <Label>Your Name</Label>
                                <Input type="text" style={{width : '70%'}} value={user.name} onChange={(e) => setUser({...user , name : e.target.value})}/>
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

export default WriteReview