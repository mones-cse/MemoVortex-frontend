import { Route, Routes } from "react-router-dom";
import "./App.css";
import { ToastContainer } from "react-toastify";
import About from "./pages/about.tsx";
import Home from "./pages/home.tsx";
import Landing from "./pages/landing.tsx";
import Login from "./pages/login.tsx";
import Logout from "./pages/logout.tsx";
import Registration from "./pages/registration.tsx";
import Settings from "./pages/settings.tsx";
import "react-toastify/dist/ReactToastify.css";
// import { PublicRoute } from "./components/routes/customeRoute.tsx";
import PrivateRoute, { PrivateRouteWithLayout } from "./utils/PrivateRotue.tsx";
function App() {
	return (
		<>
			<Routes>
				{/* <PublicRoute path="/" element={<Landing />} /> */}
				<Route element={<PrivateRoute />}>
					<Route element={<PrivateRouteWithLayout />}>
						<Route path="/about" element={<About />} />
						<Route path="/settings" element={<Settings />} />
						<Route path="/logout" element={<Logout />} />
						<Route path="/" element={<Home />} />
						<Route path="*" element={<Home />} />
					</Route>
				</Route>
				<Route path="/landing" element={<Landing />} />
				<Route path="/registration" element={<Registration />} />
				<Route path="/login" element={<Login />} />
			</Routes>
			<ToastContainer closeOnClick />
		</>
	);
}

export default App;
