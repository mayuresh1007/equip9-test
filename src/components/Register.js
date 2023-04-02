import React, { Component } from 'react'
import { register } from './UserFunctions'

class Register extends Component {
  constructor() {
    super()
    this.state = {
      first_name: '',
      last_name: '',
      mobile_number: '',
      email: '',
      password: '',
      // file:'',
      // caption:'',
      errors: {}
    }
    this.onChange = this.onChange.bind(this)
    this.onSubmit = this.onSubmit.bind(this)
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value })
    // const file = event.target.files[0]
    //   setFile(file)
  }
  onSubmit(e) {
    e.preventDefault()

    const newUser = {
      first_name: this.state.first_name,
      last_name: this.state.last_name,
      mobile_number: this.state.mobile_number,
      email: this.state.email,
      password: this.state.password,
      file:this.state.file
    }
    
    // const formData = new FormData();
    // formData.append("image", file)
    // formData.append("caption", caption)
    // axios.post("/users/posts", formData, { headers: {'Content-Type': 'multipart/form-data'}})

    // const fileSelected = event => {
    //   const file = event.target.files[0]
    //   setFile(file)
    // }
    register(newUser).then(res => {
      console.log("from Regi compo", res)
      this.props.history.push(`/login`)
    })
  }

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-6 mt-2 mx-auto">
            <form noValidate onSubmit={this.onSubmit}>
              <h1 className="h3 mb-3 font-weight-normal">Register</h1>
              <div className="form-group">
                <label htmlFor="name">First name</label>
                <input
                  type="text"
                  className="form-control"
                  name="first_name"
                  placeholder="Enter your first name"
                  value={this.state.first_name}
                  onChange={this.onChange}
                />
              </div>
              <div className="form-group">
                <label htmlFor="name">Last name</label>
                <input
                  type="text"
                  className="form-control"
                  name="last_name"
                  placeholder="Enter your lastname name"
                  value={this.state.last_name}
                  onChange={this.onChange}
                />
              </div>
              <div className="form-group">
                <label htmlFor="name">Mobile number</label>
                <input
                  type="number"
                  className="form-control"
                  name="mobile_number"
                  placeholder="Enter your mobile number"
                  value={this.state.mobile_number}
                  onChange={this.onChange}
                />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email address</label>
                <input
                  type="email"
                  className="form-control"
                  name="email"
                  placeholder="Enter email"
                  value={this.state.email}
                  onChange={this.onChange}
                />
              </div>
              <div className="form-group">
                <label htmlFor="password">Password</label>
                <input
                  type="password"
                  className="form-control"
                  name="password"
                  placeholder="Password"
                  value={this.state.password}
                  onChange={this.onChange}
                />
              </div>
              {/* <div className="form-group">
                <label htmlFor="password">Photo</label>
                <input name="file" onChange={this.onChange} type="file" accept="image/*"></input>
                <input value={caption} onChange={this.onChange} type="text" placeholder='Caption'></input>
              </div> */}
              <button
                type="submit"
                className="btn btn btn-dark btn-block"
              >
                Register!
              </button>
            </form>
          </div>
        </div>
      </div>
    )
  }
}

export default Register
