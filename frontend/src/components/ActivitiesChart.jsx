import React from 'react';

const ActivitiesChart = () => {
  const data = {
    weeks: ['Week 1', 'Week 2', 'Week 3', 'Week 4'],
    guest: [500, 350, 250, 450],
    user: [450, 500, 300, 400],
  };

  const maxValue = Math.max(...data.guest, ...data.user);

  return (
    <div className="bg-white rounded-xl p-4 md:p-6 shadow-lg">
      <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-8 gap-4">
        <div>
          <h3 className="text-lg font-semibold">Activities</h3>
          <p className="text-sm text-gray-500">May - June 2021</p>
        </div>
        <div className="flex items-center gap-4 md:gap-8">
          <div className="flex items-center space-x-2">
            <div className="w-3 h-3 bg-[#98D89E] rounded-full"></div>
            <span className="text-sm text-gray-600">Guest</span>
          </div>
          <div className="flex items-center space-x-2">
            <div className="w-3 h-3 bg-[#EE8484] rounded-full"></div>
            <span className="text-sm text-gray-600">User</span>
          </div>
        </div>
      </div>

      <div className="relative h-[300px]">
        {/* Y-axis labels */}
        <div className="absolute left-0 top-0 h-full flex flex-col justify-between text-sm text-gray-500">
          {[500, 400, 300, 200, 100, 0].map((value) => (
            <span key={value}>{value}</span>
          ))}
        </div>

        {/* Chart grid lines */}
        <div className="absolute left-12 right-0 top-0 h-full flex flex-col justify-between">
          {[...Array(6)].map((_, i) => (
            <div key={i} className="border-b border-gray-100 w-full"></div>
          ))}
        </div>

        {/* Bars */}
        <div className="absolute left-12 right-0 top-0 bottom-0 flex justify-between px-8">
          {data.weeks.map((week, index) => (
            <div key={week} className="relative flex flex-col items-center h-full w-full">
              <div className="flex space-x-2 items-end h-full w-full">
                <div
                  className="w-12 bg-[#98D89E] rounded-t-lg transition-all duration-300"
                  style={{ height: `${(data.guest[index] / maxValue) * 100}%` }}
                ></div>
                <div
                  className="w-12 bg-[#EE8484] rounded-t-lg transition-all duration-300"
                  style={{ height: `${(data.user[index] / maxValue) * 100}%` }}
                ></div>
              </div>
              {/* X-axis label positioned absolutely at bottom */}
              <div className="absolute -bottom-6 text-sm text-gray-500 w-full text-center">
                {week}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ActivitiesChart;