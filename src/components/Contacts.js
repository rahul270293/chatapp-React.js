import React, {Component } from "react";
import Axios from "axios";



class Contact extends Component{
    constructor(props){
        super(props)
        this.state={
            name:'',
            email:'',
            number:'',
            contacts:[]
        }
        this.handleChange= this.handleChange.bind(this)
        this.saveContact =this.saveContact.bind(this);
        this.editcontact = this.editcontact.bind(this)
        this.profile = this.profile.bind(this)
        this.delete = this.delete.bind(this)
    }
     componentWillMount(){
         this.contactList()
     }
    saveContact(e){
        e.preventDefault()
        const{name,email,number} = this.state
        // console.log(name,email,number,'======alaakkakak')
        // console.log(localStorage.getItem('jwtToken'),'kskkkskaa======ooo')
        Axios.defaults.headers.common['Authorization'] = localStorage.getItem('jwtToken')
        Axios.post('http://localhost:5000/api/addContact',{name:name,email:email,number:number})
        .then((response)=>{
            // console.log(response.data,'aoooooooo====aoooaooao')
            if(response.data.status){
                this.contactList()
            }else{
                alert(response.data.message)
            }
        })
    }

    contactList(e){
        // e.preventDefault()
        //  let{len, name, email, number,admin}= this.state
        //  console.log(len)
        Axios.defaults.headers.common['Authorization'] = localStorage.getItem('jwtToken')
        Axios.post('http://localhost:5000/api/fetchContact')
        .then((response)=>{
            // console.log(response.data.contact,'=========tabagaggaggaga')
            this.setState({contacts:response.data.contact})
            // console.log(this.state.contacts,'lalalallallalal')
            

        })

    }

    
    editcontact=(e)=>{
        // console.log(e,'ldlldlldlld')
        
        

    }


    delete=(e)=>{
        //    console.log(e,'===p=p=p=p=p')
        let email = e
        // console.log('======dlldlld===',email)
        Axios.defaults.headers.common['Authorization'] = localStorage.getItem('jwtToken')
        Axios.post('http://localhost:5000/api/fetchContact',{email}).then((res)=>{
        //   console.log(res,'oooooo====ooooo')
        if(res.data.status){
            this.contactList()
            alert(res.data.message)
        }else{
            alert(res.data.message)
        }
        })
    }

    profile(e){
        e.preventDefault()
        window.location='/profile'
    }
    handleChange(e){
        e.preventDefault()
        // console.log(e.target.name,'tuututututuutututu')
        this.setState({
            [e.target.name]:e.target.value
        })
    }
    render(){
        // console.log(this.state,'djjjdjjdjjjdjjdj')
        return (
        <div>
            <h1>CONTACT</h1>
            <div>
                
                <input type="text" name="name" placeholder="NAME" onChange={this.handleChange} value={this.state.name}></input>
                <input type="text" name="email" placeholder="EMAIl" onChange={this.handleChange} value={this.state.email}></input>
                <input type="number" name="number" placeholder="Mobile" onChange={this.handleChange} value={this.state.number}></input>
                <button type="button" id="btn" onClick={this.saveContact}>ADD</button>
                <button type="button" id="btn" onClick={this.profile}>PROFILE</button>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
              <h2>Contact List</h2>
              <table width="100%">
                  <thead>
                      <tr>
                          <td><b>NAME</b></td>
                          <td><b>EMAIL</b></td>
                          <td><b>NUMBER</b></td>
                          <td><b>EDIT/UPDATE</b></td>
                          <td><b>DELETE</b></td>
                      </tr>
                  </thead>
                  <tbody className="contactTableBody">
                      {this.state.contacts.map((contacts, i)=>{

                       return(
                        <React.Fragment>
                       <tr>
                       <td className="row${i}" id="number${i}">{contacts.name}</td>
                       <td className="row${i}" id="number${i}" >{contacts.email}</td>
                       <td className='row${i}' id="number${i}">{contacts.number}</td>
                       
                       <td><button onClick={this.toggle} onClick={this.editcontact.bind(this,contacts)} >Edit</button></td>
                       <td><button onClick={this.delete.bind(this,contacts.email)}>Delete</button></td>
                   </tr>
                   </React.Fragment>
                       )
                      })}
                      
                  </tbody>

              </table>
            </div>
        </div>
        )
    }
}


export default Contact;