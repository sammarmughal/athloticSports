import Sidebar from "./component/sidebar";
import Admin_Nav from "./component/admin-nav";
import { useState } from "react";
import { useRouter } from 'next/router';
import axios from 'axios';

const AddProducts = () => {
  const [product_name, setProduct_name] = useState("");
  const [category, setCategory] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [quantity_available, setQuantity_available] = useState("");
  const [image_url, setImage_url] = useState(null);
  const [sku_id, setSku_id] = useState("");
  const [errors, setErrors] = useState({});

  const router = useRouter();

  const handleProduct_name = (e) => setProduct_name(e.target.value);
  const handleCategory = (e) => setCategory(e.target.value);
  const handlePrice = (e) => setPrice(e.target.value);
  const handleQuantity_available = (e) => setQuantity_available(e.target.value);
  const handleDescription = (e) => setDescription(e.target.value);
  const handleSku_id = (e) => setSku_id(e.target.value);

  const handlePhotoChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImage_url(file);
    }
  };
  const handleCancel = () => {
    setImage_url(null);
  };

  const validateForm = () => {
    const errors = {};

    if (!product_name.trim()) errors.product_name = "Product Name is required";
    if (!category.trim() || category === "Select Category") errors.category = "Category is required";
    if (!description.trim()) errors.description = "Description is required";
    if (!price) errors.price = "Price is required";
    if (price <= 0) errors.price = "Price must be greater than 0";
    if (!quantity_available) errors.quantity_available = "Quantity is required";
    if (quantity_available <= 0) errors.quantity_available = "Quantity must be greater than 0";
    if (!sku_id.trim()) errors.sku_id = "Product SKU is required";
    if (!image_url) errors.image_url = "Product photo is required";

    return errors;
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    const errors = validateForm();
    if (Object.keys(errors).length > 0) {
      setErrors(errors);
      return;
    }
    const formData = new FormData();
    formData.append('product_name', product_name);
    formData.append('category', category);
    formData.append('description', description);
    formData.append('price', price);
    formData.append('quantity_available', quantity_available);
    formData.append('image_url', image_url);
    formData.append('sku_id', sku_id);

    try {
      const response = await axios.post('/api/products/add', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      console.log(response.data);
      // Handle success, e.g., reset the form or show a success message
      router.push('/admin-portal/products'); // Redirect to the products page

    } catch (error) {
      console.error('Failed to add product:', error);
      // Handle error, e.g., show an error message
    }
  };
  
  return (
    <>
      <div className="min-h-screen flex flex-col flex-auto flex-shrink-0 antialiased bg-white text-black">
        <Admin_Nav />
        <Sidebar />
        <div className="h-full ml-14 mt-14 mb-10 md:ml-64">
          <div className="flex h-screen items-center justify-center mt-32 mb-32">
            <form className="w-full mt-28" >
              <div className="w-full grid p b-10 bg-white rounded-lg shadow-xl">
                <div className="mt-28">
                  <h1 className="sm:text-3xl text-xl text-slate-700 text-center">Add Product</h1>
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
                    value={product_name}
                    onChange={handleProduct_name}
                    className="py-2 px-3 rounded-lg border-2 border-blue-300 mt-1 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                    type="text"
                    placeholder="Enter Product Name"
                  />
                  {errors.product_name && <p className="text-red-500 text-xs mt-1">{errors.product_name}</p>}
                </div>
                <div className="grid grid-cols-1 mt-5 mx-7">
                  <label className="uppercase md:text-sm text-xs text-gray-500 text-light font-semibold">
                    Category
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
                  {errors.category && <p className="text-red-500 text-xs mt-1">{errors.category}</p>}
                </div>
                <div className="grid grid-cols-1 mt-5 mx-7">
                  <label className="uppercase md:text-sm text-xs text-gray-500 text-light font-semibold">
                  Quantity_available
                  </label>
                  <input
                    value={quantity_available}
                    onChange={handleQuantity_available}
                    className="py-2 px-3 rounded-lg border-2 border-blue-300 mt-1 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                    type="number"
                    placeholder=" Quantity"
                  />
                  {errors.quantity_available && <p className="text-red-500 text-xs mt-1">{errors.quantity_available}</p>}
                </div>
                <div className="grid grid-cols-1 mt-5 mx-7">
                  <label className="uppercase md:text-sm text-xs text-gray-500 text-light font-semibold">
                    Product SKU
                  </label>
                  <input
                    value={sku_id}
                    onChange={handleSku_id}
                    className="py-2 px-3 rounded-lg border-2 border-blue-300 mt-1 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                    type="text"
                    placeholder="Enter Product-SKU"
                  />
                  {errors.sku_id && <p className="text-red-500 text-xs mt-1">{errors.sku_id}</p>}
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
                  {errors.price && <p className="text-red-500 text-xs mt-1">{errors.price}</p>}
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
                  {errors.description && <p className="text-red-500 text-xs mt-1">{errors.description}</p>}
                </div>
                <div className="grid grid-cols-1 mt-5 mx-7">
                  <label className="uppercase md:text-sm text-xs text-gray-500 text-light font-semibold mb-1">
                    Upload Photo
                  </label>
                  <div className="flex items-center justify-center w-full">
                    {image_url ? (
                      <div className="relative">
                        <img
                          src={URL.createObjectURL(image_url)}
                          alt="Uploaded"
                          className="h-32 w-auto mx-auto"
                        />
                        <button
                          type="button"
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
                  {errors.image_url && <p className="text-red-500 text-xs mt-1">{errors.image_url}</p>}
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
    </>
  );
};

export default AddProducts;
