import React from 'react';
// import ReactDOM from 'react-dom/client';
import ErrorBoundary from './ErrorBoundary';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
import Signup from "./Signup";
import App from "./App";
import {Routes,Route,BrowserRouter as Router,Link,Redirect} from 'react-router-dom';
import { withRouter } from "react-router-dom";
// import 'bootstrap/dist/css/bootstrap.min.css';
class Login extends React.Component{
    state={
        Email:"",
        Password:"",
        Email_error:"",
        Password_error:"",
        isLoggedIn:""

    }
    handleEmail=(e)=>{
        this.setState({Email:e.target.value})
        const Email=new RegExp(
            '^[a-zA-Z0-9._:$!%-]+@[a-zA-Z0-9.-]+.[a-zA-Z]$');
            
            if(Email.test(this.state.Email)==false){
                this.setState({Email_error:"Email must be a valid email"});
            }
            else if(this.state.Email===" "){
                this.setState({Email_error:"Email field is required"}); 
            }
            else{
                this.setState({Email_error:""}); 
            }
    }
   handlePassword=(e)=>{
       this.setState({Password:e.target.value});
       if(this.state.Password.length<4){
           this.setState({Password_error:"password must be atleast 8 character long"})
       }
       else{
        this.setState({Password_error:" "})
       }
   }
  
   handleSubmit=()=>{
    //    const  headers = {
        
       
        
    //   }
       const user={
           Email:this.state.Email,
           password:this.state.Password,
           'Content-Type': 'application/json',
           method:'post'
       }
       axios.post('http://127.0.0.1:8000/api/Login',{user}).then((res)=>{
           console.log(res)
           if(res.data.data==null||res.data.data==''){
           this.setState({isLoggedIn:1})
            
               
           }
           else{
            this.setState({isLoggedIn:0})
           }
       }).catch((err)=>{
           console.log(err)
       });
     
    //    <Router>    
    //         <Route
    //     exact
    //     path="/"
    //     render={() => {
    //         return (
    //           this.state.isLoggedIn ?
    //           return(<Redirect to="/Signup" /> : <Redirect to="/" />)
              
    //         );
    //     }}
    //   />
    //    <Route exact path="/Signup" component={Signup} />
    //    <Route exact path="/" component={Login} />
    //    </Router>   
           
   
}
   
    render(){ 
        if(this.state.isLoggedIn==0){
            console.log("rr");
            return(<Router><Route path="/Signup" element={Signup}/><Redirect to='/Signup' /></Router>);
        }
        else{
            console.log("rr");
            return(<Router><Redirect to='/' Component={<Login/>}/></Router>);
        }

      
        
         
              
                   
               
              
             
             
              
          
         
        




       return(
      
           
        <div class="container-fluid" style={{msOverflowStyle:"none"}}>
                   
            
                             
               <div class="row">
                   <div class="col-sm-6">
                       <div class="container" style={{marginTop:"5%"}}>
                           <div class="header" style={{textAlign:"center"}}><img src='images/logo.png' height="150" width="170" alt="logo" /></div>
                           <form >
                               <div class="form-group">
                                   <label>Email</label><input type="text" name="Email" className='form-control' onChange={this.handleEmail}/>
                               </div>
                               <span style={{color:"red"}}>{this.state.Email_error}</span>
                               <div class="form-group">
                                   <label>Password</label><input type="password" name="password" className='form-control' onChange={this.handlePassword}/>
                               </div> 
                               <span  style={{color:"red"}}>{this.state.Password_error}</span>
                               <div class="button" style={{textAlign:"center",marginTop:"2px"}}>
                              <button  type="button" class="btn btn-success " onClick={this.handleSubmit}>Login</button>
                               
                                
                               </div>
                             
                            
                              
                                
                            
                                
                           </form> 
                       </div> 
                    
                   </div>
                   <div class="col-sm-6" >
                       <div class="container" >
                           <img src='images/sideImage.jpg' height='100%' width='700px' alt="cactus plant"/>
                       </div>
                   </div>
                </div>
               
           </div>
                   
           

      
          )
    }
}

export default Login;
