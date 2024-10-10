import React, { useState, useRef, useEffect } from 'react';
import { FiSettings } from 'react-icons/fi';

interface MenuConfigButtonProps {
  onChangeMenuPosition: (position: 'left' | 'top' | 'right') => void;
}

const MenuConfigButton: React.FC<MenuConfigButtonProps> = ({ onChangeMenuPosition }) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="p-2 text-gray-400 rounded-full hover:text-gray-600 hover:bg-gray-100"
        aria-label="Menu Configuration"
      >
        <FiSettings className="w-5 h-5" />
      </button>
      {isOpen && (
        <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 z-10">
          <button
            onClick={() => {
              onChangeMenuPosition('left');
              setIsOpen(false);
            }}
            className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 w-full text-left"
          >
            Menu a la izquierda
          </button>
          <button
            onClick={() => {
              onChangeMenuPosition('top');
              setIsOpen(false);
            }}
            className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 w-full text-left"
          >
            Menu en el header
          </button>
          <button
            onClick={() => {
              onChangeMenuPosition('right');
              setIsOpen(false);
            }}
            className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 w-full text-left"
          >
            Menu a la derecha
          </button>
        </div>
      )}
    </div>
  );
};

export default MenuConfigButton;