import Cookies from 'js-cookie';

export function getParsedCookie(key: string): CartItem[] | undefined {
  const cookieValue = Cookies.get(key); // type string | undefined
  if (!cookieValue) {
    return undefined;
  }
  try {
    return JSON.parse(cookieValue); // type should be string
  } catch (err) {
    return undefined;
  }
}

export type CartItem = {
  id: number;
  num: number;
};
export function setStringifiedCookie(key: string, value: CartItem[]) {
  Cookies.set(key, JSON.stringify(value));
}
