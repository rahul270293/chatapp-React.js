import React,{Component} from 'react';
import '../index.css'
import Axios from 'axios'



class Profile extends Component {
    constructor(props){
        super(props)
        this.state ={
            uname:'',
            uemail:''
        }

        this.profile = this.profile.bind(this)
        // this.logout= this.logout.bind(this)
    }
    componentWillMount(){
        this.profile()
    }

    profile(){
        // e.preventDefault()
        // console.log(e,'kfkfkkkf===ooo==oo==')
        Axios.defaults.headers.common['Authorization'] = localStorage.getItem('jwtToken')
        Axios.get('http://localhost:5000/api/profile').then((resp)=>{
            // console.log(resp.data,'===ooo====ooo====')
            this.setState({
                uname:resp.data.username,
                uemail:resp.data.useremail
            })
        })
    }

    logout(e){
        e.preventDefault()
        // console.log(e.target,'====oooooooo')
        Axios.defaults.headers.common['Authorization'] = localStorage.getItem('jwtToken')
        Axios.post('http://localhost:5000/api/signout').then((response)=>{
            
            localStorage.clear('jwtToken');
            // console.log('kdkkdkkdkkkskskksk',response.data, localStorage.clear('jwtToken'))
            if(response.data.status){
                alert(response.data.message)
                window.location.replace('/')

            }
        })


    }

    render(){
        return (
        <div id="box-container" className="a" onLoad={this.profile}>
            <button type="button" id="btn" onClick={this.logout}>LOGOUT</button>
            <div >
                <a href="/home">HOME</a>
                <h1>USER PROFILE</h1>

                name:<span name="uname">{this.state.uname}</span>
                <br>
                </br>
                email:<span name="uemail">{this.state.uemail}</span>

            </div>
        </div>
        )
    }
}

export default Profile;