import { Card, CardContent } from "@/components/ui/card"
import { Star, Quote } from "lucide-react"

export function Reviews() {
  const reviews = [
    {
      name: "Sarah Chen",
      role: "CEO, TechCorp",
      company: "TechCorp",
      rating: 5,
      review:
        "LyraStack transformed our business with their AI-powered platform. We saw a 300% increase in efficiency within the first month. Their building blocks approach meant we could scale exactly as we needed.",
      outcome: "300% efficiency increase",
      avatar: "/placeholder.svg?height=60&width=60",
    },
    {
      name: "Michael Rodriguez",
      role: "CTO, HealthPlus",
      company: "HealthPlus",
      rating: 5,
      review:
        "The analytics dashboard they built is incredible - finally, data that everyone on our team can understand and act on. Patient satisfaction scores improved dramatically.",
      outcome: "85% patient satisfaction",
      avatar: "/placeholder.svg?height=60&width=60",
    },
    {
      name: "Emily Watson",
      role: "Founder, StartupX",
      company: "StartupX",
      rating: 5,
      review:
        "As a non-tech founder, I was worried about building our platform. LyraStack made it simple with their pay-as-you-go blocks. We launched in 3 weeks instead of 3 months!",
      outcome: "10x faster launch",
      avatar: "/placeholder.svg?height=60&width=60",
    },
    {
      name: "David Kim",
      role: "Operations Director, RetailMax",
      company: "RetailMax",
      rating: 5,
      review:
        "Their aftercare support is outstanding. 24/7 monitoring and proactive maintenance means we never worry about downtime. The SLA guarantees give us complete peace of mind.",
      outcome: "99.9% uptime achieved",
      avatar: "/placeholder.svg?height=60&width=60",
    },
    {
      name: "Lisa Thompson",
      role: "Marketing Director, EduTech",
      company: "EduTech",
      rating: 5,
      review:
        "The complete creative package was a game-changer. Logo, graphics, copy, and the platform itself - everything perfectly aligned with our brand. Students love the new interface!",
      outcome: "40% user engagement boost",
      avatar: "/placeholder.svg?height=60&width=60",
    },
    {
      name: "James Wilson",
      role: "VP Technology, FinanceFlow",
      company: "FinanceFlow",
      rating: 5,
      review:
        "The modular architecture they built scales beautifully. We started with basic features and added AI components as we grew. ROI was positive from month one.",
      outcome: "Positive ROI in 30 days",
      avatar: "/placeholder.svg?height=60&width=60",
    },
  ]

  return (
    <section id="reviews" className="py-20 bg-gradient-to-b from-slate-950 to-slate-900">
      <div className="w-full px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                What Our Clients Say
              </span>
            </h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Real stories from real businesses who've transformed their operations with LyraStack
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {reviews.map((review, index) => (
              <Card
                key={index}
                className="bg-slate-900/50 backdrop-blur-sm border-slate-800 hover:border-blue-500/50 transition-all duration-300 group h-full"
              >
                <CardContent className="p-6 flex flex-col h-full">
                  <div className="flex items-center mb-4">
                    <img
                      src={review.avatar || "/placeholder.svg"}
                      alt={review.name}
                      className="w-12 h-12 rounded-full mr-4 object-cover"
                    />
                    <div>
                      <h4 className="text-white font-semibold">{review.name}</h4>
                      <p className="text-slate-400 text-sm">{review.role}</p>
                      <p className="text-blue-400 text-sm">{review.company}</p>
                    </div>
                  </div>

                  <div className="flex mb-4">
                    {[...Array(review.rating)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
                    ))}
                  </div>

                  <div className="relative mb-4 flex-grow">
                    <Quote className="h-6 w-6 text-blue-400/30 absolute -top-2 -left-2" />
                    <p className="text-slate-300 italic pl-4">{review.review}</p>
                  </div>

                  <div className="bg-gradient-to-r from-green-900/30 to-blue-900/30 rounded-lg p-3 mt-auto">
                    <div className="text-sm font-semibold text-green-400 mb-1">Result:</div>
                    <div className="text-white text-sm font-medium">{review.outcome}</div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <div className="inline-flex items-center space-x-4 bg-slate-900/50 backdrop-blur-sm rounded-full px-6 py-3 border border-slate-800">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                ))}
              </div>
              <span className="text-white font-semibold">4.9/5 Average Rating</span>
              <span className="text-slate-400">•</span>
              <span className="text-slate-300">200+ Happy Clients</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
