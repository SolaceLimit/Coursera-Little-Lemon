import React from "react";
import { Helmet } from 'react-helmet-async';

const ReservationPage = () => {
  return (
    <>
      <Helmet>
        <title>ReservationPage - Little Lemon</title>
        <meta name="description" content="ReservationPage of little lemon"/>
        <meta name="og:description" content="ReservationPage of little lemon"/>
        <meta name="og:title" content="ReservationPage"/>
        <meta name="og:image" content="https://thenounproject.com/api/private/icons/526867/edit/?backgroundShape=SQUARE&backgroundShapeColor=%23000000&backgroundShapeOpacity=0&exportSize=752&flipX=false&flipY=false&foregroundColor=%23000000&foregroundOpacity=1&imageFormat=png&rotation=0&token=gAAAAABkcKuVfldPJ0o9iMFFPUDZOXZIo_TOdGBS6Lmpt0TB2xmgkgzB9P2pC9ecq0QbZsCvZDV4FpKd5YHObXNId-E-i8Fnfg%3D%3D"/>
      </Helmet>
      <main>
        <h1>ReservationPage</h1>
        <form style={{ display: "grid", maxWidth: 200, gap: 20 }}>
          <label htmlFor="res-date">Choose date</label>
          <input type="date" id="res-date" />
          <label htmlFor="res-time">Choose time</label>
          <select id="res-time ">
            <option>17:00</option>
            <option>18:00</option>
            <option>19:00</option>
            <option>20:00</option>
            <option>21:00</option>
            <option>22:00</option>
          </select>
          <label htmlFor="guests">Number of guests</label>
          <input type="number" placeholder={1} min={1} max={10} id="guests" />
          <label htmlFor="occasion">Occasion</label>
          <select id="occasion">
            <option>Birthday</option>
            <option>Anniversary</option>
          </select>
          <input type="submit" defaultValue="Make Your reservation" />
        </form>
      </main>
  </>
  );
};
export default ReservationPage;
