import { FC, PropsWithChildren } from "react";
import { Overline, Title } from "~/components/typography";
import Section, { Content } from "./Section";

interface PageTitleProps extends PropsWithChildren {
  overline?: string;
}

const PageTitle: FC<PageTitleProps> = ({ overline, children }) => {
  return (
    <Section
      css={{
        paddingTop: 48,
        "@tablet": { alignItems: "flex-end", height: "50vh", paddingTop: 0 },
      }}
    >
      <Content>
        {overline && (
          <div>
            <Overline>{overline}</Overline>
          </div>
        )}
        <Title>{children}</Title>
      </Content>
    </Section>
  );
};

export default PageTitle;
