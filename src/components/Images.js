import React from 'react';
import { BlocksControls, InlineImage ,InlineTextarea} from 'react-tinacms-inline';
import '../styles/images.css';

function Images({ index }) {
  return (
    <BlocksControls index={index} focusRing={{ offset: 0 }} insetControls>
      <div className="wrapper">
        <div className="image-diptych">
          <InlineImage
            name="left.src"
            parse={(filename) => `${filename}`}
            uploadDir={() => '/'}
            previewSrc={(formValues) => `${formValues.blocks[index].left.src}`}
            focusRing={false}
          />
          <div style={{display : 'flex', flexDirection : 'column', justifyContent:'center'}}>
        <h1>
          <InlineTextarea name="right.headline" focusRing={false} />
        </h1>
        <p>
        <InlineTextarea name="right.subText" focusRing={false} />
        </p>
        </div>
      </div>
        </div>
    </BlocksControls>
  );
}

export const imagesBlock = {
  Component: Images,
  template: {
    label: 'Image Diptych',
    defaultItem: {
      _template: 'images',
      left: {
        src: '/ivan-bandura-unsplash-square.jpg',
        alt: 'ocean',
      },
      right : {
      headline: "Providing a Personalized & Diversified Retail Experience for Everyone",
      subText: 'We help apparel retailers by providing a virtual try-on solution for their customers to visualize their look and fit conveniently.'
      }
    },
    fields: [
      {
        name: 'left.src',
        label: 'Left-Hand Image',
        component: 'image',
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
