import type { LucideProps } from "lucide-react";

export type EventType = {
  id: number;
  title: string;
  date: string;
  time: string;
  location: string;
  price: string;
  image: string;
  rating: number;
  attendees: number;
  category: string;
  isOnline: boolean;
  isTrending?: boolean;
};

export type CategoryType = {
  id: number;
  name: String;
  icon: React.ForwardRefExoticComponent<Omit<LucideProps, "ref"> & React.RefAttributes<SVGSVGElement>>;
  color: string;
};
