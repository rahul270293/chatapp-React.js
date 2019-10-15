import React ,{Component} from 'react';
// import ReactDOM from 'react-dom'
import '../index.css'
import axios from 'axios'



class Login extends Component{
    constructor(props){
        super(props)
        this.state={
            email:'',
            password:''
            
        }
       this.signin = this.signin.bind(this)
       this.handleChange=this.handleChange.bind(this)


    }

    signin(e){
        e.preventDefault()
        const{email, password}= this.state
        // console.log('=========tanana',email,password)
        axios.post('http://localhost:5000/api/signin',{email:email, password:password}).then((response)=>{
            // console.log('respons====w==w=w=',response.data.token)
            if(response.data.status){
            //    console.log(typeof(Storage),'ddkkdkdd')
                 if(typeof(Storage) !== "undefined"){
                     localStorage.setItem('jwtToken', response.data.token)   
                 }
                 alert(response.data.message)
                 window.location="/home"
            }else{
                alert(response.data.message)
            }
        })
    }

    handleChange(e){
        e.preventDefault()
    //    console.log(e.target.name,'kkdkkdkd000dldld')
       this.setState({
        [e.target.name]:
        e.target.value
    })
    }

    render(){
        // console.log("=============",this.state)
        return(
         <div id = "box-container" className="a">
            <h1>LOGIN</h1>
            <input type="text" name="email" placeholder='Email' onChange= {this.handleChange} value={this.state.email} ></input>

            <br>
            </br>
            
            <input type="text" name='password' placeholder="Password" onChange={this.handleChange} value={this.state.password}></input>
            <br></br>
            <br></br>
            <button type="button" id="btn"  onClick={this.signin}>LOGIN</button>
            <br></br>
            <a href="/signup">SIGNUP</a>
        </div>
        )
    }

}





export default Login;