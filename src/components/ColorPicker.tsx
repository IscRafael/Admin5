import React, { useState } from 'react';
import { useTheme } from '../context/ThemeContext';

const ColorPicker: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [customColor, setCustomColor] = useState('');
  const { primaryColor, setPrimaryColor } = useTheme();

  const predefinedColors = ['#3B82F6', '#10B981', '#F59E0B', '#EF4444', '#8B5CF6'];

  const handleColorSelect = (color: string | null) => {
    setPrimaryColor(color);
    setIsOpen(false);
  };

  const handleCustomColorSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (/^#[0-9A-F]{6}$/i.test(customColor)) {
      setPrimaryColor(customColor);
      setIsOpen(false);
    }
  };

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="p-2 text-gray-400 rounded-full hover:text-gray-600 hover:bg-gray-100"
        aria-label="Color Picker"
      >
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
        </svg>
      </button>
      {isOpen && (
        <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 z-10">
          <div className="px-4 py-2 flex flex-wrap justify-between">
            <button
              onClick={() => handleColorSelect(null)}
              className="w-6 h-6 rounded-full m-1 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 bg-gradient-to-r from-blue-500 to-purple-500"
              title="Default color"
            />
            {predefinedColors.map((color) => (
              <button
                key={color}
                onClick={() => handleColorSelect(color)}
                className="w-6 h-6 rounded-full m-1 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100"
                style={{ backgroundColor: color }}
              />
            ))}
          </div>
          <form onSubmit={handleCustomColorSubmit} className="px-4 py-2">
            <input
              type="text"
              placeholder="#RRGGBB"
              value={customColor}
              onChange={(e) => setCustomColor(e.target.value)}
              className="w-full px-2 py-1 text-sm border rounded text-black"
            />
            <button
              type="submit"
              className="w-full mt-2 px-4 py-2 text-sm font-medium text-black bg-blue-600 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
            >
              Apply Custom Color
            </button>
          </form>
        </div>
      )}
    </div>
  );
};

export default ColorPicker;