import React from "react";
import { getPictures } from "../../services";
import { useEffect } from "react";
import { useState } from "react";
import styles from "./PicturesSlider.module.css";

function PicturesSlider() {
  const [datas, setDatas] = useState("");
  const [page, setPage] = useState(0);

  useEffect(() => {
    async function fetchData() {
      const response = await getPictures();
      console.log(response.data[0].urls.small);
      setDatas(response.data);
    }
    fetchData();
  }, [page]);
  console.log(datas);

  return (
    <div className={styles.div}>
      <div style={{ textAlign: "center" }}>
        <div className={styles.img_div}>
          <img className={styles.img} src={datas[page]?.urls?.small}></img>
        </div>

        <div className={styles.btns_div}>
          <button
            className={styles.btns}
            onClick={() => setPage((prev) => (prev <= 1 ? prev : prev - 1))}
          >
            prev
          </button>
          <div className={styles.img_desc}>
            <span>{datas[page]?.slug}</span>
          </div>

          <button
            className={styles.btns}
            onClick={() =>
              setPage((prev) => (prev < datas.length - 1 ? prev + 1 : prev))
            }
          >
            next
          </button>
        </div>
      </div>
    </div>
  );
}

export default PicturesSlider;
