import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'; // Bootstrap css import
// Bootstrap imports
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar'; // Routing Navbar
// React router imported
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import FindHobby from './components/findHobby';
import AddHobby from './components/addHobby';
import Content from './components/content';
import EditHobby from './components/editHobby';

function App() {
  return (
    <BrowserRouter>
    <div className="App">
      {/* Navbar component imported from Bootstrap*/}
      <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="/">UNeedAHobby</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="findHobby">Find Hobby</Nav.Link>
            <Nav.Link href="addHobby">Add Hobby</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      {/* Routes for each component*/}
      <Routes>
        {/* Routes to the content component, displaying it only*/}
        <Route path='/' element={<Content></Content>}></Route>
        {/* Routes to the header component, displaying it only*/}
        <Route path='findHobby' element={<FindHobby></FindHobby>}></Route>
        {/* Routes to the footer component, displayng it only*/}
        <Route path='addHobby' element={<AddHobby></AddHobby>}></Route>
        {/* Routes to the edit hobby component, allowing editing based on id */}
        <Route path='editHobby/:id' element={<EditHobby></EditHobby>}></Route>
      </Routes>
    </div>
    </BrowserRouter>
  );
}

export default App;
