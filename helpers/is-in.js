module.exports = function (value, array, key, options) {
  const match = array.some((item) => item[key] === value);
  return match ? options.fn(this) : options.inverse(this);
};
