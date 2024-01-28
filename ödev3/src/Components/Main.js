import React, { useState } from "react";
import { useEffect } from "react";
import "./style.css";
import Card from "./Card";
import Footer from "./Footer";
let API_KEY = "?api_key=1cc2bfb99ed0ce1e40ce9d8bb326256e";
let base_url = "https://api.themoviedb.org/3";
let url = base_url + "/movie/popular" + API_KEY;
let arr = [
  "Popüler Filmler",
  "En Çok Oy Alan Filmler",
  "Gelecek Filmler",
  "Vizyondaki Filmler",
];

const Main = () => {
  const [movieData, setData] = useState([]);
  const [url_set, setUrl] = useState(url);
  const [search, setSearh] = useState();

  useEffect(() => {
    fetch(url_set)
      .then((res) => res.json())
      .then((data) => {
        //setData(data.results);
        setData(data.results);
      });
  }, [url_set]);
  const getData = (movieType) => {
    if (movieType == "Popüler Filmler") {
      url = base_url + "/movie/popular" + API_KEY;
    }
    if (movieType == "En Çok Oy Alan Filmler") {
      url = base_url + "/movie/top_rated" + API_KEY;
    }
    if (movieType == "Gelecek Filmler") {
      url = base_url + "/movie/upcoming" + API_KEY;
    }
    if (movieType == "Vizyondaki Filmler") {
      url = base_url + "/movie/now_playing" + API_KEY;
    }

    setUrl(url);
  };

  const searchMovie = (evt) => {
    if (evt.key == "Enter") {
      url =
        base_url +
        "/search/movie?query=" +
        search +
        "&api_key=1cc2bfb99ed0ce1e40ce9d8bb326256e";
      setUrl(url);
      setSearh("");
    }
  };

  return (
    <div>
      <div className="header">
        <nav>
          <ul>
            {arr.map((value) => {
              return (
                <li>
                  <a
                    href="#"
                    name={value}
                    onClick={(e) => {
                      getData(e.target.name);
                    }}
                  >
                    {value}
                  </a>
                </li>
              );
            })}
            <li>
              <a href="https://www.linkedin.com/in/ferhat-gözüpek-194a46260/">
                Hakkımda
              </a>
            </li>
          </ul>
        </nav>
        <form>
          <div className="search-btn">
            <input
              type="text"
              placeholder="Film Adı"
              className="inputText"
              onChange={(e) => {
                setSearh(e.target.value);
              }}
              value={search}
              onKeyPress={searchMovie}
            />
            <button>Ara</button>
          </div>
        </form>
      </div>
      <div className="container">
        {movieData.length == 0 ? (
          <p className="notfound">Not Found</p>
        ) : (
          movieData.map((res, pos) => {
            return <Card info={res} key={pos} />;
          })
        )}
      </div>
      <div className="footer">
        <Footer></Footer>
      </div>
    </div>
  );
};

export default Main;
