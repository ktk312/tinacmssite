import React from 'react';
import { BlocksControls, InlineTextField } from 'react-tinacms-inline';
import '../styles/form2.css';

class  Form2 extends React.Component{
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
                    <div className="wrapper wrapper--narrow">
                    <form style={{display : 'flex', alignItems: 'center', justifyContent : 'center', flexDirection: 'column', width :'100%'}}>
                         <h1 style={{ color : '#000', display: 'flex', alignItems : 'center', justifyContent : 'center'}}>Questions? Let us know!</h1>
                         <div style={{width: '50%', marginTop:'10px'}}>
                              <input
                              type='text'
                              name='username'
                              placeholder='Name'
                              onChange={this.myChangeHandler}
                              style={{ backgroundColor : '#fff' , border : 'none', color : '#000', width: '100%', height: '30px'}}
                              />
                         </div>
                         <div style={{width: '50%', marginTop:'10px'}}>
                              <input
                              type='text'
                              name='username'
                              placeholder='Email'
                              onChange={this.myChangeHandler}
                              style={{ backgroundColor : '#fff' , border : 'none', color : '#000', width: '100%', height: '30px'}}
                              />
                         </div>
                         <div style={{width: '50%', marginTop:'10px'}}>
                              <input
                              type='text'
                              name='username'
                              placeholder='Subject'
                              onChange={this.myChangeHandler}
                              style={{ backgroundColor : '#fff' , border : 'none', color : '#000', width: '100%', height: '30px'}}
                              />
                         </div>
                         <div style={{width: '50%', marginTop:'10px'}}>
                              <textarea
                              type='text'
                              name='username'
                              placeholder='Type Your Message Here...'
                              onChange={this.myChangeHandler}
                              style={{ backgroundColor : '#fff' , border : 'none', color : '#000', width: '100%', height: '100px'}}
                              />
                         </div>
                         <div style={{width: '30%', marginTop:'10px'}}>
                              <button style={{ backgroundColor : '#000',color:'#fff', height : '40px', width:'99%', display : 'flex', alignItems : 'center', justifyContent : 'center', border : 'none'}}>Submit</button>
                         </div>
                    </form>
                    </div>
               </div>
    </BlocksControls>
  );
}
}

export const form2Block = {
  Component: Form2,
  template: {
    label: 'Form2',
    defaultItem: {
    },
    fields: [],
  },
};
