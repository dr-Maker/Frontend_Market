import { useEffect } from "react";
import {  useNavigate } from "react-router-dom";

export const Redirect = ({ to }) =>{
	let navigate = useNavigate();
	useEffect(() => {
		navigate(to);
	});
 
	return null;
};
