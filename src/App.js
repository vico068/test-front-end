import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import CreateContact from "./pages/contacts/CreateContact";
import EditContact from "./pages/contacts/EditContact";
import ListContact from "./pages/contacts/ListContact";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<ListContact />}></Route>
        <Route exact path="/create" element={<CreateContact />}></Route>
        <Route name="edit" path="/edit/:id" element={<EditContact />}></Route>
      </Routes>
    </Router>
  );
}
