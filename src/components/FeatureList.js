import React from 'react';
import { BlocksControls } from 'react-tinacms-inline';
import '../styles/features.css';
import { featureBlock } from './Feature';
import grid1 from '../image/grid1.png';
import grid2 from '../image/grid2.png';
import grid3 from '../image/grid3.png';
import grid4 from '../image/grid4.png';

function FeatureList({ index }) {
  return (
    <BlocksControls index={index} focusRing={{ offset: 0 }} insetControls>
      <div className="wrapper">
        <h1 style={{fontWeight: 'bold',textAlign : 'center'}}>Retailer Benefits</h1>
        <div className = 'feature-list'>
          <div className="feature">
            <img src={grid1} alt="" style={{height:'150px', width: '150px'}}/>
            <h3 style={{fontSize: 14}}>Save operating costs</h3>
          </div>
          <div className="feature">
          <img src={grid2} alt="" style={{height:'150px', width: '150px'}}/>
            <h3 style={{fontSize: 14}}>Allow for diversity & inclusion</h3>
          </div>
          <div className="feature">
          <img src={grid3} alt="" style={{height:'150px', width: '150px'}}/>
           <h3 style={{fontSize: 14}}> Attract newer generation audience</h3>
          </div>
          <div className="feature">
          <img src={grid4} alt="" style={{height:'150px', width: '150px'}}/>
            <h3 style={{fontSize: 14}}>Gather metadata for product development & marketing</h3>
          </div>
        </div>
      </div>
    </BlocksControls>
  );
}

const FEATURE_BLOCKS = {
  feature: featureBlock,
};

export const featureListBlock = {
  Component: FeatureList,
  template: {
    label: 'Feature List',
    defaultItem: {
      _template: 'features',
      features: [
        {
          _template: 'feature',
          heading: 'heading 1',
          supporting_copy: '',
          grid: "/images/grid1"
        },
        {
          _template: 'feature',
          heading: 'heading 2',
          supporting_copy: '',
          grid: "/images/grid1"
        },
        {
          _template: 'feature',
          heading: 'heading 3',
          supporting_copy: '',
          grid: "/images/grid1"
        },
        {
          _template: 'feature',
          heading: 'heading 4',
          supporting_copy: '',
          grid: "/images/grid1"
        },
      ],
    },
    fields: [],
  },
};
