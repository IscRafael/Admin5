import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FiHome, FiBarChart2, FiBox, FiCalendar, FiLayers, FiList, FiX, FiChevronDown, FiChevronRight } from 'react-icons/fi';
import { useTheme } from '../context/ThemeContext';

interface SidebarProps {
  isOpen: boolean;
  toggleSidebar: () => void;
}

interface MenuItem {
  icon: React.ReactNode;
  title: string;
  to?: string;
  subItems?: MenuItem[];
}

const Sidebar: React.FC<SidebarProps> = ({ isOpen, toggleSidebar }) => {
  const [openMenu, setOpenMenu] = useState<string | null>(null);
  const { primaryColor } = useTheme();

  const menuItems: MenuItem[] = [
    { icon: <FiHome className="w-5 h-5" />, title: "Dashboard", to: "/" },
    {
      icon: <FiList className="w-5 h-5" />,
      title: "Configuración",
      subItems: [
        { title: "Departamentos", to: "/configuracion/departamentos" },
        { title: "Roles", to: "/configuracion/roles" },
        { title: "Usuarios", to: "/configuracion/usuarios" }
      ]
    },
    { icon: <FiBarChart2 className="w-5 h-5" />, title: "Analytics", to: "/analytics" },
    { icon: <FiBox className="w-5 h-5" />, title: "Widgets", to: "/widgets" },
    { icon: <FiCalendar className="w-5 h-5" />, title: "Calendar", to: "/calendar" },
    { icon: <FiLayers className="w-5 h-5" />, title: "Components", to: "/components" },
    {
      icon: <FiList className="w-5 h-5" />,
      title: "Articulos",
      subItems: [
        { title: "Products", to: "/articulos/products" },
        { title: "Category", to: "/articulos/category" }
      ]
    }
  ];

  const toggleMenu = (title: string) => {
    setOpenMenu(prevOpenMenu => prevOpenMenu === title ? null : title);
  };

  const renderMenuItem = (item: MenuItem) => {
    const isOpen = openMenu === item.title;
    const itemStyle = primaryColor ? { color: primaryColor } : {};

    if (item.subItems) {
      return (
        <li className="relative px-6 py-3" key={item.title}>
          <button
            className="inline-flex items-center justify-between w-full text-sm font-semibold transition-colors duration-150 hover:text-gray-800"
            onClick={() => toggleMenu(item.title)}
            style={itemStyle}
          >
            <span className="inline-flex items-center">
              {item.icon}
              <span className="ml-4">{item.title}</span>
            </span>
            {isOpen ? <FiChevronDown className="w-4 h-4" /> : <FiChevronRight className="w-4 h-4" />}
          </button>
          {isOpen && (
            <ul className="p-2 mt-2 space-y-2 overflow-hidden text-sm font-medium rounded-md shadow-inner bg-gray-50">
              {item.subItems.map((subItem) => (
                <li key={subItem.title}>
                  <Link
                    to={subItem.to || '#'}
                    className="w-full inline-block px-4 py-2 text-sm hover:text-gray-800"
                    style={itemStyle}
                  >
                    {subItem.title}
                  </Link>
                </li>
              ))}
            </ul>
          )}
        </li>
      );
    }

    return (
      <li className="relative px-6 py-3" key={item.title}>
        <Link
          className="inline-flex items-center w-full text-sm font-semibold transition-colors duration-150 hover:text-gray-800"
          to={item.to || '#'}
          style={itemStyle}
        >
          {item.icon}
          <span className="ml-4">{item.title}</span>
        </Link>
      </li>
    );
  };

  return (
    <aside className={`z-20 w-64 overflow-y-auto bg-white flex-shrink-0 ${isOpen ? 'block' : 'hidden'} lg:block`}>
      <div className="py-4 text-gray-500">
        <div className="flex justify-between items-center px-6 mb-4">
          <Link to="/" className="text-lg font-bold" style={primaryColor ? { color: primaryColor } : { color: '#3B82F6' }}>Lead</Link>
          <button onClick={toggleSidebar} className="lg:hidden">
            <FiX className="w-6 h-6" />
          </button>
        </div>
        <ul className="mt-6">
          {menuItems.map(renderMenuItem)}
        </ul>
      </div>
    </aside>
  );
};

export default Sidebar;