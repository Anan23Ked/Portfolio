import React from "react";
import Art1 from "../assets/artworks/Art_1.jpg";

const Gallery = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-backgroundColor">
      <div className="w-full bg-gray-50">
        <div className="max-w-screen-xl mx-auto p-8">
          <h1 className="text-headingText text-4xl text-center mb-8">Gallery</h1>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-4 rounded shadow">
              <img src={Art1} alt="Art 1" className="w-full h-auto" />
              <p className="mt-2 text-center">Acrylic on Paper. Selfishness, Suffering, Curiosity, Three qualities paving way for development guided by the Sun and balanced by the Moon in this vast universe of ours</p>
            </div>
           
          </div>
        </div>
      </div>
    </div>
  );
};

export default Gallery;