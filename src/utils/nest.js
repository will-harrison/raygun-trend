import { first, mapValues, rest, groupBy } from 'lodash-es'

const nest = (seq, keys) => {
  if (!keys.length)
    return seq;
  var firstKey = first(keys);
  return mapValues(groupBy(seq, firstKey), function (value) {
    // console.log(value);
    return nest(value, rest(keys))
  });
};

export default nest