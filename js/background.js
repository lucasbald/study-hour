const API_KEY = "AIzaSyBPBAToKtjlkzV1L7kzZXAXN0Mkhtl5qPM";

chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
	if (request.message === "get_auth_token") {
		chrome.identity.getAuthToken({ interactive: true }, function (token) {
			console.log(`Token: ${token}`);
		});
	} else if (request.message === "get_profile") {
		chrome.identity.getProfileUserInfo(
			{ accountStatus: "ANY" },
			function (user_info) {
				console.log(user_info);
			}
		);
	}
});
