import { FC } from "react";
import Section, { Content } from "~/components/Section";
import { Heading, Text } from "~/components/typography";

const About: FC = () => {
  return (
    <Section>
      <Content>
        <Heading>
          Hello, I&apos;m Marissa Amaya. I build web applications.
        </Heading>
        <Text>
          I have been building beautiful web applications and design systems for
          over 8 years.
        </Text>
      </Content>
    </Section>
  );
};

export default About;
