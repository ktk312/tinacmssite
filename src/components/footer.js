import React from 'react';
import { BlocksControls } from 'react-tinacms-inline';
import '../styles/footer.css';
import { FaFacebookF , FaLinkedinIn } from "react-icons/fa";

class  Footer extends React.Component{
     constructor(props){
          super(props);
          this.state = {
               username: '',
               age: null,
             };
     }

     myChangeHandler = (event) => {
          let nam = event.target.name;
          let val = event.target.value;
          this.setState({[nam]: val});
        }

     render(){
     return (
          <BlocksControls index={this.props.index} focusRing={{ offset: 0 }} insetControls>
               <div className="paragraph__background" id="contact">
                    <div className="wrapper wrapper--narrow" >
                    <form style={{display : 'flex', alignItems: 'center', justifyContent : 'center', flexDirection: 'column', width :'100%'}}>
                         <p style={{ color : '#000', fontSize:14, display: 'flex', alignItems : 'center', justifyContent : 'center'}}>Made in Brooklyn, NY</p>
                         <div style={{display: 'flex', flexDirection: 'row', alignItems:'center', justifyContent: 'center', marginTop:'30px', marginBottom:'30px'}}>
                              <a href="#facebook" className="iconlink">
                                  <FaFacebookF/>
                              </a>
                              <a href="#linkdin" className="iconlink">
                                   <FaLinkedinIn/>
                              </a>
                         </div>
                         <p style={{ color : '#000',fontSize:14 ,display: 'flex', alignItems : 'center', justifyContent : 'center',marginTop:'40px'}}>©2020 by Proneer</p>
                    </form>
                    </div>
               </div>
    </BlocksControls>
  );
}
}

export const footerBlock = {
  Component: Footer,
  template: {
    label: 'Footer',
    defaultItem: {
    },
    fields: [],
  },
};
