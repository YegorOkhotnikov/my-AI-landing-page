import { ArrowRight } from "lucide-react"

export default function Hero() {
  return (
    <section className="min-h-screen relative overflow-hidden bg-gradient-primary flex items-center">
      {/* Geometric Background */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-96 h-96 bg-white rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-secondary rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 relative">
        <div className="max-w-3xl">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 animate-fade-in">
            Transform Your Business with AI Solutions
          </h1>
          <p className="text-xl text-purple-100 mb-8 animate-slide-up">
            Leverage the power of artificial intelligence to drive innovation, efficiency, and growth in your tech
            company.
          </p>
          <a
            href="#contact"
            className="inline-flex items-center px-6 py-3 bg-white text-primary rounded-md hover:bg-purple-50 transition-colors animate-slide-up"
          >
            Get Started
            <ArrowRight className="ml-2 h-5 w-5" />
          </a>
        </div>
      </div>
    </section>
  )
}

