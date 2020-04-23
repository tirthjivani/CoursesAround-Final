import React from "react";
import "../styles/article.scss";

class Article extends React.Component {
  render() {
    return (
      <article className="article">
        <h3 className="article__category" style={{ color: this.props.color }}>
          {this.props.category}
        </h3>
        <h2 className="article__title">{this.props.title}</h2>
        <p className="article__excerpt">{this.props.excerpt}</p>
      </article>
    );
  }
}

export default Article;