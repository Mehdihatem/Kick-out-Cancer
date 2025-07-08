'use client';

import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import { TrendingUp, Target, Users } from 'lucide-react';

const ProgressBarLive = () => {
  const [progressData, setProgressData] = useState({
    currentAmount: 75000,
    targetAmount: 100000,
    teamsRegistered: 24,
    totalTeams: 32,
    lastUpdate: new Date()
  });

  const [isLoading, setIsLoading] = useState(false);

  // Simulate API call to HelloAsso
  const fetchProgressData = async () => {
    setIsLoading(true);
    try {
      // In a real implementation, this would be an actual API call to HelloAsso
      // const response = await fetch('https://api.helloasso.com/v1/associations/kickoutcancer/events/tournoi-2025');
      // const data = await response.json();
      
      // For now, we'll simulate the data with some random variation
      await new Promise(resolve => setTimeout(resolve, 1000)); // Simulate API delay
      
      const variation = Math.random() * 1000 - 500; // Random variation ±500€
      const newAmount = Math.max(0, progressData.currentAmount + variation);
      
      setProgressData({
        currentAmount: newAmount,
        targetAmount: 100000,
        teamsRegistered: Math.min(32, progressData.teamsRegistered + (Math.random() > 0.7 ? 1 : 0)),
        totalTeams: 32,
        lastUpdate: new Date()
      });
    } catch (error) {
      console.error('Error fetching progress data:', error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    // Initial fetch
    fetchProgressData();

    // Set up interval for live updates (every 15 seconds)
    const interval = setInterval(fetchProgressData, 15000);

    return () => clearInterval(interval);
  }, []);

  const progressPercentage = (progressData.currentAmount / progressData.targetAmount) * 100;
  const teamsPercentage = (progressData.teamsRegistered / progressData.totalTeams) * 100;

  return (
    <div className="bg-gradient-to-r from-gray-800/50 to-gray-900/50 border border-gray-700/50 rounded-2xl p-6">
      <div className="flex items-center justify-between mb-6">
        <h3 className="font-bebas text-xl text-text-light">Progression en direct</h3>
        <motion.div
          className="flex items-center gap-2"
          animate={{ rotate: isLoading ? 360 : 0 }}
          transition={{ duration: 1, repeat: isLoading ? Infinity : 0 }}
        >
          <TrendingUp className="w-5 h-5 text-lime" />
          <span className="text-gray-400 text-sm">
            {progressData.lastUpdate.toLocaleTimeString()}
          </span>
        </motion.div>
      </div>

      {/* Financial Progress */}
      <div className="mb-6">
        <div className="flex items-center justify-between mb-2">
          <span className="text-gray-400 text-sm">Objectif financier</span>
          <span className="text-lime font-semibold">
            {progressData.currentAmount.toLocaleString()}€ / {progressData.targetAmount.toLocaleString()}€
          </span>
        </div>
        <div className="w-full bg-gray-700 rounded-full h-3 overflow-hidden">
          <motion.div
            className="bg-gradient-to-r from-lime to-turquoise h-3 rounded-full"
            initial={{ width: 0 }}
            animate={{ width: `${progressPercentage}%` }}
            transition={{ duration: 1, ease: "easeOut" }}
          />
        </div>
        <div className="text-right mt-1">
          <span className="text-lime font-semibold text-sm">
            {progressPercentage.toFixed(1)}%
          </span>
        </div>
      </div>

      {/* Teams Progress */}
      <div className="mb-4">
        <div className="flex items-center justify-between mb-2">
          <span className="text-gray-400 text-sm">Équipes inscrites</span>
          <span className="text-lime font-semibold">
            {progressData.teamsRegistered} / {progressData.totalTeams}
          </span>
        </div>
        <div className="w-full bg-gray-700 rounded-full h-2 overflow-hidden">
          <motion.div
            className="bg-gradient-to-r from-magenta to-orange h-2 rounded-full"
            initial={{ width: 0 }}
            animate={{ width: `${teamsPercentage}%` }}
            transition={{ duration: 1, ease: "easeOut" }}
          />
        </div>
        <div className="text-right mt-1">
          <span className="text-magenta font-semibold text-sm">
            {teamsPercentage.toFixed(1)}%
          </span>
        </div>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-2 gap-4 mt-6">
        <div className="text-center p-3 bg-gray-800/50 rounded-xl border border-gray-700/50">
          <Target className="w-6 h-6 text-lime mx-auto mb-2" />
          <div className="text-text-light font-semibold">
            {progressData.targetAmount.toLocaleString()}€
          </div>
          <div className="text-gray-400 text-xs">Objectif</div>
        </div>
        <div className="text-center p-3 bg-gray-800/50 rounded-xl border border-gray-700/50">
          <Users className="w-6 h-6 text-magenta mx-auto mb-2" />
          <div className="text-text-light font-semibold">
            {progressData.totalTeams}
          </div>
          <div className="text-gray-400 text-xs">Équipes max</div>
        </div>
      </div>

      {/* Live indicator */}
      <div className="flex items-center justify-center gap-2 mt-4">
        <motion.div
          className="w-2 h-2 bg-lime rounded-full"
          animate={{ opacity: [1, 0.3, 1] }}
          transition={{ duration: 2, repeat: Infinity }}
        />
        <span className="text-gray-400 text-xs">Mise à jour en direct</span>
      </div>
    </div>
  );
};

export default ProgressBarLive; 