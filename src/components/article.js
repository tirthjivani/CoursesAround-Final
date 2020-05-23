import React from "react";
import "../styles/article.css";

class Article extends React.Component {
  render() {
    return (
      <div className="article">
        <h3 className="article_category" style={{ color: this.props.color }}>
          {this.props.category}
        </h3>
        <h2 className="article_title">{this.props.title}</h2>
        <p className="article_excerpt">{this.props.excerpt}</p>
      </div>
    );
  }
}

export default Article;