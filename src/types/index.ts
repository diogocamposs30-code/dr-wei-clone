export interface FreeGift {
  name: string;
  image: string;
  originalPrice: string;
  alt: string;
}

export interface Testimonial {
  reviewer: string;
  rating: number;
  text: string;
}

export interface FaqItem {
  question: string;
  answer: string;
}

export interface ProductImage {
  src: string;
  alt: string;
  width: number;
  height: number;
}
