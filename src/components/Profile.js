import React, { Component } from 'react'
import jwt_decode from 'jwt-decode'
import Greeting from './Greeting'
import { Link } from 'react-router-dom'

class Profile extends Component {
  constructor() {
    super()
    this.state = {
      first_name: '',
      last_name: '',
      email: '',
      mobile_number:'',
      errors: {}
    }
  }

  componentDidMount() {
    const token = localStorage.usertoken
    const decoded = jwt_decode(token)
    console.log(decoded)
    this.setState({
      first_name: decoded.first_name,
      last_name: decoded.last_name,
      email: decoded.email,
      mobile_number: decoded.mobile_number
    })
  }
   
  render() {
    return (
      <div className="container">
        <div className="jumbotron mt-5">
          <div className="col-sm-8 mx-auto">
            <h1 className="text-center">PROFILE</h1>
          </div>
          <div className='container text-center'>
           <Greeting/>
          </div>

          <table className="table col-md-6 mx-auto">
             <tbody>
              <tr>
                <td>Fist Name</td>
                <td>{this.state.first_name}</td>
              </tr>
              <tr>
                <td>Last Name</td>
                <td>{this.state.last_name}</td>
              </tr>
              <tr>
                <td>Email</td>
                <td>{this.state.email}</td>
              </tr>
              <tr>
                <td>Mobile Number</td>
                <td>{this.state.mobile_number}</td>
              </tr>
            </tbody>
          </table>
          <hr />
          {/* <UpdateProfile/> */}
          <Link to='/update' >
            <button className="btn btn btn-dark" >Update</button>
          </Link>
        </div>
      </div>
    )
  }
}

export default Profile
