import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'
import { API } from '../Api';
import './Signup.css';
import 'bootstrap/dist/css/bootstrap.min.css';

class Signup extends Component {
	constructor() {
		super()
		this.state = {
			username: '',
			password: '',
			confirmPassword: '',
			redirectTo: null

		}
		this.handleSubmit = this.handleSubmit.bind(this)
		this.handleChange = this.handleChange.bind(this)
	}
	handleChange(event) {
		this.setState({
			[event.target.name]: event.target.value
		})
	}

	handleSteamSubmit(event) {
		API.post(`/login`, {
			
		})
	}

	handleSubmit(event) {
		console.log('sign-up handleSubmit, username: ')
		console.log(this.state.username)
		event.preventDefault()

		//request to server to add a new username/password
		API.post(`/signup`, {
            username: this.state.username,
            firstname: this.state.firstname,
            lastname: this.state.lastname,
            email: this.state.email,
			password: this.state.password,
			confirmPassword: this.state.confirmPassword
        })
			.then(response => {
				console.log(response)
				if (!response.data.errmsg && (this.state.password === this.state.confirmPassword)) {
					console.log('successful signup')
					this.setState({ //redirect to login page
						redirectTo: '/login'
					})
				} else {
					console.log('username already taken')
				}
			}).catch(error => {
				console.log('signup error: ')
				console.log(error)

			})
	}


render() {
	if (this.state.redirectTo) {
            return <Redirect to={{ pathname: this.state.redirectTo }} />
        } else {
			return (
				<div className="SignupForm">
					<h4>Sign up</h4>
					<form className="form-horizontal">
						<div className="form-group">
							<div className="col-1 col-ml-auto">
								<label className="form-label" htmlFor="username">Username</label>
							</div>
							<div className="col-3 col-mr-auto">
								<input className="form-input"
									type="text"
									id="username"
									name="username"
									placeholder="Username"
									value={this.state.username}
									onChange={this.handleChange}
								/>
							</div>
						</div>
						<div className="form-group">
							<div className="col-1 col-ml-auto">
								<label className="form-label" htmlFor="firstname">First Name: </label>
							</div>
							<div className="col-3 col-mr-auto">
								<input className="form-input"
									placeholder="First Name"
									type="firstname"
									name="firstname"
									value={this.state.firstname}
									onChange={this.handleChange}
								/>
							</div>
						</div>
                        <div className="form-group">
							<div className="col-1 col-ml-auto">
								<label className="form-label" htmlFor="lastname">Last Name: </label>
							</div>
							<div className="col-3 col-mr-auto">
								<input className="form-input"
									placeholder="Last Name"
									type="lastname"
									name="lastname"
									value={this.state.lastname}
									onChange={this.handleChange}
								/>
							</div>
						</div>
                        <div className="form-group">
							<div className="col-1 col-ml-auto">
								<label className="form-label" htmlFor="email">Email: </label>
							</div>
							<div className="col-3 col-mr-auto">
								<input className="form-input"
									placeholder="Email"
									type="email"
									name="email"
									value={this.state.email}
									onChange={this.handleChange}
								/>
							</div>
						</div>
                        <div className="form-group">
							<div className="col-1 col-ml-auto">
								<label className="form-label" htmlFor="password">Password: </label>
							</div>
							<div className="col-3 col-mr-auto">
								<input className="form-input"
									placeholder="password"
									type="password"
									name="password"
									value={this.state.password}
									onChange={this.handleChange}
								/>
							</div>
						</div>
						<div className="form-group">
							<div className="col-1 col-ml-auto">
								<label className="form-label" htmlFor="confirmPassword">Confirm Password: </label>
							</div>
							<div className="col-3 col-mr-auto">
								<input className="form-input"
									placeholder="confirm password"
									type="password"
									name="confirmPassword"
									value={this.state.confirmPassword}
									onChange={this.handleChange}
								/>
							</div>
						</div>
						<div className="form-group ">
							<div className="col-7"></div>
							<button
								className="btn btn-primary col-1 col-mr-auto"
								onClick={this.handleSubmit}
								type="submit"
							>Sign up</button>
						</div>
					</form>
				</div>

			)
		}
	}
}

export default Signup