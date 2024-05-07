import Sidebar from "./component/sidebar";
import Link from "next/link";
import Admin_Nav from "./component/admin-nav";
const Account_statement = () => {
  return (
    <>
      <div className="min-h-screen flex flex-col flex-auto flex-shrink-0 antialiased bg-white  text-black ">
        <Admin_Nav/>            
        <Sidebar/>
        <div>

        </div>
      </div>
    </>
  );
};
export default Account_statement;
