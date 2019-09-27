import React from "react";
import "./App.css";
import PhotoList from "./components/PhotoList";
import styled from "styled-components";

const AppWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

function App() {
  return (
    <AppWrapper>
      <h1>NASA</h1>
      <h3>Photo of the Day:</h3>
      <PhotoList />
    </AppWrapper>
  );
}

export default App;