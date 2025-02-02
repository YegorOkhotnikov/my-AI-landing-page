export default function Clients() {
  return (
    <section id="clients" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Trusted by Industry Leaders</h2>
          <p className="text-xl text-gray-600">
            We've helped numerous tech companies achieve their AI transformation goals
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center justify-items-center">
          {[...Array(8)].map((_, i) => (
            <div key={i} className="w-32 h-12 bg-gray-200 rounded-lg animate-pulse" />
          ))}
        </div>

        <div className="mt-16 text-center">
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            With over 5 years of experience in AI consulting, we've successfully implemented solutions across various
            industries, helping companies achieve their digital transformation goals.
          </p>
        </div>
      </div>
    </section>
  )
}

