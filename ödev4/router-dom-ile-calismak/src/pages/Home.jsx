import React from "react";
import { Products } from "../products";

function Home({ user }) {
  return (
    <>
      <h1>Ana Sayfa</h1>
      <Products user={user}></Products>
    </>
  );
}

export default Home;
