export type Advisor = {
  id: number;
  slug: string;
  name: string;
  role: string;
  badges: string[];
  bio: string;
  imageUrl: string;
};

export const advisors: Advisor[] = [
  {
    id: 0,
    slug: "michael-richardson",
    name: "Michael Richardson",
    role: "Founder & Chief Investment Officer",
    badges: ["CFP®", "CFA", "MBA"],
    bio: "25+ years experience in wealth management and portfolio construction for high-net-worth families.",
    imageUrl: "/images/a1.png",
  },
  {
    id: 1,
    slug: "sarah-chen",
    name: "Sarah Chen",
    role: "Senior Financial Planner",
    badges: ["CFP®", "EA"],
    bio: "Specializes in tax-efficient retirement planning and estate strategies for business owners and families.",
    imageUrl: "/images/a2.png",
  },
  {
    id: 2,
    slug: "david-martinez",
    name: "David Martinez",
    role: "Wealth Advisor",
    badges: ["CFP®", "ChFC"],
    bio: "Specializes in tax-efficient retirement planning and estate strategies for business owners and families.",
    imageUrl: "/images/a3.png",
  },
  {
    id: 3,
    slug: "sarah-chen-2",
    name: "Sarah Chen",
    role: "Senior Financial Planner",
    badges: ["CFP®", "EA"],
    bio: "Specializes in tax-efficient retirement planning and estate strategies for business owners and families.",
    imageUrl: "/images/a4.png",
  },
  {
    id: 4,
    slug: "sarah-chen-3",
    name: "Sarah Chen",
    role: "Senior Financial Planner",
    badges: ["CFP®", "EA"],
    bio: "Specializes in tax-efficient retirement planning and estate strategies for business owners and families.",
    imageUrl: "/images/a5.png",
  },
  {
    id: 5,
    slug: "sarah-chen-4",
    name: "Sarah Chen",
    role: "Senior Financial Planner",
    badges: ["CFP®", "EA"],
    bio: "Specializes in tax-efficient retirement planning and estate strategies for business owners and families.",
    imageUrl: "/images/a6.png",
  },
];
