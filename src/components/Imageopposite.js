
import React from 'react';
import { BlocksControls, InlineImage ,InlineTextarea} from 'react-tinacms-inline';
import '../styles/Imageopposite.css';
import background from '../image/ackground.jpg'

function Imageopposite({ index }) {
  return (
    <div style={{backgroundImage: `url(${background})`}}>
    <BlocksControls index={index} focusRing={{ offset: 0 }} insetControls>
      <div className="wrapper" >
        <div className="image-diptych">
          <div style={{display : 'flex', flexDirection : 'column', justifyContent:'center'}}>
              <h1><InlineTextarea name="right.headline" focusRing={false} /></h1>
              <p><InlineTextarea name="right.subText" focusRing={false} /></p>
              <ul>
              <h2><li><InlineTextarea name="right.listitem1" focusRing={false} /></li></h2>
              <h2><li><InlineTextarea name="right.listitem2" focusRing={false} /></li></h2>
              <h2><li><InlineTextarea name="right.listitem3" focusRing={false} /></li></h2>
              </ul>
          </div>
          <InlineImage
            name="left.src"
            parse={(filename) => `${filename}`}
            uploadDir={() => '/'}
            previewSrc={(formValues) => `${formValues.blocks[index].left.src}`}
            focusRing={false}
          />
        </div>
      </div>
    </BlocksControls>
    </div>
  );
}

export const imagesoppositeBlock = {
  Component: Imageopposite,
  template: {
    label: 'Image Diptych',
    defaultItem: {
      _template: 'images',
      left: {
        src: '',
        alt: 'ocean',
      },
      right : {
        "headline" : "Proneer Solutions",
        "subText" : "Our technology helps both online & offline retailers with retail solutions  that include:",
        "listitem1" : "Virtual Try-On",
        "listitem2" : "Virtual Setting Curation",
        "listitem3" : "Body Type Analysis & Style Recommendations"
      }
    },
    fields: [
      {
        name: 'left.src',
        label: 'Left-Hand Image',
        component: 'imageopposite',
        parse: (filename) => `/${filename}`,
        uploadDir: () => '/',
        previewSrc: (formValues, input) => {
          const index = input.field.name.split('.')[1];
          const currentBlockImage = formValues.blocks[index].left.src;
          return currentBlockImage;
        },
        focusRing: false,
      },
      {
        name: 'left.alt',
        label: 'Left-Hand Image Alt Text',
        component: 'text',
      },
      {
        name: 'right.headline',
        label: 'Text Color',
        component: 'select',
        options: ['white', 'black'],
      },
      {
        name: 'right.subText',
        label: 'Text Color',
        component: 'select',
        options: ['white', 'black'],
      },
    ],
  },
};
