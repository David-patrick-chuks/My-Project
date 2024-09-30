import { IconEdit, IconHeartHandshake, IconUser, IconUsers } from "@tabler/icons-react";

export const Steps = [
  {
    id: "register",
    icon: IconUser,
    title: "Register",
    description: "Create an account as a donor or receiver to start using the platform.",
    cta: { text: "Get Started", href: "/register" },
  },
  {
    id: "post-or-browse",
    icon: IconEdit,
    title: "Post or Browse",
    description: "Donors can post available food items, while receivers browse the listings.",
    cta: { text: "Explore Now", href: "/browse" },
  },
  {
    id: "claim-or-donate",
    icon: IconHeartHandshake,
    title: "Claim or Donate",
    description: "Receivers claim items they need, and donors arrange for donation fulfillment.",
    cta: { text: "Donate Now", href: "/donate" },
  },
  {
    id: "connect-and-share",
    icon: IconUsers,
    title: "Connect & Share",
    description: "Engage with the community and share your experience to help others.",
    cta: { text: "Join Us", href: "/community" },
  },
];



export const FooterLinks = [
  {
      id: "about-foodconnect",
      title: "About FoodConnect",
      links: [
          { id: "how-it-works", label: "How It Works", href: "/how-it-works" },
          { id: "our-mission", label: "Our Mission", href: "/our-mission" },
          { id: "faqs", label: "FAQs", href: "/faqs" },
      ],
  },
  {
      id: "donors",
      title: "Donors",
      links: [
          { id: "register-donor", label: "Register as a Donor", href: "/register-donor" },
          { id: "post-item", label: "Post an Item", href: "/post-item" },
          { id: "my-posts", label: "View Your Posts", href: "/my-posts" },
      ],
  },
  {
      id: "receivers",
      title: "Receivers",
      links: [
          { id: "register-receiver", label: "Register as a Receiver", href: "/register-receiver" },
          { id: "browse-items", label: "Browse Items", href: "/browse-items" },
          { id: "claim-item", label: "Claim an Item", href: "/claim-item" },
      ],
  },
  {
      id: "community",
      title: "Community",
      links: [
          { id: "success-stories", label: "Success Stories", href: "/success-stories" },
          { id: "donate-now", label: "Donate Now", href: "/donate" },
          { id: "volunteer", label: "Volunteer", href: "/volunteer" },
      ],
  },
  {
      id: "support",
      title: "Support",
      links: [
          { id: "contact-us", label: "Contact Us", href: "/contact" },
          { id: "report-issue", label: "Report an Issue", href: "/report-issue" },
          { id: "help-center", label: "Help Center", href: "/help-center" },
      ],
  },
];