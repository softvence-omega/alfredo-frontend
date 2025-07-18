// Define a type for your user (example)
export interface User {
    id: string;
    name: string;
    email: string;
  }
  
  // Define a type for your app's theme (example)
  export type Theme = 'light' | 'dark';
  
  // Define a type for your app's routes (example)
  export type Route = {
    path: string;
    component: React.ComponentType;
    exact?: boolean;
  };

  // Contact page type 
  export type FormData = {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  message: string;
};

// Service plan card 
export interface Plan {
    title: string;
    duration: string;
    price: number;
    originalPrice?: number;
    badge?: string;
    features: string[];
}

// Plans page 
export interface MembershipStage {
  title: string;
  subtitle: string;
  completed: boolean;
}

// Bonus Progamme page 
export interface Card {
  title: string;
  titleSub: string;
  amount: number;
  currency?: string;
  bgColor: string;
  borderColor: string;
  img: string;
  color: string;
}
export interface InviteDataItem {
  headTitle: string;
  points: string[];
}
// -------------------------