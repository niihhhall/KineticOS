import { PricingTier, Testimonial, Feature } from './types';

export const PRICING_TIERS: PricingTier[] = [
  {
    name: "Starter",
    price: 97,
    originalPrice: 197,
    features: [
      "Basic Business Dashboard",
      "Simple CRM",
      "Task Management",
      "Lifetime Updates"
    ],
    ctaText: "Get Starter",
    isPopular: false,
    stripePriceId: "price_starter_placeholder" // Replace with actual Stripe Price ID
  },
  {
    name: "Pro System",
    price: 247,
    originalPrice: 497,
    features: [
      "All 6 Integrated HQs",
      "Advanced Financial Automation",
      "Client Portal Templates",
      "Marketing & Content Planner",
      "Priority Support",
      "Video Setup Course"
    ],
    ctaText: "Get Pro Access",
    isPopular: true,
    stripePriceId: "price_pro_placeholder" // Replace with actual Stripe Price ID
  },
  {
    name: "VIP Scaling",
    price: 497,
    originalPrice: 997,
    features: [
      "Everything in Pro",
      "1-on-1 Onboarding Call (60m)",
      "Custom Workflow Audit",
      "Private Community Access",
      "Quarterly Strategy Review"
    ],
    ctaText: "Apply for VIP",
    isPopular: false,
    stripePriceId: "price_vip_placeholder" // Replace with actual Stripe Price ID
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    name: "Sarah Jenkins",
    role: "Brand Designer",
    income: "$118k/yr",
    quote: "I was drowning in Trello boards and lost invoices. KineticOS literally gave me my weekends back. My revenue is up 42% because I'm not playing admin tag.",
    image: "https://picsum.photos/100/100?random=1",
    improvement: "+42% Revenue"
  },
  {
    name: "Marcus Chen",
    role: "Web Developer",
    income: "$145k/yr",
    quote: "The financial HQ alone is worth the price. I stopped leaking money on forgotten subscriptions and missed billable hours. It pays for itself every week.",
    image: "https://picsum.photos/100/100?random=2",
    improvement: "Saved 15hrs/week"
  },
  {
    name: "Elena Rodriguez",
    role: "Copywriter",
    income: "$92k/yr",
    quote: "I tried building my own Notion system 5 times. It was a mess. KineticOS is clean, fast, and actually makes me want to do my admin work.",
    image: "https://picsum.photos/100/100?random=3",
    improvement: "+58% Profit Margin"
  }
];

export const HQ_FEATURES: Feature[] = [
  {
    title: "Business HQ",
    description: "Your 30-second morning brief. Active projects, revenue pulse, and urgent tasks—zero tab-switching required.",
    icon: "🏢"
  },
  {
    title: "Clients & Projects HQ",
    description: "From first contact to final deliverable in one unified view. Never ask \"what's the status?\" again.",
    icon: "🤝"
  },
  {
    title: "Finance HQ",
    description: "Real-time profit visibility. Track income, expenses, and margins automatically. Tax season becomes a 5-minute export.",
    icon: "💰"
  },
  {
    title: "Productivity HQ",
    description: "Your daily operating rhythm. Tasks auto-organize by priority. Recurring work never falls through cracks.",
    icon: "⚡"
  },
  {
    title: "Social HQ",
    description: "Content calendar that actually works. Plan 30 days ahead across all platforms without spreadsheet chaos.",
    icon: "📱"
  },
  {
    title: "Marketing HQ",
    description: "Know what's working. Track every campaign, ad, and partnership with ROI clarity most freelancers never achieve.",
    icon: "📊"
  }
];