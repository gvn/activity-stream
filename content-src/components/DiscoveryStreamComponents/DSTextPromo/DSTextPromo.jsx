/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this file,
 * You can obtain one at http://mozilla.org/MPL/2.0/. */

import { ImpressionStats } from "../../DiscoveryStreamImpressionStats/ImpressionStats";
import React from "react";
import { SafeAnchor } from "../SafeAnchor/SafeAnchor";

export class DSTextPromo extends React.PureComponent {
  render() {
    console.log(this.props.campaignId);
    return (
      <div className="ds-text-promo">
        <img src={this.props.image} alt={this.props.alt_text} />
        <div className="text">
          <h3>
            {`${this.props.header}\u2003`}
            <SafeAnchor
              className="ds-chevron-link"
              dispatch={this.props.dispatch}
              onLinkClick={this.onLinkClick}
              url={this.props.cta_url}
            >
              {this.props.cta_text}
            </SafeAnchor>
          </h3>
          <p className="subtitle">{this.props.subtitle}</p>
        </div>
        <ImpressionStats
          campaignId={this.props.campaignId}
          rows={[
            {
              id: this.props.id,
              pos: this.props.pos,
              shim: this.props.shim && this.props.shim.impression,
            },
          ]}
          dispatch={this.props.dispatch}
          source={this.props.type}
        />
      </div>
    );
  }
}
