import Sidebar from "../component/sidebar";
import Link from "next/link";
import Admin_Nav from "../component/admin-nav";
import { fetchProducts } from "../../../lib/data";
import { useState, useEffect } from "react";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import ReactPaginate from "react-paginate";
import Swal from "sweetalert2";
import withAuth from "../../../components/withAuth";
import { useRouter } from "next/router";

export async function getServerSideProps() {
  try {
    const products = await fetchProducts();
    return { props: { products } };
  } catch (error) {
    console.error("Error fetching products:", error);
    return { props: { products: [] } };
  }
}

const Products = ({ products }) => {
  const [username, setUsername] = useState("");
  const router = useRouter();

  useEffect(() => {
    // Retrieve the username from local storage or state management
    const storedUsername = localStorage.getItem("username");
    if (storedUsername) {
      setUsername(storedUsername);
    } else {
      // If no username found, redirect to login (optional)
      router.push("/login");
    }
  }, []);  
  const [dropdown, setDropdown] = useState(false);
  const [currentPage, setCurrentPage] = useState(0);
  const [selectedCategory, setSelectedCategory] = useState("");
  const productsPerPage = 25;

  useEffect(() => {
    setCurrentPage(0);
  }, [selectedCategory]);

  const handleDropdown = () => {
    setDropdown(!dropdown);
  };

  const handlePageChange = ({ selected }) => {
    setCurrentPage(selected);
  };
  const categories = [...new Set(products.map((product) => product.category))];
  console.log(categories);
  const handleCategorySelect = (category) => {
    setSelectedCategory(category);
    setDropdown(false);
  };
  const handleDelete = async (sku_id) => {
    const result = await Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    });

    if (result.isConfirmed) {
      try {
        const response = await fetch(`/api/products/${sku_id}`, {
          method: "DELETE",
        });

        if (response.ok) {
          Swal.fire({
            title: "Deleted!",
            text: "Your product has been deleted.",
            icon: "success",
          });

          window.location.reload();
        } else {
          const errorData = await response.json();
          throw new Error(errorData.message || "Failed to delete product.");
        }
      } catch (error) {
        console.error("Error deleting product:", error);
        Swal.fire({
          title: "Error!",
          text: error.message || "Failed to delete product.",
          icon: "error",
        });
      }
    }
  };

  const filteredProducts = selectedCategory
    ? products.filter((product) => product.category === selectedCategory)
    : products;

  const offset = currentPage * productsPerPage;
  const currentProducts = filteredProducts.slice(
    offset,
    offset + productsPerPage
  );
  const pageCount = Math.ceil(filteredProducts.length / productsPerPage);
  return (
    <>
      <div className="min-h-screen w-full flex flex-col flex-auto flex-shrink-0 antialiased bg-white text-black">
        <Admin_Nav />
        <Sidebar />
        <div className="h-full ml-14 mt-14 mb-10 md:ml-64">       

          <Link  href={`/admin-portal/${username}/add-products`}>
            <button
              type="button"
              className="mt-10 ml-6 py-3 btn-action rounded-xl text-white font-semibold rounded hover:bg-blue-600 focus:outline-none focus:bg-blue-600"
            >
              Add Products
            </button>
          </Link>
          <div className="min-h-screen bg-slate-150">
            <div className="flex justify-between mx-8">
              <h1 className="my-4 text-xl text-slate-600 font-semibold">
                Products
              </h1>
              <div className="flex items-end justify-end">
                <div className="relative inline-block text-left mb-3">
                  <button
                    onClick={handleDropdown}
                    className="inline-flex justify-center w-full px-6 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-blue-500"
                  >
                    Category
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-5 h-5 ml-2 -mr-1"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        fillRule="evenodd"
                        d="M6.293 9.293a1 1 0 011.414 0L10 11.586l2.293-2.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </button>
                  {dropdown && (
                    <div className="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
                      <ul
                        className="py-2 p-2"
                        role="menu"
                        aria-orientation="vertical"
                        aria-labelledby="dropdown-button"
                      >
                        {categories.map((category) => (
                          <li
                            key={category}
                            className={`flex block rounded-md my-2 px-4 py-2 text-sm border-b  text-gray-700 cursor-pointer ${
                              selectedCategory === category ? "bg-gray-200" : ""
                            }`}
                            role="menuitem"
                            onClick={() => handleCategorySelect(category)}
                          >
                            {category}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              </div>
            </div>
            <div className="w-full overflow-hidden rounded-lg shadow-xs">
              <div className="w-full overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="text-xs font-semibold tracking-wide text-left text-gray-500 uppercase border-b bg-gray-50 ">
                      <th className="px-4 py-3">Product Name</th>
                      <th className="px-4 py-3">Description</th>
                      <th className="px-4 py-3">Price</th>
                      <th className="px-4 py-3">Quantity Available</th>
                      <th className="px-4 py-3">Category</th>
                      <th className="px-4 py-3">Action</th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y">
                    {currentProducts.map((product) => (
                      <tr
                        className="bg-gray-50  hover:bg-gray-10 text-gray-700"
                        key={product.sku_id}
                      >
                        <td className="px-4 py-3 hove:bg-slate-100">
                          {product.product_name}
                        </td>
                        <td className="px-4 py-3 hove:bg-slate-100">
                          {product.description}
                        </td>
                        <td className="px-4 py-3 hove:bg-slate-100">
                          Rs.{product.price}
                        </td>
                        <td className="px-4 py-3 hove:bg-slate-100">
                          {product.quantity_available}
                        </td>
                        <td className="px-4 py-3 hove:bg-slate-100">
                          {product.category}
                        </td>
                        <td className="flex flex-col gap-1 p-1">
                          <button
                            className="bg-red-400 text-white rounded px-2"
                            onClick={() => handleDelete(product.sku_id)}
                          >
                            Delete
                          </button>
                          <Link
                            href={`/admin-portal/${username}/edit-product/${product.sku_id}`}
                          >
                            <button className="bg-green-400 rounded px-2 w-full text-white">
                              Edit
                            </button>
                          </Link>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
            <div className="sm:flex justify-center mt-4">
              <ReactPaginate
                previousLabel={
                  <div className="p-2 rounded-full bg-white border border-slate-700 text-black">
                    <IoIosArrowBack className="flex p-0" />
                  </div>
                }
                nextLabel={
                  <div className="p-2 rounded-full bg-white border border-slate-700 text-black">
                    <IoIosArrowForward className="flex p-0" />
                  </div>
                }
                breakLabel={"..."}
                breakClassName={"mx-2"}
                pageCount={pageCount}
                marginPagesDisplayed={2}
                pageRangeDisplayed={5}
                onPageChange={handlePageChange}
                containerClassName={
                  "flex flex-wrap gap-4 justify-center py-5 items-center space-x-2.5"
                }
                subContainerClassName={
                  "flex justify-center py-5 items-center space-x-2.5"
                }
                activeClassName={"active"}
                activeLinkClassName={
                  "border-solid border-gray-600 px-4 py-2 rounded-full no-underline text-white bg-gradient-to-b from-blue-700 to-cyan-500"
                }
                pageClassName={
                  "mx-2 border border-slate-700 rounded-full text-white cursor-pointer transition-all duration-300"
                }
                pageLinkClassName={
                  "border-solid border-gray-600 px-4 py-2 rounded-full no-underline text-black flex hover:text-white hover:bg-gradient-to-b hover:from-blue-700 hover:to-cyan-500"
                }
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
// export default Products;
export default withAuth(Products, ["admin"]);
