import { fingerIndexes, keyboardLayouts } from './KeyButton';

export function stringLiterals<T extends string>(...args: T[]): T[] { return args; }
export type ElementType<
    T extends ReadonlyArray<unknown>
  // eslint-disable-next-line no-shadow
  > = T extends ReadonlyArray<infer ElementType>
    ? ElementType
    : never;

const keyButtons = stringLiterals(...keyboardLayouts.en, ...keyboardLayouts.ru);
const layouts = stringLiterals(...Object.keys(keyboardLayouts));
const fingerNames = stringLiterals(...Object.keys(fingerIndexes));
export type TFingerName = ElementType<typeof fingerNames>
export type TKeyButton = ElementType<typeof keyButtons>
export type TKeyboardLayout = ElementType<typeof layouts>
export type TKeyButtonProps = {
  keyButton: TKeyButton
  layout?: TKeyboardLayout
}
