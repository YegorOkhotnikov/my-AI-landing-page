"use client"

import { useState } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "CTO",
    company: "TechCorp",
    content:
      "The AI solutions provided by the team have transformed our operations, leading to a 40% increase in efficiency.",
  },
  {
    name: "Michael Chen",
    role: "Director of Innovation",
    company: "Future Systems",
    content: "Their expertise in AI integration helped us stay ahead of the competition. Highly recommended!",
  },
  {
    name: "Emily Rodriguez",
    role: "Head of Engineering",
    company: "DataFlow",
    content: "Outstanding service and results. The team's knowledge of AI implementation is unmatched.",
  },
]

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const next = () => {
    setCurrentIndex((currentIndex + 1) % testimonials.length)
  }

  const prev = () => {
    setCurrentIndex((currentIndex - 1 + testimonials.length) % testimonials.length)
  }

  return (
    <section id="testimonials" className="py-20 bg-gradient-primary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">What Our Clients Say</h2>
        </div>

        <div className="relative max-w-4xl mx-auto">
          <button
            onClick={prev}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-12 text-white hover:text-purple-200 transition-colors"
          >
            <ChevronLeft className="h-8 w-8" />
          </button>

          <div className="bg-white rounded-lg shadow-xl p-8">
            <blockquote className="text-xl text-gray-700 mb-6">"{testimonials[currentIndex].content}"</blockquote>
            <div className="flex items-center">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                <span className="text-primary font-bold text-xl">{testimonials[currentIndex].name[0]}</span>
              </div>
              <div className="ml-4">
                <div className="font-semibold text-gray-900">{testimonials[currentIndex].name}</div>
                <div className="text-gray-600">
                  {testimonials[currentIndex].role} at {testimonials[currentIndex].company}
                </div>
              </div>
            </div>
          </div>

          <button
            onClick={next}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-12 text-white hover:text-purple-200 transition-colors"
          >
            <ChevronRight className="h-8 w-8" />
          </button>
        </div>
      </div>
    </section>
  )
}

