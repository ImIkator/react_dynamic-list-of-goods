// eslint-disable-next-line
const API_URL = `https://mate-academy.github.io/react_dynamic-list-of-goods/goods.json`;

export function getAll(): Promise<Good[]> {
  return fetch(API_URL)
    .then(response => response.json());
}

export const get5First = (): Promise<Good[]> => {
  return getAll()
    .then(goods => goods.sort((goodA: Good, goodB: Good) => (
      goodA.name.localeCompare(goodB.name)
    )))
    .then(sorted => [...sorted].slice(0, 5));
};

export const getRedGoods = (): Promise<Good[]> => {
  return getAll()
    .then(goods => goods.filter((good: Good) => good.color === 'red'));
};