import React from "react";
import Article from "./Article";
import "../styles/article.scss";

class Blogs extends React.Component {
  //   getInitialState() {
  //     return {
  //       articles: {
  //         article: {
  //           color: "FEC006",
  //           title: "Snow in Turkey Brings Travel Woes",
  //           thumbnail: "",
  //           category: "News",
  //           excerpt:
  //             "Heavy snowstorm in Turkey creates havoc as hundreds of villages left without power, and hundreds of roads closed",
  //         },
  //         "article-1": {
  //           color: "2196F3",
  //           title: "Landslide Leaving Thousands Homeless",
  //           thumbnail: "",
  //           category: "News",
  //           excerpt:
  //             "An aburt landslide in the Silcon Valley has left thousands homeless and on the streets.",
  //           date: new Date(),
  //         },
  //         "article-2": {
  //           color: "FE5621",
  //           title: "Hail the size of baseballs in New York",
  //           thumbnail: "",
  //           category: "News",
  //           excerpt:
  //             "A rare and unexpected event occurred today as hail the size of snowball hits New York citizens.",
  //           date: new Date(),
  //         },
  //         "article-3": {
  //           color: "673AB7",
  //           title: "Earthquake destorying San Fransisco",
  //           thumbnail: "",
  //           category: "News",
  //           excerpt:
  //             "A massive earthquake just hit San Fransisco leaving behind a giant crater.",
  //           date: new Date(),
  //         },
  //       },
  //     };
  //   }

  render() {
    return (
      <div className="app">
        <h1>Blogs</h1>
        <br />
        <div className="container">
          <div className="column">
            <Article
              color="FEC006"
              title="Blog A"
              category="NEWS"
              excerpt="Heavy snowstorm in Turkey creates havoc as hundreds of villages left without power, and hundreds of roads closed"
            />
          </div>
          <div className="column">
            <Article
              color="673AB7"
              title="Blog B"
              category="NEWS"
              excerpt="Heavy snowstorm in Turkey creates havoc as hundreds of villages left without power, and hundreds of roads closed"
            />
          </div>
          <div className="column">
            <Article
              color="673AB7"
              title="Blog C"
              category="News"
              excerpt="Heavy snowstorm in Turkey creates havoc as hundreds of villages left without power, and hundreds of roads closed"
            />
          </div>
        </div>
      </div>
    );
  }
}

export default Blogs;
