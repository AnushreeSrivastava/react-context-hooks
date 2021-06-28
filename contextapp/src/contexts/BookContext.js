import React, { createContext, useState } from 'react'

export const BookContext = createContext();

const BookContextProvider = (props) => {
    const [books, setBooks] = useState([
        { title: "Name of the wind", id: 1 },
        { title: "Alchemist", id: 2 },
        { title: "To all the boys", id: 3 },
        { title: "Nothing lasts forever", id: 4 }
    ]);
    return (
        <BookContext.Provider value={{ books }}>
            {props.children}
        </BookContext.Provider>
    );
}

export default BookContextProvider;