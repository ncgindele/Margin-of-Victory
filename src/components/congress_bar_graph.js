import React, { Component } from 'react';
import {getBarData} from '../data/serve_data.js';
import {
  FlexibleWidthXYPlot,
  XAxis,
  YAxis,
  HorizontalGridLines,
  VerticalGridLines,
  VerticalBarSeries
} from 'react-vis';

export default class congressBarGraph extends Component {
  constructor(props) {
    super(props);
  }


    render(props) {
      const republican = {label: 'Republican',
                        color: '#d30b0d',
                        data: getBarData('Republican', this.props.currentState, this.props.currentDistrict)};
      const democrat = {label: 'Democrat',
                        color: '#428bca',
                        data: getBarData('Democrat', this.props.currentState, this.props.currentDistrict)};
      const independent = {label: 'Independent',
                        color: '#555555',
                        data: getBarData(null, this.props.currentState,
                           this.props.currentDistrict)};
      const data = [republican, democrat, independent];

      return (
        <div className="bargraph-wrapper">
          <h3 className="text-center">Congressional Races Ordered<br /> by Margin of Victory</h3>
          <FlexibleWidthXYPlot
            Xtype="literal"
            stackBy="y"
            xDistance={-1}
            height={380}
            xDomain={[630, -7]}>
            <HorizontalGridLines />
            <YAxis title="Margin of Victory (%)" tickValues={[20, 40, 60, 80, 100]} />
            {data.map((series) => {
              return <VerticalBarSeries cluster="1" key={series.label} data={series.data} color={series.color} />;
            })
          }
        </FlexibleWidthXYPlot>
        <p className="bottom-note text-center">* As determined by margin of victory (%) averaged across all state races</p>
        </div>
      );
    }
  }
