import React from 'react';

const TopProducts = () => {
  const products = [
    { name: 'Basic Tees', percentage: 55, color: '#98D89E' },
    { name: 'Custom Short Pants', percentage: 31, color: '#F6DC7D' },
    { name: 'Super Hoodies', percentage: 14, color: '#EE8484' },
  ];

  const radius = 40;
  const strokeWidth = 10;
  const circumference = 2 * Math.PI * radius;
  let cumulativePercentage = 0;

  return (
    <div className="bg-white rounded-xl p-4 md:p-6 shadow-lg">
      {/* Header: Top Products + Date on the right */}
      <div className="flex justify-between items-center mb-6">
        <h3 className="text-lg font-semibold">Top Products</h3>
        <p className="text-sm text-gray-500">May - June 2021</p>
      </div>

      <div className="flex flex-col md:flex-row items-center md:items-start gap-6 md:gap-12">
        {/* Ring Chart */}
        <div className="relative w-[145px] h-[145px]">
          <svg viewBox="0 0 100 100" className="transform -rotate-90 w-full h-full">
            {products.map((product, index) => {
              const segmentLength = (product.percentage / 100) * circumference;
              const dashOffset = circumference - cumulativePercentage;
              cumulativePercentage += segmentLength;

              return (
                <circle
                  key={product.name}
                  cx="50"
                  cy="50"
                  r={radius}
                  fill="none"
                  stroke={product.color}
                  strokeWidth={strokeWidth}
                  strokeDasharray={`${segmentLength} ${circumference - segmentLength}`}
                  strokeDashoffset={dashOffset}
                  strokeLinecap="round"
                  className="transition-all duration-500"
                />
              );
            })}
          </svg>
        </div>

        {/* Product Details */}
        <div className="space-y-4">
          {products.map(product => (
            <div key={product.name} className="flex items-start space-x-2.5">
              <div className="w-3 h-3 rounded-full mt-1.5" style={{ backgroundColor: product.color }}></div>
              <div>
                <div className="font-semibold text-base">{product.name}</div>
                <div className="text-sm text-gray-500">{product.percentage}%</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TopProducts;
