import Head from 'next/head'

const plans = [
  {
    name: "Starter",
    price: "Free",
    features: [
      "Basic sequence analysis",
      "Limited API calls",
      "Community support",
      "1GB storage"
    ]
  },
  {
    name: "Professional",
    price: "$299/month",
    features: [
      "Advanced AI analysis",
      "Unlimited API calls",
      "Priority support",
      "100GB storage",
      "Team collaboration tools"
    ]
  },
  {
    name: "Enterprise",
    price: "Custom",
    features: [
      "Full platform access",
      "Custom AI model training",
      "Dedicated support",
      "Unlimited storage",
      "Custom integrations",
      "On-premise deployment option"
    ]
  }
]

export default function Pricing() {
  return (
    <div className="min-h-screen pt-20">
      <Head>
        <title>Pricing | BioKEA.ai</title>
        <meta name="description" content="BioKEA.ai pricing plans and features" />
      </Head>

      <main className="container mx-auto px-4 py-12">
        <h1 className="text-5xl font-bold text-center mb-16">Pricing Plans</h1>

        <div className="grid gap-8 md:grid-cols-3 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <div key={index} className="p-8 rounded-xl bg-gradient-to-br from-blue-900/30 to-yellow-500/30 backdrop-blur-sm">
              <h2 className="text-2xl font-bold mb-4">{plan.name}</h2>
              <div className="text-3xl font-bold mb-6 text-blue-400">{plan.price}</div>
              <ul className="space-y-3">
                {plan.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center">
                    <span className="mr-2">✓</span>
                    {feature}
                  </li>
                ))}
              </ul>
              <button className="w-full mt-8 py-3 px-6 bg-blue-600 hover:bg-blue-700 rounded-lg transition-colors">
                Get Started
              </button>
            </div>
          ))}
        </div>
      </main>
    </div>
  )
} 