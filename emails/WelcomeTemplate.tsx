import {
  Html,
  Body,
  Container,
  Tailwind,
  Text,
  Link,
  Preview,
} from "@react-email/components";
import { CSSProperties } from "react";

interface Props {
  name: string;
}
const WelcomeTemplate = ({ name }: Props) => {
  return (
    <>
      <Html>
        <Preview>Welcome Aboard</Preview>
        <Tailwind>
          <Body className="bg-white">
            <Container>
              <Text style={heading}> Welcome to World! {}</Text>
              <Link href="https://reactnative.dev/">
                React Native Developer
              </Link>
            </Container>
          </Body>
        </Tailwind>
      </Html>
    </>
  );
};

const heading: CSSProperties = {
  fontSize: "32px",
};

export default WelcomeTemplate;
