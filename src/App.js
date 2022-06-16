import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Login } from "./pages/Login";
import { Success } from "./pages/Success";

export const App = ()=>{
	return (
		
		<BrowserRouter>
			<Routes>
				<Route path="/login" element={<Login />} />
				<Route path="/Success" element={<Success />} />
			</Routes>
		</BrowserRouter>

	);
};
