import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { postNewsComt } from "../../redux/features/Comt.";
import { loadNews } from "../../redux/features/News";
import Headers from "../Headers";
import NewsComt from "./NewsCom";

const NewsPage = () => {
  const dispatch = useDispatch();

  const { id } = useParams();

  const newsLi = useSelector((state) => state.news.items);

  const load = useSelector((state) => state.news.load);

  const [comt, setComt] = useState("");
  const user = useSelector((state) => state.application.user);

  const addComt = () => {
    dispatch(postNewsComt(id, comt, user));
  };
  console.log(addComt)

  useEffect(() => {
    dispatch(loadNews());
  }, [dispatch]);

  return (
    <div className="main">
      <Headers />
      {newsLi.map((item, i) => {
        if (item._id === id) {
          return (
            <div className="cart-news">
              <div className="cart-info">
                <div className="cart_i" >
                  <div className="news_img_p">
                    <img src={item.img} alt="" />
                  </div>
                  <div>
                    <h1>{item.title}</h1>
                    <p key={i}>{item.text}</p>
                  </div>
                </div>
                <div className="comt">
                  <input
                    type="text"
                    value={comt}
                    onChange={(e) => setComt(e.target.value)}
                  />
                  <button className="buti" onClick={addComt}>Добавить</button>
                  <div>
                  <NewsComt />
                </div>
                </div>
                
              </div>
            </div>
          );
        }
      })}
    </div>
  );
};

export default NewsPage;
