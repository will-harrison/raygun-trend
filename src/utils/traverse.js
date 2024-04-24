import { reduce, keys } from 'lodash-es'

const traverse = (seq, data) => {
  return reduce(seq, (memo, val, index) => {
    let traverseKeys = keys(memo);
    return memo[traverseKeys[val]];
  }, data)
}

export default traverse