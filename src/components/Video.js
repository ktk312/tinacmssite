import React from 'react';
import { InlineTextarea, BlocksControls } from 'react-tinacms-inline';
import '../styles/video.css';
import ReactPlayer from 'react-player';
export function Video({ text_color, background_color, align,src }) {
  
  return (
    <div
      className="hero"
      style={{
        color: text_color || '#000',
        backgroundColor: background_color || 'aliceblue',
        textAlign: align,
        justifyContent: align === 'left' ? 'start' : align,
      }}
    >
      <div className="wrapper wrapper--narrow">
        <h1>
          <InlineTextarea name="headline" focusRing={false} />
        </h1>
        <p>
          <InlineTextarea name="subtext" focusRing={false} />
        </p>
      </div>
      <div className='player-wrapper'>
            <ReactPlayer
            className='react-player fixed-bottom'
            url= '/video/howitworkvideo.mp4'
            width='70%'
            height='60%'
            controls = {true}
            loop = {true}
            playing = {true}

            />
        </div>
    </div>
  );
}

export const videoBlock = {
  Component: ({ index, data }) => (
    <BlocksControls index={index} focusRing={{ offset: 0 }} insetControls>
      <Video {...data} />
    </BlocksControls>
  ),
  template: {
    label: 'Video',
    defaultItem: {
      headline: 'How it works',
      subtext: 'Through our proprietary Machine Learning and Computer Vision technology, customers are able see how products look on their bodies instantly by uploading a full-body image.',
      video:'/video/howitworkvideo.mp4',
      background_color: '#051e26',
      text_color: '#fffaf4',
      align: 'center',
    },
    fields: [
      {
        name: 'text_color',
        label: 'Text Color',
        component: 'select',
        options: ['white', 'black'],
      },
      {
        name: 'align',
        label: 'Alignment',
        component: 'select',
        options: ['center', 'left'],
      },
      {
        name: 'background_color',
        label: 'Background Color',
        component: 'color',
        widget: 'block',
        colors: ['#051e26', '#f2dfc6', '#cfdcc8', '#ebbbbb', '#8a1414'],
      },
    ],
  },
};
