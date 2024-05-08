import { useEffect, useState } from "react";
import axios from "axios";
import NewsItem from "./NewsItem";

function News(props) {
  let [nitem, setnitem] = useState([]);

  useEffect(() => {
    let result = axios.get(
      `https://newsapi.org/v2/everything?q=${props.category}&language=hi&apiKey=dac45d164a5a49c4a9c07bdbbdee129c`
    );
    // console.log(result);
    result.then((res) => {
      // console.log(res.data.articles);
      setnitem(res.data.articles);
    });
  }, [props.category]);
  // console.log(nitem);

  return (
    <>
      {nitem ? (
        <div class="row row-cols-1 row-cols-md-2 row-cols-lg-3 row-cols-xl-4 g-20">
          {nitem.map((iteam, index) => {
            return (
              <NewsItem
                key={index}
                title={iteam.title}
                dec={iteam.description}
                data={iteam.content}
                idata={iteam.urlToImage}
                url={iteam.url}
              />
            );
          })}
        </div>
      ) : (
        <p>no data</p>
      )}
    </>
  );
}

export default News;
