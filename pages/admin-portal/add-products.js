import Sidebar from "./component/sidebar";
import Link from "next/link";
import Admin_Nav from "./component/admin-nav";
import { useState } from "react";

const add_products = () => {
  const [productName, setProductName] = useState("");
  const [category, setCategory] = useState("");
  const [description, setDescription] = useState("");
  const [size, setSize] = useState("Option 1");
  const [price, setPrice] = useState("");
  const [quantity, setQuantity] = useState("");
  const [selectedPhoto, setSelectedPhoto] = useState(null);
  const [product_SKU, setProduct_SKU] = useState(null);


  const handleProductName = (e) => setProductName(e.target.value);
  const handleCategory = (e) => setCategory(e.target.value);
  const handlePrice = (e) => setPrice(e.target.value);
  const handleQuantity = (e) => setQuantity(e.target.value);
  const handleDescription = (e) => setDescription(e.target.value);
  const handleProduct_SKU = (e) => setProduct_SKU(e.target.value);
  const handleSize = (e) => setSize(e.target.value);
  const handlePhotoChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setSelectedPhoto(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };
  const handleCancel = () => {
    setSelectedPhoto(null);
  };
  const handleSubmit =(e) => {
    e.preventDefault();
  }
  return (
    <>
      <div className="min-h-screen flex flex-col flex-auto flex-shrink-0 antialiased bg-white  text-black ">
        <Admin_Nav />
        <Sidebar />
        <div className="h-full ml-14 mt-14 mb-10 md:ml-64">
          <div>
            <div className="flex h-screen items-center justify-center  mt-32 mb-32">
              <form className="w-[100%] mt-28">
                <div className="w-full  grid bg-white rounded-lg shadow-xl">
                  <div className="mt-28">
                    <h1 className="sm:text-3xl text-xl text-slate-700 text-center">
                      Add Product
                    </h1>
                  </div>
                  <div className="flex justify-center py-4">
                    <div className="flex bg-blue-200 rounded-full md:p-4 p-2 border-2 border-blue-300">
                      <svg
                        className="w-8 h-8 text-white"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"
                        ></path>
                      </svg>
                    </div>
                  </div>
                  <div className="grid grid-cols-1 mt-5 mx-7">
                    <label className="uppercase md:text-sm text-xs text-gray-500 text-light font-semibold">
                      Product Name
                    </label>
                    <input
                      value={productName}
                      onChange={handleProductName}
                      className="py-2 px-3 rounded-lg border-2 border-blue-300 mt-1 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                      type="text"
                      placeholder="Enter Product Name"
                    />
                  </div>
                  <div className="grid grid-cols-1 mt-5 mx-7">
                    <label className="uppercase md:text-sm text-xs text-gray-500 text-light font-semibold">
                      Categroy
                    </label>
                    <select
                      value={category}
                      onChange={handleCategory}
                      className="py-2 px-3 rounded-lg border-2 border-blue-300 mt-1 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                    >
                      <option>Select Category</option>
                      <option>American Footballs</option>
                      <option>Baseball</option>
                      <option>Basketball</option>
                      <option>Cycling</option>
                      <option>Caps</option>
                      <option>Cricket</option>
                      <option>Golf</option>
                      <option>Gym Wear</option>
                      <option>Hoodies</option>
                      <option>Ice Hockey</option>
                      <option>Martial & arts</option>
                      <option>Medical Wear</option>
                      <option>Rugby</option>
                      <option>Running</option>
                      <option>Soccer</option>
                      <option>Sports Bag</option>
                      <option>Shorts</option>
                      <option>Socks</option>
                      <option>Tennis</option>
                      <option>Track Suits</option>
                      <option>Winter Caps</option>
                      <option>Volley ball</option>
                    </select>
                  </div>
                  <div className="grid grid-cols-1 mt-5 mx-7">
                    <label className="uppercase md:text-sm text-xs text-gray-500 text-light font-semibold">
                      Size
                    </label>
                    <select
                      value={size}
                      onChange={handleSize}
                      className="py-2 px-3 rounded-lg border-2 border-blue-300 mt-1 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                    >
                      <option>Small</option>
                      <option>Medium</option>
                      <option>Large </option>
                      <option>xL</option>
                    </select>
                  </div>
                  <div className="grid grid-cols-1 mt-5 mx-7">
                    <label className="uppercase md:text-sm text-xs text-gray-500 text-light font-semibold">
                      Quantity
                    </label>
                    <input
                      value={quantity}
                      onChange={handleQuantity}
                      className="py-2 px-3 rounded-lg border-2 border-blue-300 mt-1 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                      type="number"
                      placeholder="Quantity"
                    />
                  </div>
                  <div className="grid grid-cols-1 mt-5 mx-7">
                    <label className="uppercase md:text-sm text-xs text-gray-500 text-light font-semibold">
                      Product SKU
                    </label>
                    <input
                      value={product_SKU}
                      onChange={handleProduct_SKU}
                      className="py-2 px-3 rounded-lg border-2 border-blue-300 mt-1 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                      type="text"
                      placeholder="Enter Product-SKU"
                    />
                  </div>
                  <div className="grid grid-cols-1 mt-5 mx-7">
                    <label className="uppercase md:text-sm text-xs text-gray-500 text-light font-semibold">
                      Price
                    </label>
                    <input
                      value={price}
                      onChange={handlePrice}
                      className="py-2 px-3 rounded-lg border-2 border-blue-300 mt-1 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                      type="number"
                      placeholder="Enter Price"
                    />
                  </div>
                  <div className="grid grid-cols-1 mt-5 mx-7">
                    <label className="uppercase md:text-sm text-xs text-gray-500 text-light font-semibold">
                      Description
                    </label>
                    <textarea
                      value={description}
                      onChange={handleDescription}
                      rows="5"
                      className="py-2 px-3 rounded-lg border-2 border-blue-300 mt-1 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                      type="text"
                      placeholder="Product Details"
                    />
                  </div>
                  <div className="grid grid-cols-1 mt-5 mx-7">
                    <label className="uppercase md:text-sm text-xs text-gray-500 text-light font-semibold mb-1">
                      Upload Photo
                    </label>
                    <div className="flex items-center justify-center w-full">
                      {selectedPhoto ? (
                        <div className="relative">
                          <img
                            src={selectedPhoto}
                            alt="Uploaded"
                            className="h-32 w-auto mx-auto"
                          />
                          <button
                            onClick={handleCancel}
                            className="absolute top-0 right-0 bg-red-500 text-white rounded-full h-6 w-6 flex items-center justify-center -mt-2 -mr-2"
                          >
                            <svg
                              className="w-3 h-3"
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M6 18L18 6M6 6l12 12"
                              ></path>
                            </svg>
                          </button>
                        </div>
                      ) : (
                        <label className="flex flex-col border-4 border-dashed w-full h-32 hover:bg-gray-100 hover:border-blue-300 group">
                          <div className="flex flex-col items-center justify-center pt-7">
                            <svg
                              className="w-10 h-10 text-blue-400 group-hover:text-blue-600"
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                              ></path>
                            </svg>
                            <p className="lowercase text-sm text-gray-400 group-hover:text-blue-600 pt-1 tracking-wider">
                              Select a photo
                            </p>
                          </div>
                          <input
                            type="file"
                            id="photo-input"
                            onChange={handlePhotoChange}
                            className="hidden"
                          />
                        </label>
                      )}
                    </div>
                  </div>

                  <div className="w-full justify-end flex">
                    <button
                      type="submit"
                      onClick={handleSubmit}
                      className="mt-10 mr-6 py-3 btn-action rounded-xl text-white font-semibold rounded hover:bg-blue-600 focus:outline-none focus:bg-blue-600"
                    >
                      Submit
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default add_products;
