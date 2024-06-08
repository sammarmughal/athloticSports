import { useState, useEffect } from "react";
import axios from "axios";
import Sidebar from "./component/sidebar";
import User_Nav from "./component/user-nav";
import withAuth from "../../components/withAuth";

const Settings = () => {
  const [username, setUsername] = useState("");
  const [oldPassword, setOldPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [oldSecurityAnswer, setOldSecurityAnswer] = useState("");
  const [newSecurityAnswer, setNewSecurityAnswer] = useState("");
  const [isChangingPassword, setIsChangingPassword] = useState(false);
  const [isChangingSecurityAnswer, setIsChangingSecurityAnswer] = useState(false);
  const [message, setMessage] = useState("");

  useEffect(() => {
    // Retrieve username from localStorage
    const storedUsername = localStorage.getItem("username");
    setUsername(storedUsername);
  }, []);

  const handleChangePassword = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.put("/api/user/password", {
        oldPassword,
        newPassword,
        username, // Pass username with the request
      });
      if (response.status === 200) {
        setMessage("Password changed successfully");
        setIsChangingPassword(false);
      }
    } catch (error) {
      setMessage("Error changing password: " + error.response.data.message);
    }
  };

  const handleChangeSecurityAnswer = async (e) => {
    e.preventDefault();
    if (!newSecurityAnswer) {
      setMessage("New security answer cannot be empty");
      return;
    }
    try {
      const response = await axios.put("/api/user/security-answer", {
        oldSecurityAnswer,
        newSecurityAnswer,
        username, // Pass username with the request
      });
      if (response.status === 200) {
        setMessage("Security answer changed successfully");
        setIsChangingSecurityAnswer(false);
      }
    } catch (error) {
      setMessage("Error changing security answer: " + error.response.data.message);
    }
  };

  return (
    <>
      <div className="min-h-screen flex flex-col flex-auto flex-shrink-0 antialiased bg-white text-black">
        <User_Nav />
        <Sidebar />
        <div className="h-full ml-14 mt-14 mb-10 md:ml-64">
          <div className="p-8 bg-white shadow-md">
            <h1 className="text-2xl font-semibold mb-4">Settings</h1>
            {message && <div className="text-red-500 mb-4">{message}</div>}
            
            {/* Change Password Section */}
            <h2 className="text-xl font-semibold mb-4">Change Password</h2>
            {isChangingPassword ? (
              <form onSubmit={handleChangePassword}>
                <div className="mb-4">
                  <label className="block text-gray-700">Old Password</label>
                  <input
                    type="password"
                    className="border-1 rounded px-4 py-2 w-full"
                    value={oldPassword}
                    onChange={(e) => setOldPassword(e.target.value)}
                    required
                  />
                </div>
                <div className="mb-4">
                  <label className="block text-gray-700">New Password</label>
                  <input
                    type="password"
                    className="border-1 rounded px-4 py-2 w-full"
                    value={newPassword}
                    onChange={(e) => setNewPassword(e.target.value)}
                    required
                  />
                </div>
                <button
                  type="submit"
                  className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
                >
                  Save
                </button>
              </form>
            ) : (
              <button
                className="bg-gray-700 text-white px-4 py-2 rounded hover:bg-gray-800"
                onClick={() => setIsChangingPassword(true)}
              >
                Change Password
              </button>
            )}

            {/* Modify Security Answer Section */}
            <h2 className="text-xl font-semibold mt-8 mb-2">Modify Security Answer</h2>
            <p className="mb-4">What is your childhood nickname?</p>
            {isChangingSecurityAnswer ? (
              <form onSubmit={handleChangeSecurityAnswer}>
                <div className="mb-4">
                  <label className="block text-gray-700">Old Security Answer</label>
                  <input
                    type="text"
                    className="border-1 rounded px-4 py-2 w-full"
                    value={oldSecurityAnswer}
                    onChange={(e) => setOldSecurityAnswer(e.target.value)}
                    required
                  />
                </div>
                <div className="mb-4">
                  <label className="block text-gray-700">New Security Answer</label>
                  <input
                    type="text"
                    className="border-1 rounded px-4 py-2 w-full"
                    value={newSecurityAnswer}
                    onChange={(e) => setNewSecurityAnswer(e.target.value)}
                    required
                  />
                </div>
                <button
                  type="submit"
                  className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
                >
                  Save
                </button>
              </form>
            ) : (
              <button
                className="bg-gray-700 text-white px-4 py-2 rounded hover:bg-gray-800"
                onClick={() => setIsChangingSecurityAnswer(true)}
              >
                Modify Security Answer
              </button>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default withAuth(Settings, ["user"]);
