import FAQ from "./FAQ";

const faqItems = [
  {
    question: "why are you guys doing this instead of chilling at your corporate tech job?",
    answer:
      "we think that the rest of the decade is dedicated to the builders. we want to create cool stuff and the latency of delivery and the lack of agile movement in corps prevents us from shipping ideas fast.",
  },
  {
    question: "what do you expect to gain from this?",
    answer:
      "we want to find the one project, get funded and build it like we do. quick, clean and lean! we are still unsure on what exactly this will be but trust us we will know it when we see it.",
  },
  {
    question: "why should we follow your journey?",
    answer:
      "because we're going to show you the unfiltered reality. mistakes, errors, problems. projects that don't gain any traction and the ones that do. this is the best way to find out WHY if you plan to ship your own stuff or do research. no sugar coating, just raw building in public.",
  },
];

const FAQHome = () => {
  return <FAQ items={faqItems} />;
};

export default FAQHome;
