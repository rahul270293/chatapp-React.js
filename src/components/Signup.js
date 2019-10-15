import React,{Component} from 'react'
import '../index.css'
import axios from 'axios';
// import $ from "jquery";



class Signup extends Component{

    constructor(props){
        super(props)
        this.state ={
            name:'',
            email:'',
            password:'',
            cpassword:''
        }
        this.signup = this.signup.bind(this)
        this.handleChange= this.handleChange.bind(this)
    }

    signup(e){
       e.preventDefault()
       const { name, email,password, cpassword} = this.state;
    //    console.log(name,email,password,cpassword,"kdkkdkdkkdkdkkdkd")
    axios.post('http://localhost:5000/api/signup', {name:name,email:email,password:password,cpassword:cpassword})
    .then((doc)=>{
        // console.log(doc.data,"ooo00o0o0o0o00ommccn")
        if(doc.data.status){
            alert(doc.data.message);
            window.location="/"
        }else{
            alert(doc.data.message)
        }
    }).catch((err)=>{
        console.log(err)
    })

    }

    handleChange(e){
        e.preventDefault()

        // console.log('kdkkdkkdkdkkdkskksksk',e.target.value)
        this.setState({
            [e.target.name]:
            e.target.value
        })
        
    }


    render(){
        return (
        <div id="box-container" className="a">
            <h1>SIGNUP</h1>
            
            <input type='text' name="name" placeholder="NAME"   onChange= {this.handleChange} value={this.state.name} ></input>
            <br>
            </br>
            <input type="text" name="email" placeholder="Email" onChange= {this.handleChange} value={this.state.email}></input>
            <br>
            </br>
            <input type='text' name="password" placeholder="PASSWORD" onChange= {this.handleChange} value={this.state.password}></input>
            <br>
            </br>
            <input type="text" name="cpassword" placeholder="CONFIRM PASSWORD" onChange= {this.handleChange} value={this.state.cpassword}></input>
            <br>
            </br>
            <button type="button" id="password" onClick={this.signup}>Signup</button>
            <a href="/">signin</a>
        </div>
        )
    }
}

export default Signup;