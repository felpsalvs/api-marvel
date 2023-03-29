import { Container } from "@mui/material";

interface Props {
  src: string;
  title: string;
  description: string;
}

export function Comic({ src, title, description }: Props) {
  return (
    <Container>
        <Image src={src} alt={title} />
        <body>
          <title>{title}</title>
          <span>{description}</span>
          <p>More info</p>
        </body>
    </Container>
  );
}