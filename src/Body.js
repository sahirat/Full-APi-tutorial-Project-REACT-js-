import React , { useState ,useEffect } from 'react';
import './Body.css';
import { NavLink } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import ImportExportIcon from '@material-ui/icons/ImportExport';

const Body = () => {
    const [quote, setQuote] = useState('');
    const [author, setAuthor] = useState('');


    useEffect(() => {
        getQuote()
    }, []);

    const getQuote = () => {
        let url = `https://type.fit/api/quotes`;
        fetch(url)
            .then(res => res.json())
            .then(data => {
                let dataQuotes = data;
                let randomNum = Math.floor(Math.random() * dataQuotes.length);
                let randomQuote = dataQuotes[randomNum];

                setQuote(randomQuote.text);
                setAuthor(randomQuote.author);
             
            })
    }

    
    return (
            <div className='hero-container'>
                <img src='https://i.pinimg.com/originals/f1/0f/a8/f10fa8e41d8bcae8ae7541b5ed11200a.jpg' alt="background" className="img" width="100%" />
            <h2 style={{ fontFamily: "cursive" }}>" {quote} "</h2>
            <p style={{ fontFamily: "cursive" }}> - {author}</p>
                
                <Button 
                
                    variant="contained"
                    style={{ backgroundColor:"#ffc400", fontSize:"18px", fontFamily:"cursive" , marginTop:"20px" ,color:"black"}}
                    className="btn-mobile"
                    startIcon={<ImportExportIcon />}
                >
           <NavLink to="/quotes" style={{ color: "black", fontFamily: "cursive", textDecoration: "none" }} fontSize="large">Explore Quotes</NavLink>
                </Button>
            </div>
            
    
    );
}

export default Body;