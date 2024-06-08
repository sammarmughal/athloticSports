import { useEffect, useState } from "react";
import { useRouter } from "next/router";

const withAuth = (WrappedComponent, allowedRoles = []) => {
  return (props) => {
    const [loading, setLoading] = useState(true);
    const [username, setUsername] = useState("");
    const router = useRouter();

    useEffect(() => {
      const storedUsername = localStorage.getItem("username");
      
      const decodedToken = {
        role: "user", 
        exp: Math.floor(Date.now() / 1000) + 60 * 60 * 1
      };
      
      const { role, exp } = decodedToken;

      if (!allowedRoles.includes(role)) {
        router.replace("/login");
      } else if (Date.now() >= exp * 1000) {
        router.replace("/login");
      } else {
        setUsername(storedUsername);
        setLoading(false);
      }
    }, []);

    if (loading) {
      return null;
    }

    return <WrappedComponent {...props} username={username} />;
  };
};

export default withAuth;
