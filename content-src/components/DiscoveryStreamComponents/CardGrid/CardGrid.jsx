import {DSCard} from "../DSCard/DSCard.jsx";
import React from "react";

export class CardGrid extends React.PureComponent {
  render() {
    const {data} = this.props;

    // Handle a render before feed has been fetched by displaying nothing
    if (!data) {
      return (
        <div />
      );
    }

    let cards = data.recommendations.slice(0, this.props.items).map((rec, index) => (
      <DSCard
        key={`dscard-${index}`}
        image_src={rec.image_src}
        title={rec.title}
        excerpt={rec.title}
        url={rec.url}
        id={rec.id}
        index={index}
        type={this.props.type}
        dispatch={this.props.dispatch}
        source={rec.domain} />
    ));

    return (
      <div>
        <div className="ds-header">{this.props.title}</div>
        <div className={`ds-card-grid ds-card-grid-count-${this.props.items}`}>
          {cards}
        </div>
      </div>
    );
  }
}

CardGrid.defaultProps = {
  style: `border`,
  items: 4, // Number of stories to display
};
