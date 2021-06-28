import React, { Component, useContext } from 'react'
import { ThemeContext } from '../contexts/ThemeContext';
import { AuthContext } from '../contexts/AuthContext';
import { BookContext } from '../contexts/BookContext';

// static contextType method of consuming context is easy but useful only in
// class components.Here we make a contextType and context object is available inside
// the component
//------------------------------------------------------------------------
// class BookList extends Component {
//     static contextType = ThemeContext;
//     render() {
//         const { isLightTheme, light, dark } = this.context;
//         const theme = isLightTheme ? light : dark;
//         return (
//             <div className="book-list" style={{ background: theme.bg, color: theme.syntax }}>
//                 <ul>
//                     <li style={{ background: theme.ui }}>The way of king</li>
//                     <li style={{ background: theme.ui }}>the name of the wind</li>
//                     <li style={{ background: theme.ui }}>the final empire</li>
//                 </ul>
//             </div>
//         );
//     }
// }


//Context consumer method is useful when many context providers need to be consumed
//It is also useful in functional component.
//------------------------------------------------------------------------------
// class BookList extends Component {
//     render() {
//         return (
//             <AuthContext.Consumer>{(authContext) => (
//                 <ThemeContext.Consumer>{(themeContext) => {
//                     const { isAuthenticated, toggleAuth } = authContext;
//                     const { isLightTheme, light, dark } = themeContext;
//                     const theme = isLightTheme ? light : dark;

//                     return (
//                         <div className="book-list" style={{ background: theme.bg, color: theme.syntax }}>
//                             <div onClick={toggleAuth}>
//                                 {isAuthenticated ? 'Logged In' : 'Logged Out'}
//                             </div>
//                             <ul>
//                                 <li style={{ background: theme.ui }}>The way of king</li>
//                                 <li style={{ background: theme.ui }}>the name of the wind</li>
//                                 <li style={{ background: theme.ui }}>the final empire</li>
//                             </ul>
//                         </div>
//                     )
//                 }}
//                 </ThemeContext.Consumer>
//             )}
//             </AuthContext.Consumer>
//         )
//     }
// }


const BookList = () => {
    const { isLightTheme, light, dark } = useContext(ThemeContext);
    const { isAuthenticated, toggleAuth } = useContext(AuthContext);
    const { books } = useContext(BookContext);
    const theme = (isLightTheme) ? light : dark;
    return (
        <div className="book-list" style={{ background: theme.bg, color: theme.syntax }}>
            <div onClick={toggleAuth}>
                {isAuthenticated ? 'Logged In' : 'Logged Out'}
            </div>
            <ul>
                {
                    books.map(book => {
                        return (
                            <li style={{ background: theme.ui }} key={book.id}>{book.title}</li>
                        )
                    })
                }
            </ul>
        </div>
    )
}
export default BookList;