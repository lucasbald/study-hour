document.querySelector("button#oauthButton").addEventListener("click", function () {
		chrome.runtime.sendMessage({ message: "get_auth_token" });
		chrome.runtime.sendMessage({ message: "get_profile" });
	});
