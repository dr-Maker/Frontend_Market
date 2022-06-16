import React, { useState } from "react";
import { ButtonPrimary } from "../Button/styled";
import { Container, Form, Label, Wraper, Input , Titulo, Error } from "./styled";
import { AiOutlineUser, AiOutlineLock } from "react-icons/ai";
import { useFormik } from "formik";
import { Redirect } from "../Redirect";

const validate =(values)=>{
	const errors ={};
	if(!values.email){
		errors.email = "Se requiere un email";
	}
	if(!values.password){
		errors.password = "escriba su contraseña";
	}
	return errors;
};


export const Login = () =>{

	const [message, SetMessage] = useState("");
	const [loggin, setLoggin] = useState({});
	
	const formik = useFormik({
		initialValues:{
			email: "",
			password: ""
		},
		validate,
		
		onSubmit: value => 
			fetch("http://localhost:3001/api/login_costumer", {
				method: "POST",
				body: new URLSearchParams(value)
			}).then(res => res.json())
				.catch(error => console.error("Error:", error))
				.then(response =>{ 
					SetMessage(response.message);
					if(response.data){
						setLoggin(response.data);		
					}
				})

	});	
	
	if(Object.keys(loggin).length > 0){

		try {
			const stringifiedItem = JSON.stringify(loggin);
			localStorage.setItem("token", stringifiedItem);
		} catch(error) {
			console.log(error);
		}
		return <Redirect path="/success" to="/success"/>;
	}

	return(
		<Container>
			<Titulo>Login</Titulo>
			<Form onSubmit={formik.handleSubmit}>
				<Wraper>
					<Label htmlFor="user">Correo Electronico:</Label>
				</Wraper>
				<Wraper>
					<AiOutlineUser/><Input name="user" id="user" type="email" placeholder="example@correo.com" {...formik.getFieldProps("email")} required/>
				</Wraper>   
				<Wraper>
					{formik.touched.email && formik.errors.email  ?
						<Error> {formik.errors.email}</Error> : null }
				</Wraper>                 
				<Wraper>
					<Label htmlFor 	="pass">Contraseña:</Label>
				</Wraper>
				<Wraper>
					<AiOutlineLock /><Input name="pass" id="pass" type="password" placeholder="contraseña" {...formik.getFieldProps("password")} required/>
				</Wraper>
				<Wraper>
					{formik.touched.password && formik.errors.password  ?
						<Error> {formik.errors.password}</Error> : null }
				</Wraper>

				<Wraper>
					<ButtonPrimary type="submit">Login</ButtonPrimary>
				</Wraper>
				<Error>{message}</Error>
			</Form>
		</Container>
	);
};
