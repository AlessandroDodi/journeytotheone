import { Stack, Typography, Container } from "@mui/material";

interface FAQItem {
  question: string;
  answer: string;
}

interface FAQProps {
  items: FAQItem[];
}

const FAQ = ({ items }: FAQProps) => {
  return (
    <Stack component="section" py={8} bgcolor="#000000">
      <Container maxWidth="lg">
        <Stack spacing={6}>
          <Typography variant="h2" mb={2}>
            Frequently Asked Questions
          </Typography>

          <Stack spacing={4}>
            {items.map((item, index) => (
              <Stack key={index} spacing={1}>
                <Typography variant="subtitle1" component="h3" fontWeight={500}>
                  {item.question}
                </Typography>
                <Typography color="secondary">{item.answer}</Typography>
              </Stack>
            ))}
          </Stack>
        </Stack>
      </Container>
    </Stack>
  );
};

export default FAQ;
