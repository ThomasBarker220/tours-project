import React, { useEffect, useState } from "react";
import Tour from "./Tour";

const Tours = ({ tours, removeTour }) => {
  return (
    <section>
      <div className="title">
        <h2>Our tours</h2>
        <div className="title-underline"></div>
      </div>
      <div className="tours">
        {tours.map((tour) => {
          return <Tour key={tour.id} removeTour={removeTour} {...tour} />;
        })}
      </div>
    </section>
  );
};

export default Tours;
