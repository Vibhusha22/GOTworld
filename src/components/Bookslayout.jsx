import React, { useState, useEffect } from "react";
import { BOOK_API_URL } from "../API";
import axios from "axios";
import "../styles/App.css";
import { useNavigate } from "react-router-dom";

const BookList = () => {
  const [books, setBooks] = useState([]);
  const navigate = useNavigate();
   useEffect(() => {
    axios
      .get(BOOK_API_URL)
      .then((res) => {
        setBooks(res.data);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
  <div className="books">
    <div className="books1">
    {books.map((book, index) => (
          <div key={book.isbn} className="card-body books1-card">
              <div onClick={() => 
              navigate(`/books/${index+1}`)}>
              <button className="card-title mytitle">{book.name}</button>
              <p className="card-text">Author : {book.authors}</p>
              </div>
          </div>
        ))
        }
    </div>
  </div> 
  );
};
export default BookList;
