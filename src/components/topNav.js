import React from 'react';
import { InlineTextarea, BlocksControls } from 'react-tinacms-inline';
import '../styles/topnav.css';
import logo from '../image/logo.png';
export function Hero({ text_color, background_color, align , src}) {
  
  return (
    <div
      className="topnav"
      style={{
        color: text_color || '#000',
        backgroundColor: background_color || '#fff',
        textAlign: align,
        justifyContent: align === 'left' ? 'start' : align,
      }}
    >
        
        <p className="navitem logo">
          <img src={logo} alt="Proneer"/>
        </p>
        <p></p>
        <div className="linksgrid">
        <p className="navitemlink">
           <a href="#about" className="textdecor" ><InlineTextarea name="link1text" focusRing={false} /></a>
        </p>
        <p className="navitemlink">
          <a href="#request" className="textdecor"><InlineTextarea name="link2text" focusRing={false} /></a>
        </p>
        <p className="navitemlink">
          <a href="#join" className="textdecor"><InlineTextarea name="link3text" focusRing={false} /></a>
        </p>
        <p className="navitemlink">
          <a href="#contact" className="textdecor"><InlineTextarea name="link4text" focusRing={false} /></a>
        </p>
        </div>
    </div>
  );
}

export const topnavBlock = {
  Component: ({ index, data }) => (
    <BlocksControls index={index} focusRing={{ offset: 0 }} insetControls>
      <Hero {...data} />
    </BlocksControls>
  ),
  template: {
    label: 'topnav',
    defaultItem: {
      headline: 'Suspended in a Sunbeam',
      subtext: 'Dispassionate extraterrestrial observer',
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
