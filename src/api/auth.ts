import axios from "axios";
import { axiosInstance } from "../utils/axiosConfig";
const API_URL = import.meta.env.VITE_API_URL;
import type {
	LoginCredentials,
	RegistrationCredentials,
} from "../types/auth.type";

export const registrationFunction = async (
	credentials: RegistrationCredentials,
) => {
	try {
		const response = await axiosInstance.post(
			`${API_URL}/v1/auth/register`,
			credentials,
		);
		console.log("🚀 ~ registrationFunction ~ response.data", response.data);
		return response.data;
	} catch (error) {
		if (axios.isAxiosError(error) && error.response) {
			console.log(
				"🚀 ~ registrationFunction ~ error.response):",
				error.response.data.message,
			);
			throw new Error(
				error.response.data.message || "An error occurred during registration",
			);
		}
		throw new Error("An error occurred during registration");
	}
};

export const loginFunction = async (credentials: LoginCredentials) => {
	try {
		const response = await axiosInstance.post(
			`${API_URL}/v1/auth/login`,
			credentials,
		);
		console.log("🚀 ~ LoginFunction ~ response.data", response.data);
		return response.data;
	} catch (error) {
		if (axios.isAxiosError(error) && error.response) {
			console.log(
				"🚀 ~ loginFunction ~ error.response):",
				error.response.data.message,
			);
			throw new Error(
				error.response.data.message || "An error occurred during login",
			);
		}
		throw new Error("An error occurred during login");
	}
};

export const newAccessTokenByRefreshToken = async (refreshToken: string) => {
	try {
		const response = await axiosInstance.post(
			`${API_URL}/v1/auth/refresh-token`,
			{ refresh_token: refreshToken },
		);
		return response;
	} catch (error) {
		if (axios.isAxiosError(error) && error.response) {
			console.log(
				"🚀 ~ newAccessTokenByRefreshToken ~ error.response):",
				error.response.data.message,
			);
			throw new Error(
				error.response.data.message || "An error occurred during token refresh",
			);
		}
		throw new Error("An error occurred during token refresh");
	}
};
