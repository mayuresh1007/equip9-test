import React from 'react';
// import axios from 'axios';
import jwt_decode from 'jwt-decode';
import { update } from './UserFunctions'
import { Link } from 'react-router-dom'
class UpdateProfile extends React.Component{
    constructor(props) {
        super(props)
        this.state  ={
            first_name: '',
            last_name: '',
            email: '',
            mobile_number:'',
        }
    
        this.onChange = this.onChange.bind(this)
        this.onSubmit = this.onSubmit.bind(this)
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
      onChange(e) {
        this.setState({ [e.target.name]: e.target.value })
      }
      onSubmit(e) {
        e.preventDefault()
        const updateUser = {
            first_name: this.state.first_name,
            last_name: this.state.last_name,
            mobile_number: this.state.mobile_number,
            email: this.state.email,
          }

        update(updateUser).then(res => {
          console.log("from update compo", res)
        //   this.props.history.push(`/profile`)
        })
      }
    
      render() {
        return (
          <div className="container jumbotron">
            <div className="row">
              <div className="col-md-6 mt-2 mx-auto">
                <form noValidate onSubmit={this.onSubmit}>
                  <h1 className="h3 mb-3 font-weight-normal text-center">Update profile</h1>
                <Link to='/profile' >
                    <button className="btn btn btn-dark" >Profile</button>
                </Link>
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
                 
                  <button
                    type="submit"
                    className="btn btn btn-dark btn-block"
                  >
                    update
                  </button>
                </form>
              </div>
            </div>
          </div>
        )
      }
    }

export default UpdateProfile;

// const UpdateProfile = ({ userId }) => {
//   const [userData, setUserData] = useState({
//     firstName: '',
//     lastName: '',
//     email: '', 
//     mobile_number:'',
//   });
//   const [isLoading, setIsLoading] = useState(false);
//   const [errorMessage, setErrorMessage] = useState('');


//   useEffect(() => {
//     // Fetch user data from the server
//     const token = localStorage.usertoken
//     const decoded = jwt_decode(token)
//     setUserData({
//       first_name: decoded.first_name,
//       last_name: decoded.last_name,
//       email: decoded.email,
//       mobile_number: decoded.mobile_number
//     })
//   }, []);

//   const handleChange = event => {
//     setUserData({
//       ...userData,
//       [event.target.name]: event.target.value
//     });
//   };

   
//   const handleSubmit = async event => {
//     event.preventDefault();
//     setIsLoading(true);
//     try {
//       // Update user data on the server
//       const response = await axios.put(`http://localhost:5000/users/update`, userData);
//       setUserData(response.data);
//       setIsLoading(false);
//     } catch (error) {
//       setErrorMessage('Error updating user data');
//       setIsLoading(false);
//     }
//   };

//   return (
//     <form onSubmit={handleSubmit}>
//       {errorMessage && <div className="error">{errorMessage}</div>}
//       <label>
//         First Name:
//         <input
//           type="text"
//           name="first_name"
//           value={userData.first_name || ''}
//         //   value={this.state.fields.name || ''}
//           onChange={handleChange}
//         />
//       </label>
//       <label>
//         Last Name:
//         <input
//           type="text"
//           name="last_name"
//           value={userData.last_name || ''}
//           onChange={handleChange}
//         />
//       </label>
//       <label>
//         Email:
//         <input
//           type="email"
//           name="email"
//           value={userData.email || ''}
//         //   value={userData.email}
//           onChange={handleChange}
//         />
//       </label>
//       <button type="submit" disabled={isLoading}>
//         {isLoading ? 'Updating...' : 'Update'}
//       </button>
//     </form>
//   );
// };

// export default UpdateProfile;
