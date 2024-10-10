import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FiBell, FiHome, FiBarChart2, FiBox, FiCalendar, FiLayers, FiList, FiChevronDown, FiMenu } from 'react-icons/fi';
import MenuConfigButton from './MenuConfigButton';
import ColorPicker from './ColorPicker';
import { useTheme } from '../context/ThemeContext';

interface HeaderProps {
  onChangeMenuPosition: (position: 'left' | 'top' | 'right') => void;
  menuPosition: 'left' | 'top' | 'right';
  toggleSidebar: () => void;
}

const Header: React.FC<HeaderProps> = ({ onChangeMenuPosition, menuPosition, toggleSidebar }) => {
  const [isArticulosOpen, setIsArticulosOpen] = useState(false);
  const { primaryColor } = useTheme();

  const menuItems = [
    { icon: <FiHome className="w-5 h-5" />, title: "Dashboard", to: "/" },
    { icon: <FiBarChart2 className="w-5 h-5" />, title: "Analytics", to: "/analytics" },
    { icon: <FiBox className="w-5 h-5" />, title: "Widgets", to: "/widgets" },
    { icon: <FiCalendar className="w-5 h-5" />, title: "Calendar", to: "/calendar" },
    { icon: <FiLayers className="w-5 h-5" />, title: "Components", to: "/components" },
    {
      icon: <FiList className="w-5 h-5" />,
      title: "Articulos",
      subItems: [
        { title: "Products", href: "/articulos/products" },
        { title: "Category", href: "/articulos/category" }
      ]
    }
  ];

  const headerStyle = primaryColor
    ? { backgroundColor: primaryColor, color: 'white' }
    : { backgroundColor: 'white', color: 'black' };

  const linkStyle = primaryColor
    ? { color: 'white' }
    : { color: 'black' };

  return (
    <header className="z-10 py-4 shadow-md" style={headerStyle}>
      <div className="container flex items-center justify-between h-full px-6 mx-auto">
        {/* Left side - Logo and menu toggle */}
        <div className="flex items-center">
          {(menuPosition === 'left' || menuPosition === 'right') && (
            <button
              className="p-1 mr-5 -ml-1 rounded-md focus:outline-none focus:shadow-outline-purple"
              onClick={toggleSidebar}
              aria-label="Menu"
            >
              <FiMenu className="w-6 h-6" style={linkStyle} />
            </button>
          )}
          <Link to="/" className="text-2xl font-bold" style={linkStyle}>
            Lead
          </Link>
        </div>

        {/* Center - Navigation Menu (only if menuPosition is 'top') */}
        {menuPosition === 'top' && (
          <nav className="flex-1 flex justify-center space-x-4">
            {menuItems.map((item, index) => (
              item.subItems ? (
                <div key={index} className="relative group">
                  <button
                    onClick={() => setIsArticulosOpen(!isArticulosOpen)}
                    className="px-3 py-2 text-sm font-medium hover:text-opacity-75 flex items-center"
                    style={linkStyle}
                  >
                    {item.icon}
                    <span className="ml-2">{item.title}</span>
                    <FiChevronDown className="ml-1" />
                  </button>
                  {isArticulosOpen && (
                    <div className="absolute left-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 z-10">
                      {item.subItems.map((subItem, subIndex) => (
                        <Link
                          key={subIndex}
                          to={subItem.href}
                          className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                        >
                          {subItem.title}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ) : (
                <Link
                  key={index}
                  to={item.to}
                  className="px-3 py-2 text-sm font-medium hover:text-opacity-75 flex items-center"
                  style={linkStyle}
                >
                  {item.icon}
                  <span className="ml-2">{item.title}</span>
                </Link>
              )
            ))}
          </nav>
        )}

        {/* Right side */}
        <div className="flex items-center space-x-4">
          <button className="relative p-2 hover:bg-opacity-25 focus:bg-opacity-25 rounded-full" style={linkStyle}>
            <span className="sr-only">Notifications</span>
            <FiBell className="w-6 h-6" />
            <span className="absolute top-0 right-0 inline-block w-3 h-3 transform translate-x-1 -translate-y-1 bg-red-600 border-2 border-white rounded-full"></span>
          </button>
          <ColorPicker />
          <MenuConfigButton onChangeMenuPosition={onChangeMenuPosition} />
          <button className="flex items-center">
            <img
              className="object-cover w-8 h-8 rounded-full"
              src="https://images.unsplash.com/photo-1502378735452-bc7d86632805?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=200&fit=max&s=aa3a807e1bbdfd4364d1f449eaa96d82"
              alt="User avatar"
            />
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;