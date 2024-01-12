import React from "react";

const Categories = () => {
  const data = [
    {
      cateImg: "./images/category/cat1.png",
      cateName: "Giyim",
    },
    {
      cateImg: "./images/category/cat2.png",
      cateName: "Elektronik",
    },
    {
      cateImg: "./images/category/cat3.png",
      cateName: "Arabalar",
    },
    {
      cateImg: "./images/category/cat4.png",
      cateName: "Ev & Bahçe",
    },
    {
      cateImg: "./images/category/cat5.png",
      cateName: "Hediyelik Eşya",
    },
    {
      cateImg: "./images/category/cat6.png",
      cateName: "Müzik",
    },
    {
      cateImg: "./images/category/cat7.png",
      cateName: "Sağlık & Güzellik",
    },
    {
      cateImg: "./images/category/cat8.png",
      cateName: "Evcil Hayvan",
    },
    {
      cateImg: "./images/category/cat9.png",
      cateName: "Çocuk Oyuncakları",
    },
    {
      cateImg: "./images/category/cat10.png",
      cateName: "Gıda Ürünleri",
    },
    {
      cateImg: "./images/category/cat11.png",
      cateName: "Kitaplar",
    },
  ];

  return (
    <>
      <div className="category">
        {data.map((value, index) => {
          return (
            <div className="box f_flex" key={index}>
              <img src={value.cateImg} alt="" />
              <span>{value.cateName}</span>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Categories;
