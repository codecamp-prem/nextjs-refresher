import {
  Html,
  Body,
  Container,
  Text,
  Link,
  Preview,
} from "@react-email/components";

interface Props {
  name: string;
}
const WelcomeTemplate = ({ name }: Props) => {
  return (
    <>
      <Html>
        <Preview>Welcome Aboard</Preview>
        <Body>
          <Container>
            <Text> Welcome to World! {}</Text>
            <Link href="https://reactnative.dev/">React Native Developer</Link>
          </Container>
        </Body>
      </Html>
    </>
  );
};
export default WelcomeTemplate;
