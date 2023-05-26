import React from "react";
import { Helmet } from 'react-helmet-async';

const HomePage = () => {
  return (
  <>
    <Helmet>
      <title>HomePage - Little Lemon</title>
      <meta name="description" content="Home Page of little lemon"/>
      <meta name="og:description" content="Home Page of little lemon"/>
      <meta name="og:title" content="Home Page"/>
      <meta name="og:image" content="https://thenounproject.com/api/private/icons/526867/edit/?backgroundShape=SQUARE&backgroundShapeColor=%23000000&backgroundShapeOpacity=0&exportSize=752&flipX=false&flipY=false&foregroundColor=%23000000&foregroundOpacity=1&imageFormat=png&rotation=0&token=gAAAAABkcKuVfldPJ0o9iMFFPUDZOXZIo_TOdGBS6Lmpt0TB2xmgkgzB9P2pC9ecq0QbZsCvZDV4FpKd5YHObXNId-E-i8Fnfg%3D%3D"/>
    </Helmet>
    <main>
      <h1>HOME PAGE</h1>
    </main>
  </>
  );
};
export default HomePage;
