export interface PricingTier {
  name: string;
  price: number;
  originalPrice: number;
  features: string[];
  isPopular?: boolean;
  ctaText: string;
  stripePriceId: string; // Added for backend integration
}

export interface Testimonial {
  name: string;
  role: string;
  income: string;
  quote: string;
  image: string;
  improvement: string;
}

export interface Feature {
  title: string;
  description: string;
  icon: string;
}