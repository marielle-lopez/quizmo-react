import { expect, test } from 'vitest';
import { decodeHtmlEntities } from './decode-html-entities';

test('decodeHtmlEntities() given an empty string', () => {
  const result = decodeHtmlEntities('');
  expect(result).toStrictEqual('');
});

test('decodeHtmlEntities() given a string without HTML entities', () => {
  const result = decodeHtmlEntities("You don't win friends with salad.");
  expect(result).toStrictEqual("You don't win friends with salad.");
});

test('decodeHtmlEntities() given a string with HTML entities', () => {
  const result = decodeHtmlEntities(
    'According to Sherlock Holmes, &quot;If you eliminate the impossible, whatever remains, however improbable, must be the...&quot;'
  );
  expect(result).toStrictEqual(
    'According to Sherlock Holmes, "If you eliminate the impossible, whatever remains, however improbable, must be the..."'
  );
});
