import { useState,useEffect } from "react";
import items from "../pages/products.json";

const FilterBar = ({
  categories,
  sizes,
  qualities,
  selectedCategory,
  selectedSize,
  selectedQuality,
  handleCategoryChange,
  handleSizeChange,
  handleQualityChange,
  handleAddToCart,
  isActive,
}) => {
  const [selectedItem, setSelectedItem] = useState(null);

  const handleItemSelection = (event) => {
    const selectedItemIndex = event.target.value;
    if (selectedItemIndex === "") {
      setSelectedItem(null);
    } else {
     // console.log(filteredItems[selectedItemIndex])
      setSelectedItem(filteredItems[selectedItemIndex]);
    }
  };

  const filteredItems = items.items.filter(
    (item) =>
      (!selectedCategory || item.category === selectedCategory) &&
      (!selectedSize || item.size === selectedSize) &&
      (!selectedQuality || item.quality === selectedQuality)
  );
  
  function classNames(...classes) {
    return classes.filter(Boolean).join(" ");
  }
 

  return (
    <>
      <div className="grid grid-cols-1  lg:grid-cols-2 gap-5 filtersall">
        <label className="block">
          <span className="text-slate-600">Select Product</span>
          <select
            value={selectedCategory}
            onChange={handleCategoryChange}
            className="txtbx font-sans font-semibold h-12 lg:mb-5  p-2.5 "
          >
            {/* <option value="">All</option> */}
            {categories.map((category, index) => (
              <option key={index} value={category}>
                {category}
              </option>
            ))}
          </select>
        </label>

        <label className="block">
          <span className="text-slate-600">Select Size</span>
          <select
            value={selectedSize}
            onChange={handleSizeChange}
            className="txtbx font-sans font-semibold h-12 mb-5 p-2.5 "
          >
            <option value="">All</option>
            {sizes.map((size, index) => (
              <option key={index} value={size}>
                {size + '"'}
              </option>
            ))}
          </select>
        </label>
      </div>
      {selectedCategory !== 'FAN' && selectedCategory !== 'LIGHT BOX' && selectedCategory !== 'JOINTS' && selectedCategory !== 'WALL BOX' && (
              
      <div className=" text-center" id="productq">
        
        <div className="isolate inline-flex rounded-md shadow-sm text-base ml-3">
          <button
            id="bt_1"
            title="All Categories"
            type="button"
            onClick={handleQualityChange}
            value=""
            className={`${
              isActive === "bt_1"
                ? "bg-indigo-700 text-white hover:bg-indigo-900"
                : "bg-white hover:bg-indigo-100 "
            } relative inline-flex items-center rounded-l-md border text-gray-700 border-gray-300  shadow-inner px-4 py-2  font-medium   focus:z-10   focus:outline-none`}
          >
            All
          </button>
          <button
            id="bt_2"
            title="HMS - HIGH MECHANICAL STRESS"
            type="button"
            onClick={handleQualityChange}
            value="HMS"
            className={`${
              isActive === "bt_2"
                ? "bg-indigo-700 text-white hover:bg-indigo-900"
                : "bg-white hover:bg-indigo-100 "
            }  -ml-px inline-flex items-center border border-gray-300 bg-white px-4 py-2 font-medium text-gray-700   focus:z-10 focus:outline-none`}
          >
            HMS
          </button>
          <button
            id="bt_3"
            title="MMS - MEDIUM MECHANICAL STRESS"
            type="button"
            onClick={handleQualityChange}
            value="MMS"
            className={`${
              isActive === "bt_3"
                ? "bg-indigo-700 text-white hover:bg-indigo-900"
                : "bg-white hover:bg-indigo-100 "
            } relative -ml-px inline-flex items-center border border-gray-300 bg-white px-4 py-2   font-medium text-gray-700 focus:z-10 focus:outline-none`}
          >
            MMS
          </button>
          <button
            id="bt_4"
            title="LMS - LOW MECHANICAL STRESS"
            type="button"
            onClick={handleQualityChange}
            value="LMS"
            className={`${
              isActive === "bt_4"
                ? "bg-indigo-700 text-white hover:bg-indigo-900"
                : "bg-white hover:bg-indigo-100"
            } relative -ml-px inline-flex items-center rounded-r-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700  focus:z-10 focus:outline-none `}
          >
            LMS
          </button>
        </div>
        <p className="text-base mt-3 text-indigo-600">
          {isActive === "bt_1" ? "All Categories" : ""}
          {isActive === "bt_2" ? "HMS - HIGH MECHANICAL STRESS" : ""}
          {isActive === "bt_3" ? "MMS - MEDIUM MECHANICAL STRESS" : ""}
          {isActive === "bt_4" ? "LMS - LOW MECHANICAL STRESS" : ""}
        </p>
      </div>
       
       )}
    </>
  );
};
// handleQualityChange
export default FilterBar;
