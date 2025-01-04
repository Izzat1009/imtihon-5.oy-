function checkToken() {
  const token = localStorage.getItem("accessToken");
  if (!token) {
    console.error("No token found in localStorage");
    window.location.replace("../pages/signin.html");
    return;
  }

  fetch(`${BASE_URL}/auth/me`, {
    method: 'GET',
    headers: {
      'Authorization': `Bearer ${token}`,
    },
  })
  .then(res => {
    console.log("Response status:", res.status); 
    if (!res.ok) {
      throw new Error("Invalid Token");
    }
    return res.json();
  })
  .then(data => {
    console.log("User data:", data); 
    updateAccountInfo(data);
    removeLoadingScreen();
  })
  .catch(err => {
    console.error("Error details:", err);
    localStorage.removeItem("accessToken");
    window.location.replace("../pages/signin.html");
  });
}
