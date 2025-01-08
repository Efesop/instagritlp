"use client"

import { useState, useEffect } from "react"
import { Users2, Target, Bell, Check, Plus, Share2, Clock, CheckCircle2, X, MessageCircle, BarChart3 } from "lucide-react"

export function FeatureShowcase() {
  const [activeFeature, setActiveFeature] = useState('shared-tasks')
  const [demoState, setDemoState] = useState(0)

  useEffect(() => {
    if (activeFeature === 'shared-tasks') {
      const interval = setInterval(() => {
        setDemoState((prev) => (prev + 1) % 8) // Extended to 8 states for more detail
      }, 2500)
      return () => clearInterval(interval)
    } else {
      setDemoState(0)
    }
  }, [activeFeature])

  const renderTaskDemo = () => {
    const notifications = [
      { state: 1, message: "Task shared with Tom", icon: Share2 },
      { state: 2, message: "Tom accepted!", icon: Check },
      { state: 3, message: "You completed your part", icon: Check },
      { state: 4, message: "Tom completed their part", icon: Check },
      { state: 5, message: "Task completed together! 🎉", icon: Check }
    ].filter(n => n.state === demoState)

    return (
      <div className="p-6">
        {/* Header with user avatars and task count */}
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-3">
            <div className="flex -space-x-2">
              <div className="h-8 w-8 rounded-lg bg-blue-500 flex items-center justify-center text-sm font-medium text-white ring-2 ring-white">
                Y
              </div>
              <div className={`h-8 w-8 rounded-lg bg-indigo-500 flex items-center justify-center text-sm font-medium text-white ring-2 ring-white
                ${demoState >= 1 ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-4'} 
                transition-all duration-500`}>
                T
              </div>
            </div>
            <div>
              <p className="text-sm font-medium text-zinc-900">Today&apos;s Shared Tasks</p>
              <p className="text-xs text-zinc-500">2 tasks · 1 completed</p>
            </div>
          </div>
          
          {/* Notification Badge */}
          {notifications.map((notif, i) => (
            <div 
              key={i}
              className="animate-slide-in-right px-3 py-1.5 rounded-full bg-blue-50 flex items-center gap-2"
            >
              <notif.icon className="h-3.5 w-3.5 text-blue-500" />
              <span className="text-xs font-medium text-blue-600">{notif.message}</span>
            </div>
          ))}
        </div>

        <div className="space-y-3">
          {/* Previous completed task */}
          <div className="flex items-center gap-3 p-3 rounded-xl bg-zinc-50">
            <div className="h-6 w-6 rounded-md flex items-center justify-center bg-green-500 text-white">
              <Check className="h-3.5 w-3.5" />
            </div>
            <div className="flex-1">
              <div className="flex items-center gap-2">
                <span className="text-sm font-medium text-zinc-900">Morning Workout</span>
                <span className="text-xs px-1.5 py-0.5 rounded-md bg-blue-50 text-blue-600">
                  ✓ Done by you and Tom
                </span>
              </div>
              <div className="flex items-center gap-2 mt-1">
                <span className="text-xs text-zinc-500">7:00 AM</span>
                <div className="flex items-center gap-1">
                  
                </div>
              </div>
            </div>
          </div>

          {/* Active task with animations */}
          <div className={`flex items-center gap-3 p-3 rounded-xl transition-all duration-500 relative
            ${demoState === 0 ? 'bg-blue-50 ring-2 ring-blue-500/20' : 'bg-white hover:bg-zinc-50'}`}
          >
            {/* Task Status Icon */}
            <div className={`h-6 w-6 rounded-md flex items-center justify-center transition-all duration-500
              ${demoState === 0 
                ? 'bg-blue-500 text-white' 
                : demoState >= 5 
                  ? 'bg-green-500 text-white' 
                  : 'ring-1 ring-zinc-200 bg-white'}`}
            >
              {demoState === 0 && <Plus className="h-3.5 w-3.5 animate-task-create" />}
              {demoState === 1 && <Share2 className="h-3.5 w-3.5 text-blue-500 animate-share-bounce" />}
              {demoState === 2 && <Clock className="h-3.5 w-3.5 text-zinc-400" />}
              {demoState >= 5 && <Check className="h-3.5 w-3.5" />}
            </div>

            {/* Task Content */}
            <div className="flex-1">
              <div className="flex items-center gap-2">
                <span className="text-sm font-medium text-zinc-900">Evening Run</span>
                {/* User Avatars */}
                {demoState >= 1 && (
                  <div className="flex items-center gap-1.5 animate-slide-in-right">
                    <div className="h-5 w-5 rounded-md bg-blue-500 flex items-center justify-center text-[10px] font-medium text-white">
                      Y
                    </div>
                    {demoState >= 2 ? (
                      <div className="h-5 w-5 rounded-md bg-indigo-500 flex items-center justify-center text-[10px] font-medium text-white animate-task-create">
                        T
                      </div>
                    ) : (
                      <div className="h-5 w-5 rounded-md border-2 border-dashed border-indigo-500/30 flex items-center justify-center">
                        <Plus className="h-3 w-3 text-indigo-500/50" />
                      </div>
                    )}
                  </div>
                )}
              </div>

              {/* Task Details */}
              <div className="flex items-center gap-3 mt-1">
                <span className="text-xs text-zinc-500">6:00 PM</span>
                {demoState >= 2 && (
                  <div className="flex items-center gap-2 animate-slide-in-right">
                    {/* Your Status */}
                    <div className={`flex items-center gap-1 transition-colors duration-300
                      ${demoState >= 3 ? 'text-green-500' : 'text-zinc-400'}`}
                    >
                      <div className="h-4 w-4 relative">
                        {demoState >= 3 ? (
                          <CheckCircle2 className="h-4 w-4 animate-scale-in" />
                        ) : (
                          <Clock className="h-4 w-4" />
                        )}
                      </div>
                      <span className="text-xs">You</span>
                    </div>
                    {/* Tom's Status */}
                    <div className={`flex items-center gap-1 transition-colors duration-300
                      ${demoState >= 4 ? 'text-green-500' : 'text-zinc-400'}`}
                    >
                      <div className="h-4 w-4 relative">
                        {demoState >= 4 ? (
                          <CheckCircle2 className="h-4 w-4 animate-scale-in" />
                        ) : (
                          <Clock className="h-4 w-4" />
                        )}
                      </div>
                      <span className="text-xs">Tom</span>
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* Completion Badge */}
            {demoState >= 5 && (
              <div className="animate-task-complete">
                <div className="px-2 py-1 rounded-md bg-green-50 text-green-600 text-xs font-medium">
                  Completed! 🎉
                </div>
              </div>
            )}

            {/* Share Animation */}
            {demoState === 1 && (
              <div className="absolute -right-2 top-1/2 -translate-y-1/2">
                <div className="relative">
                  <Share2 className="h-4 w-4 text-blue-500 animate-share" />
                  <Share2 className="h-4 w-4 text-blue-500/50 absolute inset-0 animate-share-clone" />
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Task completion celebration */}
        {demoState >= 5 && (
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 via-transparent to-indigo-500/5 animate-gradient-pulse" />
          </div>
        )}
      </div>
    )
  }

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
          },
          {
            id: "analytics",
            title: "Detailed Analytics",
            description: "Track your progress with beautiful, interactive charts",
            icon: <BarChart3 className="h-5 w-5" />
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
            {renderTaskDemo()}
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

          {/* Analytics Demo */}
          <div className={`transition-all duration-300 ${activeFeature === 'analytics' ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-full absolute inset-0'}`}>
            <div className="p-6">
              <div className="flex items-center justify-between mb-6">
                <div>
                  <h3 className="text-sm font-medium text-zinc-900">Weekly Progress</h3>
                  <p className="text-xs text-zinc-500">Last 7 days</p>
                </div>
                <div className="flex items-center gap-2">
                  <div className="h-2 w-2 rounded-full bg-blue-500" />
                  <span className="text-xs text-zinc-500">Tasks</span>
                  <div className="h-2 w-2 rounded-full bg-indigo-500" />
                  <span className="text-xs text-zinc-500">Completion</span>
                </div>
              </div>

              <div className="h-[200px] flex items-end gap-4">
                {[65, 84, 95, 75, 89, 70, 92].map((value, i) => (
                  <div key={i} className="flex-1 flex flex-col items-center gap-2">
                    <div className="w-full relative h-full">
                      <div 
                        className="absolute bottom-0 left-0 w-full bg-blue-100 rounded-sm animate-chart-grow"
                        style={{ 
                          height: `${value}%`,
                          animationDelay: `${i * 100}ms`
                        }}
                      >
                        <div 
                          className="absolute bottom-0 left-0 w-full bg-blue-500 rounded-sm animate-chart-fill"
                          style={{ 
                            height: `${value * 0.8}%`,
                            animationDelay: `${(i * 100) + 500}ms`
                          }}
                        />
                      </div>
                    </div>
                    <span className="text-xs text-zinc-500">
                      {['M', 'T', 'W', 'T', 'F', 'S', 'S'][i]}
                    </span>
                  </div>
                ))}
              </div>

              <div className="mt-8 space-y-3">
                <div className="p-4 rounded-xl bg-zinc-50">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm font-medium text-zinc-900">Task Completion Rate</span>
                    <span className="text-sm font-medium text-green-500">↑ 12%</span>
                  </div>
                  <div className="w-full h-2 bg-zinc-200 rounded-full overflow-hidden">
                    <div className="h-full w-[85%] bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full animate-grow-width" />
                  </div>
                </div>

                <div className="p-4 rounded-xl bg-zinc-50">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm font-medium text-zinc-900">Weekly Streak</span>
                    <span className="text-sm font-medium text-green-500">↑ 3 days</span>
                  </div>
                  <div className="flex items-center gap-2">
                    {[1, 1, 1, 1, 1, 0.5, 0].map((day, i) => (
                      <div 
                        key={i}
                        className="h-8 w-8 rounded-lg flex items-center justify-center"
                        style={{
                          opacity: day,
                          backgroundColor: day === 1 ? '#3B82F6' : day === 0.5 ? '#93C5FD' : '#E5E7EB',
                          animation: `fade-in 0.3s ease-out forwards ${i * 100}ms`
                        }}
                      >
                        <Check className={`h-4 w-4 ${day === 0 ? 'text-zinc-400' : 'text-white'}`} />
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
} 