import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FiChevronDown } from 'react-icons/fi';

interface MenuItemProps {
  icon: React.ReactNode;
  title: string;
  to?: string;
  subItems?: { title: string; href: string }[];
}

const MenuItem: React.FC<MenuItemProps> = ({ icon, title, to, subItems }) => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const isActive = to ? location.pathname === to : false;

  if (to) {
    return (
      <li className={`relative px-6 py-3 ${isActive ? 'bg-gray-100' : ''}`}>
        {isActive && <span className="absolute inset-y-0 left-0 w-1 bg-purple-600 rounded-tr-lg rounded-br-lg" aria-hidden="true"></span>}
        <Link
          to={to}
          className="inline-flex items-center w-full text-sm font-semibold transition-colors duration-150 hover:text-gray-800"
        >
          {icon}
          <span className="ml-4">{title}</span>
        </Link>
      </li>
    );
  }

  return (
    <li className="relative px-6 py-3">
      <button
        className="inline-flex items-center justify-between w-full text-sm font-semibold transition-colors duration-150 hover:text-gray-800"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="inline-flex items-center">
          {icon}
          <span className="ml-4">{title}</span>
        </span>
        {subItems && (
          <FiChevronDown className={`w-4 h-4 transition-transform duration-200 ${isOpen ? 'transform rotate-180' : ''}`} />
        )}
      </button>
      {subItems && isOpen && (
        <ul className="p-2 mt-2 space-y-2 overflow-hidden text-sm font-medium rounded-md shadow-inner bg-gray-50">
          {subItems.map((item, index) => (
            <li key={index} className="px-2 py-1 transition-colors duration-150 hover:text-gray-800">
              <Link className="w-full" to={item.href}>{item.title}</Link>
            </li>
          ))}
        </ul>
      )}
    </li>
  );
};

export default MenuItem;