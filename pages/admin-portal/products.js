import Sidebar from "./component/sidebar";
import Link from "next/link";
import Admin_Nav from "./component/admin-nav";
const products = () => {
  return (
    <>
      <div className="min-h-screen flex flex-col flex-auto flex-shrink-0 antialiased bg-white  text-black ">
        <Admin_Nav />
        <Sidebar />
        <div className="h-full ml-14 mt-14 mb-10 md:ml-64">
          <Link href="/admin-portal/add-products">
            <button
              type="add-product"
              className="mt-10 ml-6 py-3 btn-action rounded-xl text-white font-semibold rounded hover:bg-blue-600 focus:outline-none focus:bg-blue-600"
            >
              Add Products
            </button>
          </Link>
        </div>
      </div>
    </>
  );
};
export default products;
