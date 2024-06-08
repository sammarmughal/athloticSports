import { useEffect, useState } from "react";
import { useRouter } from "next/router";

const withAuth = (WrappedComponent, allowedRoles = []) => {
  return (props) => {
    const [loading, setLoading] = useState(true);
    const [username, setUsername] = useState(""); // State to hold the username
    const router = useRouter();

    useEffect(() => {
      const storedUsername = localStorage.getItem("username");

      // Simulated decoded token for demonstration
      const decodedToken = {
        role: "user", // Change role as needed for testing
        exp: Math.floor(Date.now() / 1000) + 60 * 60 * 24 // 24 hours from now
      };

      const { role, exp } = decodedToken;
      if (allowedRoles.length && !allowedRoles.includes(role)) {
        router.replace("/login");
      } else if (Date.now() >= exp * 1000) {
        router.replace("/login");
      } else {
        // Set the retrieved username to state
        setUsername(storedUsername);
        setLoading(false);
      }
    }, [allowedRoles, router]);

    if (loading) {
      return null; // or a loading spinner
    }

    return <WrappedComponent {...props} username={username} />;
  };
};

export default withAuth;
