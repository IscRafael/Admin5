import React, { useState } from 'react';
import { FiEdit, FiTrash2, FiPlus, FiDownload, FiUpload, FiPrinter, FiSearch } from 'react-icons/fi';

interface Product {
  id: number;
  name: string;
  category: string;
  price: number;
  stock: number;
  status: 'In Stock' | 'Low Stock' | 'Out of Stock';
}

const Products: React.FC = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState('');
  const itemsPerPage = 10;

  // Generate 50 products
  const generateProducts = (): Product[] => {
    const products: Product[] = [];
    for (let i = 1; i <= 50; i++) {
      products.push({
        id: i,
        name: `Product ${i}`,
        category: ['Electronics', 'Clothing', 'Books', 'Home & Garden', 'Sports'][Math.floor(Math.random() * 5)],
        price: parseFloat((Math.random() * 1000).toFixed(2)),
        stock: Math.floor(Math.random() * 100),
        status: ['In Stock', 'Low Stock', 'Out of Stock'][Math.floor(Math.random() * 3)] as 'In Stock' | 'Low Stock' | 'Out of Stock',
      });
    }
    return products;
  };

  const products = generateProducts();

  const filteredProducts = products.filter(product =>
    product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    product.category.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = filteredProducts.slice(indexOfFirstItem, indexOfLastItem);

  const paginate = (pageNumber: number) => setCurrentPage(pageNumber);

  return (
    <div className="container px-6 mx-auto">
      <h2 className="my-6 text-2xl font-semibold text-gray-700">Products</h2>
      
      {/* Buttons and Search */}
      <div className="flex justify-between mb-4">
        <div className="flex space-x-2">
          <button className="px-4 py-2 text-sm font-medium leading-5 text-white transition-colors duration-150 bg-purple-600 border border-transparent rounded-lg active:bg-purple-600 hover:bg-purple-700 focus:outline-none focus:shadow-outline-purple">
            <FiPlus className="inline mr-2" /> New
          </button>
          <button className="px-4 py-2 text-sm font-medium leading-5 text-white transition-colors duration-150 bg-green-600 border border-transparent rounded-lg active:bg-green-600 hover:bg-green-700 focus:outline-none focus:shadow-outline-green">
            <FiDownload className="inline mr-2" /> Export
          </button>
          <button className="px-4 py-2 text-sm font-medium leading-5 text-white transition-colors duration-150 bg-blue-600 border border-transparent rounded-lg active:bg-blue-600 hover:bg-blue-700 focus:outline-none focus:shadow-outline-blue">
            <FiUpload className="inline mr-2" /> Import
          </button>
          <button className="px-4 py-2 text-sm font-medium leading-5 text-white transition-colors duration-150 bg-gray-600 border border-transparent rounded-lg active:bg-gray-600 hover:bg-gray-700 focus:outline-none focus:shadow-outline-gray">
            <FiPrinter className="inline mr-2" /> Print
          </button>
        </div>
        <div className="flex items-center">
          <FiSearch className="absolute ml-3 text-gray-500" />
          <input
            type="text"
            placeholder="Search products..."
            className="pl-10 pr-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-600"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
      </div>

      {/* Table */}
      <div className="w-full overflow-hidden rounded-lg shadow-xs">
        <div className="w-full overflow-x-auto">
          <table className="w-full whitespace-no-wrap">
            <thead>
              <tr className="text-xs font-semibold tracking-wide text-left text-gray-500 uppercase border-b bg-gray-50">
                <th className="px-4 py-3">Name</th>
                <th className="px-4 py-3">Category</th>
                <th className="px-4 py-3">Price</th>
                <th className="px-4 py-3">Stock</th>
                <th className="px-4 py-3">Status</th>
                <th className="px-4 py-3">Actions</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y">
              {currentItems.map((product) => (
                <tr key={product.id} className="text-gray-700">
                  <td className="px-4 py-3">
                    <div className="flex items-center text-sm">
                      <div>
                        <p className="font-semibold">{product.name}</p>
                      </div>
                    </div>
                  </td>
                  <td className="px-4 py-3 text-sm">{product.category}</td>
                  <td className="px-4 py-3 text-sm">${product.price.toFixed(2)}</td>
                  <td className="px-4 py-3 text-sm">{product.stock}</td>
                  <td className="px-4 py-3 text-xs">
                    <span className={`px-2 py-1 font-semibold leading-tight rounded-full ${
                      product.status === 'In Stock' ? 'text-green-700 bg-green-100' :
                      product.status === 'Low Stock' ? 'text-yellow-700 bg-yellow-100' :
                      'text-red-700 bg-red-100'
                    }`}>
                      {product.status}
                    </span>
                  </td>
                  <td className="px-4 py-3 text-sm">
                    <div className="flex items-center space-x-4 text-sm">
                      <button className="flex items-center justify-between px-2 py-2 text-sm font-medium leading-5 text-purple-600 rounded-lg focus:outline-none focus:shadow-outline-gray" aria-label="Edit">
                        <FiEdit />
                      </button>
                      <button className="flex items-center justify-between px-2 py-2 text-sm font-medium leading-5 text-purple-600 rounded-lg focus:outline-none focus:shadow-outline-gray" aria-label="Delete">
                        <FiTrash2 />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Pagination */}
      <div className="flex justify-center mt-4">
        {Array.from({ length: Math.ceil(filteredProducts.length / itemsPerPage) }, (_, i) => (
          <button
            key={i}
            onClick={() => paginate(i + 1)}
            className={`mx-1 px-3 py-1 rounded ${
              currentPage === i + 1 ? 'bg-purple-600 text-white' : 'bg-gray-200 text-gray-700'
            }`}
          >
            {i + 1}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Products;