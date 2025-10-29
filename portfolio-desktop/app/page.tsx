"use client";

import React, { useState } from 'react';
import { X, Home } from 'lucide-react';

const DesktopPortfolio = () => {
  const [openWindows, setOpenWindows] = useState(['about', 'code-experiences', 'work-gallery']);
  const [activeWindow, setActiveWindow] = useState('about');

  const windows = {
    'about': {
      title: 'About',
      content: 'With experience in Python, JavaScript, C#, HTML, and CSS, Casper is now in the 3rd semester at Fontys ICT college.',
      position: { top: '15%', right: '5%' }
    },
    'work-gallery': {
      title: 'Work gallery',
      content: 'Screenshots of various projects including terminal applications, data visualizations, and web development work.',
      position: { bottom: '5%', left: '5%' },
      images: true
    },
    'code-experiences': {
      title: 'Code experiences',
      content: 'Proficient with Python, JavaScript, C#, HTML, and CSS.',
      position: { bottom: '30%', right: '35%' },
      badges: true
    },
    'system-info': {
      title: 'System info',
      content: 'System Info: Static Next.js 14 + Tailwind CSS v4 build (no API, no backend).',
      position: { top: '20%', left: '30%' }
    }
  };

  const closeWindow = (id: string) => {
    setOpenWindows(openWindows.filter(w => w !== id));
    if (activeWindow === id && openWindows.length > 0) {
      setActiveWindow(openWindows[0]);
    }
  };

  const openWindow = (id: string) => {
    if (!openWindows.includes(id)) {
      setOpenWindows([...openWindows, id]);
    }
    setActiveWindow(id);
  };

  const focusWindow = (id: string) => {
    setActiveWindow(id);
  };

  return (
    <div className="fixed inset-0 bg-gradient-to-br from-blue-900 via-purple-900 to-blue-800 overflow-hidden">
      {/* Background Image Overlay */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0 bg-black/40"></div>
      </div>

      {/* Error Message - Wallpaper Not Available */}
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center text-white z-0">
        <div className="text-8xl mb-4">📄</div>
        <h2 className="text-2xl font-bold mb-2">This wallpaper is not available</h2>
        <p className="text-sm text-gray-300">ERR_NAME_NOT_RESOLVED</p>
      </div>

      {/* Top Navigation */}
      <nav className="absolute top-0 left-0 right-0 h-16 bg-black/50 backdrop-blur-sm border-b border-white/10 flex items-center justify-center z-50">
        <div className="flex items-center gap-8 text-white">
          <button className="text-lg font-semibold border-b-2 border-blue-400 pb-1">Home</button>
          <button className="text-lg font-semibold hover:text-blue-300">Works</button>
        </div>
        <button className="absolute right-4 top-4 text-blue-400 hover:text-blue-300">
          <Home size={28} />
        </button>
      </nav>

      {/* Sidebar Menu */}
      <div className="absolute left-8 top-32 flex flex-col gap-3 z-40">
        {Object.entries(windows).map(([id, window]) => (
          <button
            key={id}
            onClick={() => openWindow(id)}
            className={`px-4 py-2 rounded text-left transition-all ${
              openWindows.includes(id)
                ? 'bg-blue-600 text-white'
                : 'bg-gray-800 text-gray-200 hover:bg-gray-700'
            }`}
          >
            <span className="mr-2 text-blue-400">●</span>
            {window.title}
          </button>
        ))}
      </div>

      {/* Windows */}
      {openWindows.map((id, index) => {
        const window = windows[id];
        const isActive = activeWindow === id;
        
        return (
          <div
            key={id}
            onClick={() => focusWindow(id)}
            className="absolute transition-all"
            style={{
              ...window.position,
              zIndex: isActive ? 30 : 20 + index,
              maxWidth: window.images ? '800px' : '500px',
              minWidth: '400px'
            }}
          >
           {/* Window Frame */}
<div className={`bg-gray-800/95 backdrop-blur rounded-lg shadow-2xl border ${
  isActive ? 'border-blue-500' : 'border-gray-600'
}`}>
  {/* Title Bar */}
  <div className="bg-gray-700/90 px-4 py-2 rounded-t-lg flex items-center justify-between border-b border-gray-600">
    <h3 className="text-white font-semibold">{window.title}</h3>
    <button 
      onClick={(e) => {
        e.stopPropagation();
        closeWindow(id);
      }} 
      className="text-gray-400 hover:text-white"
    >
      <X size={18} />
    </button>
  </div>
  {/* Window Content */}
  <div className="p-4 text-white">
    {window.content}
  </div>
</div>