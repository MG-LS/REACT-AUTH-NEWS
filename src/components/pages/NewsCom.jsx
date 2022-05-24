import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { deleteComt, loadComt } from "../../redux/features/Comt.";

const NewsComt = () => {
  const dispatch = useDispatch();
  const { id } = useParams();

  const newsComt = useSelector((state) => state.commState.comments);

  const load = useSelector((state) => state.commState.load);

  useEffect(() => {
    dispatch(loadComt());
  }, [dispatch]);

  const removeComt = (id) => {
    dispatch(deleteComt(id));
  };

  return (
    <div>
      { newsComt.map((item) => {
            if (id === item.news) {
              return (
                <div >
                  <div>{item.text}</div>
                  <button disabled={load} onClick={()=> removeComt(item._id)}>X</button>
                </div>
              );
            }
          })}
    </div>
  );
};

export default NewsComt;
