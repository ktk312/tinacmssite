
import React from 'react';
import { BlocksControls, InlineImage ,InlineTextarea} from 'react-tinacms-inline';
import '../styles/careersection.css';

function CareerSection({ index }) {
  return (
    <div>
    <BlocksControls index={index} focusRing={{ offset: 0 }} insetControls>
      <div className="wrapper"  id="join">
      <h1 style={{textAlign : 'center'}}><InlineTextarea name="topText" focusRing={false} /></h1>
      <p style={{textAlign : 'center'}}><InlineTextarea name="topSubText" focusRing={false} /></p>
        <div className="image-diptych" style={{backgroundColor: '#4E2DC5', width:'100%'}}>
          <div style={{display : 'flex', flexDirection : 'column', justifyContent:'center'}}>
              <h1 style={{textAlign:'center', color :'#fff'}}><InlineTextarea name="right.headline" focusRing={false} /></h1>
              <p style={{textAlign:'center', color :'#fff'}}><InlineTextarea name="right.subText" focusRing={false} /></p>
              <p style={{textAlign:'center', color :'#fff',marginTop:'40px'}}><InlineTextarea name="right.desc" focusRing={false} /></p>
              <button style={{width:'40%', textAlign : 'center',display:'flex', alignSelf :'center',alignItems:'center', justifyContent:'center',marginTop:'40px', height:'50px'}}><InlineTextarea name="right.btnText" focusRing={false}/></button>
          </div>
          <InlineImage
            name="left.src"
            parse={(filename) => `${filename}`}
            uploadDir={() => '/'}
            previewSrc={(formValues) => `${formValues.blocks[index].left.src}`}
            focusRing={false}
          />
        </div>
        <div className="image-diptych" style={{backgroundColor: '#4E2DC5', marginTop:'20px'}}>
          <div style={{display : 'flex', flexDirection : 'column', justifyContent:'center'}}>
              <h1 style={{textAlign:'center', color :'#fff'}}><InlineTextarea name="secondright.headline" focusRing={false} /></h1>
              <p style={{textAlign:'center', color :'#fff'}}><InlineTextarea name="secondright.subText" focusRing={false} /></p>
              <p style={{textAlign:'center', color :'#fff',marginTop:'40px'}}><InlineTextarea name="secondright.desc" focusRing={false} /></p>
              <button style={{width:'40%', textAlign : 'center',display:'flex', alignSelf :'center',alignItems:'center', justifyContent:'center', marginTop:'40px', height:'50px'}}><InlineTextarea name="secondright.btnText" focusRing={false}/></button>
          </div>
          <InlineImage
            name="secondleft.src"
            parse={(filename) => `${filename}`}
            uploadDir={() => '/'}
            previewSrc={(formValues) => `${formValues.blocks[index].secondleft.src}`}
            focusRing={false}
          />
        </div>
      </div>
    </BlocksControls>
    </div>
  );
}

export const careerSectionBlock = {
  Component: CareerSection,
  template: {
    label: 'Image Diptych',
    defaultItem: {
      template: "section6",
      topText:"Open Positions",
      topSubText: "Join our team of creative geeks!",
      left: {
        src: "/images/coding.png",
        alt: "ocean"
      },
      right: {
        headline : "Software Engineer",
        subText : "Part Time and Remote",
        desc:"Experienced with Python for Machine Learning applications & Computer Vision",
        btnText:"Get in Touch"
      },
      secondleft: {
        src: "/images/advisor.png",
        alt: "ocean"
      },
      secondright: {
        headline : "Advisor",
        subText : "Part Time and Flexible",
        desc:"Executive experience in apparel retail",
        btnText:"Get in Touch"
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
        name: 'secondleft.src',
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
