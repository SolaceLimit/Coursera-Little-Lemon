import React from "react";
import { Box, Flex } from "@chakra-ui/react";
import { Routes, Route, Link } from "react-router-dom";
import HomePage  from "./Home";
import ContactPage  from "./Contact";
import ReservationPage  from "./Reservation";

const Nav = () => {
  return (
  <>
    <nav>
        <Flex>  
          <Box w='100' h='10' bg='white'><Link to="/" className="nav-item">Home</Link></Box>
          <Box w='100' h='10' bg='white'><Link to="/reservation" className="nav-item">Reservation</Link></Box>
          <Box w='100' h='10' bg='white'><Link to="/contact" className="nav-item">Contact</Link></Box>
        </Flex>
    </nav>
    <Routes> 
          <Route path="/" element={<HomePage />}></Route>
          <Route path="/reservation" element={<ReservationPage />}></Route>
          <Route path="/contact" element={<ContactPage />}></Route>
    </Routes>
  </>
  );
};
export default Nav;
