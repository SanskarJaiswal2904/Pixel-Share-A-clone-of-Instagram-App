import  {useSignOut}  from "react-firebase-hooks/auth";
import { auth } from "../firebase/firebase";
import useShowToast from "./useShowToast";
import useAuthStore from "../store/authStore";


const useLogout = () => {
	const [signOut, isLoggingOut, error] = useSignOut(auth);
	const showToast = useShowToast();
	const logoutUser = useAuthStore((state) => state.logout);
	const waitSeconds = () => new Promise(resolve => setTimeout(resolve, 750));


	const handleLogout = async () => {
		try {
			showToast("Logout","Logging Out...","success");
			await waitSeconds();
			await signOut();
			localStorage.removeItem("user-info");
			logoutUser();

		} catch (error) {
			showToast("Error", error.message, "error");
		}
	};

	return { handleLogout, isLoggingOut, error };
};

export default useLogout;
