import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import AdminNavbar from './navbar/AdminNavbar'
import PagenotFound from './404-pageNotFoundADMIN/PagenotFound'

import AdminHome from './adminHome/AdminHome'
import ManageBooks from './manageBooks/ManageBooks'
import ViewUsers from './viewUsers/ViewUsers'
import IssuedBooks from './issuedBooks/IssuedBooks'
import BooksRequests from './booksRequests/BooksRequests'
import ReturnedBooks from './returnedBooks/ReturnedBooks'
import EditBookForm from './manageBooks/EditBookForm'
import AddNewBook from './addNewBook/AddNewBook'

const AdminAPP = () => {
  return (
    <React.Fragment>
      <Router>
        <AdminNavbar />
        <Routes>
          <Route path='/adminhome' element={<AdminHome />} />
          <Route path='/admin-managebooks' element={<ManageBooks />} />
          <Route path='/admin-viewusers' element={<ViewUsers />} />
          <Route path='/admin-issuedbooks' element={<IssuedBooks />} />
          <Route path='/admin-booksrequests' element={<BooksRequests />} />
          <Route path='/admin-returnedbooks' element={<ReturnedBooks />} />
          <Route
            path='/admin-managebooks/admin-addnewbook'
            element={<AddNewBook />}
          />
          <Route
            path='/admin-managebooks/admin-edit-books/:id'
            element={<EditBookForm />}
          />
          <Route path='*' element={<PagenotFound></PagenotFound>} />
        </Routes>
      </Router>
    </React.Fragment>
  )
}

export default AdminAPP
