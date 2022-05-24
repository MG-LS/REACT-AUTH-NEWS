import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { loadNews } from "../../redux/features/News";
import Headers from "../Headers";
import CatPage from "./CatPage";

const HomePage = () => {
  const dispatch = useDispatch();

  const loading = useSelector((state) => state.news.load);
  const news = useSelector((state) => state.news.items);
  const error = useSelector((state) => state.news.error);

  useEffect(() => {
    dispatch(loadNews());
  }, [dispatch]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div className="main">
      <div>
        <Headers />
      </div>
      <div>
        <CatPage />
      </div>
      <div className="news">
        {news.map((news, item) => {
          return (
            <div className="todo-news">
              <div>
                <div className="block_img">
                  <div className="image">
                    <img src={news.img} alt="" />
                  </div>
                </div>

                <div className="info">
                  <h1>{news.title}</h1>
                  <div className="over">
                    <p key={item}>{news.text}</p>
                  </div>
                </div>
              </div>
              <div>
                <Link to={`/news/${news._id}`} className="link_cart">
                  Подробнее
                </Link>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default HomePage;
