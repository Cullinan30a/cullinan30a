import React from 'react'
import { ChevronRight } from 'lucide-react'

export function Timeline({ events }) {
  return (
    <div className="space-y-8">
      {events.map((event, index) => (
        <div key={index} className="relative pl-8 border-l-2 border-gray-200">
          <div className="absolute w-4 h-4 bg-primary rounded-full -left-[9px] top-1.5 border-2 border-white"></div>
          <div className="mb-1">
            <span className="text-sm font-medium text-gray-600">{event.year}</span>
          </div>
          <h3 className="text-lg font-semibold mb-2">{event.title}</h3>
          <p className="text-gray-600">{event.description}</p>
          {event.achievements && (
            <ul className="mt-2 space-y-1">
              {event.achievements.map((achievement, i) => (
                <li key={i} className="flex items-start">
                  <ChevronRight className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                  <span className="text-gray-600">{achievement}</span>
                </li>
              ))}
            </ul>
          )}
        </div>
      ))}
    </div>
  )
}
