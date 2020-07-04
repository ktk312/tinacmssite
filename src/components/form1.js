import React from 'react';
import { BlocksControls } from 'react-tinacms-inline';
import '../styles/form1.css';

class  Form1 extends React.Component{
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
               <div className="form1" id="request">
                    <div className="wrapper wrapper--narrow">
                    <form style={{display : 'flex', alignItems: 'center', justifyContent : 'center', flexDirection: 'column', width :'100%'}}>
                         <h1 style={{ color : '#fff', display: 'flex', alignItems : 'center', justifyContent : 'center'}}>Request A Demo</h1>
                         <div style={{width: '100%', marginTop:'10px'}}>
                              <p style={{color : '#fff', textAlign: 'left'}}>Name</p>
                              <input
                              type='text'
                              name='username'
                              onChange={this.myChangeHandler}
                              style={{ backgroundColor : 'transparent' , border : 'none', color : '#fff', width: '100%', height: '30px'}}
                              />
                              <p style={{ height : '1px' , backgroundColor : '#fff', width: '100%' }}></p>
                         </div>
                         <div style={{width: '100%', marginTop:'10px'}}>
                              <p style={{color : '#fff', textAlign: 'left'}}>Email</p>
                              <input
                              type='text'
                              name='username'
                              onChange={this.myChangeHandler}
                              style={{ backgroundColor : 'transparent' , border : 'none', color : '#fff', width: '100%', height: '30px'}}
                              />
                              <p style={{ height : '1px' , backgroundColor : '#fff', width: '100%' }}></p>
                         </div>
                         <div style={{width: '100%', marginTop:'10px'}}>
                              <p style={{color : '#fff', textAlign: 'left'}}>Company/Store Name</p>
                              <input
                              type='text'
                              name='username'
                              onChange={this.myChangeHandler}
                              style={{ backgroundColor : 'transparent' , border : 'none', color : '#fff', width: '100%', height: '30px'}}
                              />
                              <p style={{ height : '1px' , backgroundColor : '#fff', width: '100%' }}></p>
                         </div>
                         <div style={{width: '100%', marginTop:'10px'}}>
                              <p style={{color : '#fff', textAlign: 'left'}}>Website</p>
                              <input
                              type='text'
                              name='username'
                              onChange={this.myChangeHandler}
                              style={{ backgroundColor : 'transparent' , border : 'none', color : '#fff', width: '100%', height: '30px'}}
                              />
                              <p style={{ height : '1px' , backgroundColor : '#fff', width: '100%' }}></p>
                         </div>
                         <div style={{width: '100%', marginTop:'10px'}}>
                              <p style={{color : '#fff', textAlign: 'left'}}>What time zone are you in?</p>
                              <input
                              type='text'
                              name='username'
                              onChange={this.myChangeHandler}
                              style={{ backgroundColor : 'transparent' , border : 'none', color : '#fff', width: '100%', height: '30px'}}
                              />
                              <p style={{ height : '1px' , backgroundColor : '#fff', width: '100%' }}></p>
                         </div>
                         <div style={{width: '100%', marginTop:'10px'}}>
                              <p style={{color : '#fff', textAlign: 'left'}}>Tell us more about your needs...</p>
                              <input
                              type='text'
                              name='username'
                              onChange={this.myChangeHandler}
                              style={{ backgroundColor : 'transparent' , border : 'none', color : '#fff', width: '100%', height: '100px'}}
                              />
                              <p style={{ height : '1px' , backgroundColor : '#fff', width: '100%' }}></p>
                         </div>
                         <div style={{width: '100%', marginTop:'10px'}}>
                              <button style={{ backgroundColor : '#fff', height : '40px', width:'99%', display : 'flex', alignItems : 'center', justifyContent : 'center', border : 'none'}}>Submit</button>
                         </div>
                    </form>
                    </div>
               </div>
    </BlocksControls>
  );
}
}

export const formBlock = {
  Component: Form1,
  template: {
    label: 'Form1',
    defaultItem: {
    },
    fields: [],
  },
};
