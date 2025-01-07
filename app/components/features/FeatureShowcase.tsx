"use client"

import { useState } from "react"
import { Users2, Target, Bell, Check } from "lucide-react"

export function FeatureShowcase() {
  const [activeFeature, setActiveFeature] = useState('shared-tasks')

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
      {/* Clean Menu Cards */}
      <div className="space-y-3">
        {[
          {
            id: "shared-tasks",
            title: "Shared Tasks & Accountability",
            description: "Work on goals together and keep each other motivated",
            icon: <Users2 className="h-5 w-5" />
          },
          {
            id: "achievement",
            title: "Achievement System",
            description: "Stay motivated with rewards and milestones for consistent effort",
            icon: <Target className="h-5 w-5" />
          },
          {
            id: "reminders",
            title: "Smart Reminders",
            description: "Never miss a duty with customizable notifications",
            icon: <Bell className="h-5 w-5" />
          }
        ].map((feature) => (
          <div
            key={feature.id}
            onMouseEnter={() => setActiveFeature(feature.id)}
            className={`group p-6 rounded-2xl transition-all duration-300 cursor-pointer
              ${activeFeature === feature.id 
                ? 'bg-blue-50 ring-1 ring-blue-500/20' 
                : 'hover:bg-zinc-50'}`}
          >
            <div className="flex gap-4 items-start">
              <div className={`p-2 rounded-lg transition-colors duration-300
                ${activeFeature === feature.id 
                  ? 'bg-blue-500 text-white' 
                  : 'bg-zinc-100 text-zinc-400 group-hover:text-zinc-500'}`}
              >
                {feature.icon}
              </div>
              <div>
                <h3 className={`font-medium text-base mb-1 transition-colors duration-300
                  ${activeFeature === feature.id ? 'text-blue-600' : 'text-zinc-800'}`}
                >
                  {feature.title}
                </h3>
                <p className="text-sm text-zinc-500">
                  {feature.description}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Clean Demo Cards */}
      <div className="relative lg:sticky lg:top-8">
        <div className="relative rounded-2xl overflow-hidden bg-white ring-1 ring-zinc-200">
          {/* Shared Tasks Demo */}
          <div className={`transition-all duration-300 ${activeFeature === 'shared-tasks' ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-full absolute inset-0'}`}>
            <div className="p-6">
              <div className="flex items-center gap-3 mb-6">
                <div className="flex -space-x-2">
                  <div className="h-8 w-8 rounded-lg bg-blue-500 flex items-center justify-center text-sm font-medium text-white ring-2 ring-white">
                    Y
                  </div>
                  <div className="h-8 w-8 rounded-lg bg-indigo-500 flex items-center justify-center text-sm font-medium text-white ring-2 ring-white">
                    T
                  </div>
                </div>
                <div>
                  <p className="text-sm font-medium text-zinc-900">Today's Shared Tasks</p>
                  <p className="text-xs text-zinc-500">You & Tom are working on this together</p>
                </div>
              </div>
              <div className="space-y-2">
                {[
                  { task: "Morning Workout", time: "7:00 AM", completed: true, completedBy: "✓ Done by you" },
                  { task: "Read 20 pages", time: "8:30 AM", completed: true, completedBy: "✓ Done by you and Tom" },
                  { task: "Evening Run", time: "6:00 PM", completed: false }
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3 p-3 rounded-xl hover:bg-zinc-50">
                    <div className={`h-6 w-6 rounded-md flex items-center justify-center
                      ${item.completed 
                        ? 'bg-green-500 text-white' 
                        : 'ring-1 ring-zinc-200 bg-white'}`}
                    >
                      {item.completed && <Check className="h-3.5 w-3.5" />}
                    </div>
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="text-sm font-medium text-zinc-900">{item.task}</span>
                        {item.completed && (
                          <span className="text-xs px-1.5 py-0.5 rounded-md bg-blue-50 text-blue-600">
                            {item.completedBy}
                          </span>
                        )}
                      </div>
                      <span className="text-xs text-zinc-500">{item.time}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Achievement Demo */}
          <div className={`transition-all duration-300 ${activeFeature === 'achievement' ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-full absolute inset-0'}`}>
            <div className="p-6">
              <div className="grid grid-cols-2 gap-3">
                {[
                  { title: "7 Day Streak", progress: "7/7", icon: "🔥" },
                  { title: "Early Bird", progress: "5/10", icon: "🌅" },
                  { title: "Team Player", progress: "12/15", icon: "🤝" },
                  { title: "Goal Setter", progress: "3/5", icon: "🎯" }
                ].map((achievement) => (
                  <div key={achievement.title} className="p-4 rounded-xl bg-zinc-50 hover:bg-zinc-100 transition-colors">
                    <div className="text-2xl mb-2">{achievement.icon}</div>
                    <p className="text-sm font-medium text-zinc-900">{achievement.title}</p>
                    <p className="text-xs text-zinc-500">{achievement.progress}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Reminders Demo */}
          <div className={`transition-all duration-300 ${activeFeature === 'reminders' ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-full absolute inset-0'}`}>
            <div className="p-6">
              <div className="space-y-2">
                {[
                  { time: "7:00 AM", title: "Morning Workout", type: "Daily" },
                  { time: "8:30 AM", title: "Reading Time", type: "Weekly" },
                  { time: "6:00 PM", title: "Evening Run", type: "Custom" }
                ].map((reminder) => (
                  <div key={reminder.time} className="flex items-center gap-3 p-3 rounded-xl hover:bg-zinc-50">
                    <div className="h-8 w-8 rounded-lg bg-zinc-100 flex items-center justify-center text-zinc-500">
                      <Bell className="h-4 w-4" />
                    </div>
                    <div>
                      <p className="text-sm font-medium text-zinc-900">{reminder.title}</p>
                      <p className="text-xs text-zinc-500">{reminder.time} · {reminder.type}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
} 