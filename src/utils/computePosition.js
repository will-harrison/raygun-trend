const computePosition = ({ currentGrouping, groups, lensIndex, parentIndex, childrenIndex }) => ({
  lensIndex: currentGrouping.length - 1,
  lensGroup: groups[lensIndex],
  lensValue: currentGrouping[lensIndex],
  parentIndex: currentGrouping.length - 2,
  parentGroup: groups[parentIndex],
  parentValue: currentGrouping[parentIndex],
  childrenIndex: currentGrouping.length,
  childrenGroup: groups[childrenIndex],
  childrenValue: currentGrouping[childrenIndex],
});


export default computePosition