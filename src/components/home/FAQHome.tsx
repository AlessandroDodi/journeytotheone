import FAQ from "./FAQ";

const faqItems = [
  {
    question: "Lorem ipsum?",
    answer:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer viverra porttitor arcu, ut ultrices nibh. Aenean porttitor, justo luctus condimentum lobortis, ipsum metus porta est, ac condimentum dui libero ac arcu. Praesent eu feugiat nisl, et vestibulum neque. Aliquam erat volutpat. Vestibulum placerat dictum magna nec pellentesque.",
  },
  {
    question: "Dolor sit amet?",
    answer:
      "Phasellus pharetra mi at tellus auctor, non imperdiet purus dignissim. Phasellus in augue tempor, laoreet magna eget, sagittis ex. Phasellus hendrerit tortor eu nulla porttitor pharetra. Pellentesque hendrerit neque vitae orci eleifend pretium. Curabitur scelerisque maximus dictum.",
  },
  {
    question: "Commodo aliquet?",
    answer:
      "Sed sed nibh vel erat pharetra congue. Fusce a odio tellus. Morbi sed mauris ut justo semper varius. Sed id lacus dictum, tristique massa nec, volutpat mi. In hac habitasse platea dictumst. Donec luctus felis justo, vitae sagittis risus volutpat at. Nunc rhoncus ornare urna, id rhoncus leo laoreet eget. Nullam egestas tincidunt dolor, commodo aliquet quam ultrices tincidunt.",
  },
  {
    question: "Aenean pellentesque?",
    answer:
      "Aenean pellentesque nulla eget nibh iaculis placerat. Curabitur ligula lectus, vestibulum quis turpis vel, ullamcorper egestas ipsum. Sed vel tellus ornare, tristique orci et, rutrum lectus. Quisque eu ipsum ac lacus suscipit tincidunt non nec risus. Integer rutrum sit amet magna a lacinia. Vivamus imperdiet augue dolor, sed pellentesque sapien consectetur a. In hac habitasse platea dictumst. Cras laoreet risus diam, nec sodales quam commodo quis. Mauris risus risus, dignissim at velit vel, convallis faucibus augue. In eu placerat lacus, non tempor enim. In euismod urna in libero eleifend tempus.",
  },
  {
    question: "Vivamus dolor ipsum?",
    answer:
      "Vivamus dolor ipsum, iaculis nec gravida ac, rutrum ut nibh. Vestibulum ultrices velit dapibus, commodo enim eget, hendrerit libero. Integer congue massa vel tempor fermentum. Nulla pulvinar urna a rutrum semper. Nunc tristique nec diam et blandit. Mauris facilisis nisl eu nulla rutrum, vel gravida purus facilisis. Integer fringilla blandit mattis.",
  },
  {
    question: "Dolor sit amet?",
    answer:
      "Phasellus pharetra mi at tellus auctor, non imperdiet purus dignissim. Phasellus in augue tempor, laoreet magna eget, sagittis ex. Phasellus hendrerit tortor eu nulla porttitor pharetra. Pellentesque hendrerit neque vitae orci eleifend pretium. Curabitur scelerisque maximus dictum.",
  },
];

const FAQHome = () => {
  return <FAQ items={faqItems} />;
};

export default FAQHome;
