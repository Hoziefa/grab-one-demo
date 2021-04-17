export const formatNum = (num: number): string => num.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,');

export const idGenerator = (prefix = 'item', length = Date.now()): string => `${ prefix }-${ Math.floor(Math.random() * length).toString(16) }`;
