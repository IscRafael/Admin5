import React from 'react';
import { useTheme } from '../context/ThemeContext';

interface StatCardProps {
  title: string;
  value: string;
  icon: React.ReactNode;
}

const StatCard: React.FC<StatCardProps> = ({ title, value, icon }) => {
  const { primaryColor } = useTheme();

  const iconStyle = primaryColor
    ? { backgroundColor: `${primaryColor}20`, color: primaryColor }
    : { backgroundColor: '#3B82F620', color: '#3B82F6' };

  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <div className="flex items-center">
        <div className="p-3 rounded-full" style={iconStyle}>
          {React.cloneElement(icon as React.ReactElement, { style: { color: iconStyle.color } })}
        </div>
        <div className="mx-5">
          <h4 className="text-2xl font-semibold text-gray-700">{value}</h4>
          <div className="text-gray-500">{title}</div>
        </div>
      </div>
    </div>
  );
};

export default StatCard;