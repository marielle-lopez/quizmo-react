import { decode } from 'html-entities';

export const decodeHtmlEntities = (input: string): string => {
  let decoded = input;
  const htmlEntities: string[] = input.match(/&[#a-zA-Z0-9]+;/g) || [];
  htmlEntities.map(
    (htmlEntity) => (decoded = decoded.replace(htmlEntity, decode(htmlEntity)))
  );

  return decoded;
};
