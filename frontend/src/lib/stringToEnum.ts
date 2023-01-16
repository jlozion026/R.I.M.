export const stringToEnum = <T,>(str: string, enumeration: T): T[keyof T] | undefined => {
  for (const key in enumeration) {
    if (enumeration[key as keyof T] === str) {
      return enumeration[key as keyof T];
    }
  }
  return undefined;
}
