import FAQ from "./FAQ";

const faqItems = [
  {
    question: "What services do you offer?",
    answer:
      "We specialize in creating innovative digital solutions including web applications, data visualization platforms, and creative content management tools. Our focus is on delivering cutting-edge technology that solves real-world problems.",
  },
  {
    question: "How can I stay updated with your latest projects?",
    answer:
      "Subscribe to our newsletter to receive updates about new projects, technology insights, and behind-the-scenes content. We regularly share our latest developments and industry thoughts.",
  },
  {
    question: "Do you take on new projects?",
    answer:
      "Yes, we're always open to discussing new opportunities and collaborations. Whether you have a specific project in mind or want to explore possibilities, feel free to reach out through our contact channels.",
  },
];

const FAQHome = () => {
  return <FAQ items={faqItems} />;
};

export default FAQHome;
