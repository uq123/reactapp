import React from 'react';
// import ReactDOM from 'react-dom/client';

import 'bootstrap/dist/css/bootstrap.min.css';
// import 'bootstrap/dist/css/bootstrap.min.css';
class Signup extends React.Component{
    render(){
        
       return( 
       
           <div class="container-fluid" style={{msOverflowStyle:"none"}}>
               <div class="row">
                   <div class="col-sm-6">
                       <div class="container" style={{marginTop:"5%"}}>
                           <div class="header" style={{marginLeft:"20%"}}><img src='images/logo.png' height="150" width="170" /></div>
                           <form>
                           <div class="form-group">
                                   <label>Firstname</label><input type="text" className='form-control'/>
                               </div>
                               <div class="form-group">
                                   <label>Lastname</label><input type="text" className='form-control'/>
                               </div>
                               <div class="form-group">
                                   <label>Username</label><input type="text" className='form-control'/>
                               </div>
                               <div class="form-group">
                                   <label>Password</label><input type="password" className='form-control'/>
                               </div>

                               <div class="button" style={{textAlign:"center",marginTop:"2px"}}>
                               
                               
                               </div>
                           </form> 
                       </div> 
                    
                   </div>
                   <div class="col-sm-6" >
                       <div class="container" >
                           <img src='images/sideImage.jpg' height='100%' width='700px'/>
                       </div>
                   </div>
                </div>
           </div>
        
           
      
          )
    }
}
export default Signup;