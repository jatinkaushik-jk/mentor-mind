"use client";

import { useState } from "react";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";

const monthlyData = [
  { name: "Jan", hours: 0 },
  { name: "Feb", hours: 0 },
  { name: "Mar", hours: 0 },
  { name: "Apr", hours: 0 },
  { name: "May", hours: 0 },
  { name: "Jun", hours: 0 },
  { name: "Jul", hours: 0 },
  { name: "Aug", hours: 0 },
  { name: "Sep", hours: 0 },
  { name: "Oct", hours: 0 },
  { name: "Nov", hours: 0 },
  { name: "Dec", hours: 0 },
];

const yearlyData = [
  { name: "2020", hours: 0 },
  { name: "2021", hours: 0 },
  { name: "2022", hours: 0 },
  { name: "2023", hours: 0 },
  { name: "2024", hours: 0 },
];

export default function LearningActivityChart() {
  const [activeTab, setActiveTab] = useState("monthly");

  return (
    <Card className="w-full p-4 px-0 bg-white dark:bg-gray-900 shadow-md">
      <CardContent className="space-y-4 px-3 md:px-6">
        {/* Header */}
        <div className="flex justify-between items-center">
          <h2 className="text-lg font-semibold">Learning Activity</h2>
          {/* Tabs for Switching */}
          <Tabs defaultValue="monthly" onValueChange={setActiveTab}>
            <TabsList className="bg-gray-100 dark:bg-gray-800 p-1 rounded-md">
              <TabsTrigger value="monthly">Monthly</TabsTrigger>
              <TabsTrigger value="yearly">Yearly</TabsTrigger>
            </TabsList>
          </Tabs>
        </div>

        {/* Chart Container */}
        <motion.div
          key={activeTab}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className="h-64 w-full"
        >
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart
              data={activeTab === "monthly" ? monthlyData : yearlyData}
              margin={{ top: 10, right: 20, left: 0, bottom: 0 }}
            >
              <defs>
                <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#84f5e3" stopOpacity={0.8} />
                  <stop offset="95%" stopColor="#b8fff4" stopOpacity={0} />
                </linearGradient>
              </defs>
              <XAxis dataKey="name" stroke="#008080" />
              <YAxis stroke="#008080" />
              <Tooltip />
              <Area
                type="monotone"
                dataKey="hours"
                stroke="#008080"
                fillOpacity={1}
                fill="url(#colorUv)"
              />
            </AreaChart>
          </ResponsiveContainer>
        </motion.div>
      </CardContent>
    </Card>
  );
}
