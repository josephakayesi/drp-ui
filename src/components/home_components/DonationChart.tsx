'use client'

import React from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer, Legend } from 'recharts';

const data = [
  { name: 'Children Education', value: 40, color: '#F2C94C' },
  { name: 'Health & Welfare', value: 25, color: '#FF9292' },
  { name: 'Family Support', value: 20, color: '#A0D995' },
  { name: 'Staff Salaries', value: 10, color: '#8DB7F0' },
  { name: 'Administrative', value: 5, color: '#D9D9D9' },
];

const DonationChart = () => {
  return (
    <section className="bg-secondary stretched-bg text-white py-16 md:py-24">
      <div className="container-padding mx-auto">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div>
            <h2 className="heading-md mb-6">How we spend your donations and where it goes</h2>
            <p className="mb-8 text-white/80">
              We understand that when you make a donation, you want to know exactly where your money is going and we pledge to be transparent.
            </p>
            
            <div className="grid grid-cols-2 gap-4">
              {data.map((item) => (
                <div key={item.name} className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full" style={{ backgroundColor: item.color }}></div>
                  <span className="text-sm text-white/90">{item.name}: {item.value}%</span>
                </div>
              ))}
            </div>
          </div>
          
          <div className="h-[300px] md:h-[400px]">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={data}
                  cx="50%"
                  cy="50%"
                  labelLine={false}
                  outerRadius={130}
                  innerRadius={90}
                  fill="#8884d8"
                  dataKey="value"
                >
                  {data.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
              </PieChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DonationChart;
