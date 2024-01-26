import React, { useState, useEffect } from "react";

function Login() {
  // giriş sorgulama
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // Sayfa yüklendiğinde local storage'dan giriş durumunu kontrol et
  useEffect(() => {
    const storedLoginStatus = localStorage.getItem("isLoggedIn");
    if (storedLoginStatus) {
      setIsLoggedIn(JSON.parse(storedLoginStatus));
    }
  }, []);

  // Giriş yap butonuna
  const handleLogin = () => {
    setIsLoggedIn(true);
    // Local storage'a giriş durumunu kaydet
    localStorage.setItem("isLoggedIn", JSON.stringify(true));
  };

  // Çıkış yap
  const handleLogout = () => {
    setIsLoggedIn(false);
    // Local storage a kaydet
    localStorage.setItem("isLoggedIn", JSON.stringify(false));
  };

  return (
    <>
      {!isLoggedIn ? (
        <button
          type="button"
          className="btn btn-primary btn-sm mt-5"
          style={{ width: "150px", height: "50px" }}
          onClick={handleLogin}
        >
          Giriş yap
        </button>
      ) : (
        <button
          type="button"
          className="btn btn-danger btn-sm mt-5"
          style={{ width: "150px", height: "50px" }}
          onClick={handleLogout}
        >
          Çıkış yap
        </button>
      )}
    </>
  );
}

export default Login;
