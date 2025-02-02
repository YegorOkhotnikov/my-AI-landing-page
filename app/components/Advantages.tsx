import { Brain, Gauge, LineChart, Lock } from "lucide-react"

const advantages = [
  {
    icon: Brain,
    title: "Smart Solutions",
    description: "Custom AI solutions tailored to your specific business needs and goals.",
  },
  {
    icon: Gauge,
    title: "Increased Efficiency",
    description: "Optimize operations and reduce costs with AI-powered automation.",
  },
  {
    icon: LineChart,
    title: "Data-Driven Insights",
    description: "Make better decisions with advanced analytics and predictive modeling.",
  },
  {
    icon: Lock,
    title: "Secure Integration",
    description: "Enterprise-grade security measures for all AI implementations.",
  },
]

export default function Advantages() {
  return (
    <section id="advantages" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Why Choose Our AI Services?</h2>
          <p className="text-xl text-gray-600">We help companies leverage AI to achieve extraordinary results</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {advantages.map((advantage, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                <advantage.icon className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">{advantage.title}</h3>
              <p className="text-gray-600">{advantage.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

