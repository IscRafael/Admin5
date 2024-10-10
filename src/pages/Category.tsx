import React from 'react';
import { FiEdit, FiTrash2 } from 'react-icons/fi';

interface Category {
  id: number;
  name: string;
  description: string;
  productCount: number;
}

const Category: React.FC = () => {
  const categories: Category[] = [
    { id: 1, name: "Electronics", description: "Electronic devices and gadgets", productCount: 150 },
    { id:2, name: "Clothing", description: "Apparel and fashion items", productCount: 300 },
    { id: 3, name: "Books", description: "Physical and digital books", productCount: 500 },
    { id: 4, name: "Home & Garden", description: "Items for home and garden", productCount: 200 },
    { id: 5, name: "Sports & Outdoors", description: "Sporting goods and outdoor equipment", productCount: 100 },
  ];

  return (
    <div className="container px-6 mx-auto">
      <h2 className="my-6 text-2xl font-semibold text-gray-700">Categories</h2>
      <div className="w-full overflow-hidden rounded-lg shadow-xs">
        <div className="w-full overflow-x-auto">
          <table className="w-full whitespace-no-wrap">
            <thead>
              <tr className="text-xs font-semibold tracking-wide text-left text-gray-500 uppercase border-b bg-gray-50">
                <th className="px-4 py-3">Name</th>
                <th className="px-4 py-3">Description</th>
                <th className="px-4 py-3">Product Count</th>
                <th className="px-4 py-3">Actions</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y">
              {categories.map((category) => (
                <tr key={category.id} className="text-gray-700">
                  <td className="px-4 py-3">
                    <div className="flex items-center text-sm">
                      <div>
                        <p className="font-semibold">{category.name}</p>
                      </div>
                    </div>
                  </td>
                  <td className="px-4 py-3 text-sm">{category.description}</td>
                  <td className="px-4 py-3 text-sm">{category.productCount}</td>
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
    </div>
  );
};

export default Category;