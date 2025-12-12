"use client";
import Image from "next/image";
import React from "react";
import "./searchpage.scss";

const SearchPage = () => {
  const categories = [
    {
      id: 1,
      title: "Idishlar",
      image:
        "https://images.squarespace-cdn.com/content/v1/542deba2e4b03f3f6aa01b61/1483572609617-VSG0XV0XIM51VZRH50CT/image-asset.jpeg",
      count: 120,
      path: "/search/expolere/dishes",
    },
    {
      id: 2,
      title: "Stullar",
      image:
        "https://i.pinimg.com/1200x/88/ac/0d/88ac0d1d4fe4986e68865a4b243f9c2b.jpg",
      count: 85,
      path: "/search/chairs",
    },
    {
      id: 3,
      title: "Stollar",
      image:
        "https://i.pinimg.com/1200x/1a/30/0c/1a300cc290ca88c9c2459ebe32a2999a.jpg",
      count: 64,
      path: "/search/tables",
    },
    {
      id: 4,
      title: "Zontiklar",
      image:
        "https://i.pinimg.com/1200x/c1/4a/1a/c14a1a414853d77d4c403b551b010bf2.jpg",
      count: 30,
      path: "/search/umbrellas",
    },
    {
      id: 5,
      title: "Oformleniya",
      image:
        "https://i.pinimg.com/1200x/4d/64/40/4d644007c88555409123df4c572e4103.jpg",
      count: 50,
      path: "/search/dishes",
    },
    {
      id: 6,
      title: "Texniklar",
      image:
        "https://i.pinimg.com/736x/5c/fc/c9/5cfcc9171fa0f8cc608b8f9b550b5e76.jpg",
      count: 25,
      path: "/search/chairs",
    },
    {
      id: 7,
      title: "Kombo set",
      image:
        "https://i.pinimg.com/1200x/c1/b2/68/c1b268b909267b6219dffda13e0196c9.jpg",
      count: 12,
      path: "/search/combo",
    },
  ];
  return (
    <div>
      <div className="searchpage">
        <div className="cardsbox">
          {categories.map((category) => (
            <div className="card" key={category.id}>
              <div className="card__image">
                <Image
                  fill
                  src={category.image}
                  alt={category.title}
                  className="card__image-img"
                />
              </div>
              <div className="card__info">
                <h3 className="card__info-title">{category.title}</h3>
                <p className="card__info-description">{category.count}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SearchPage;
