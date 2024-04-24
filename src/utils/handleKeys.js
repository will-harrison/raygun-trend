import { last } from 'lodash-es'

const handleKeys = ({ event, groups, currentGrouping, setCurrentGrouping }) => {
  event.preventDefault();
  const localGrouping = currentGrouping;
  const currentIndex = last(localGrouping);
  // this.traverse();
  switch (event.keyCode) {
    case 37:
      // console.log("left");
      // remove last element from grouping
      if (localGrouping.length !== 1) {
        setCurrentGrouping(localGrouping.slice(0, -1))
      };
      break;
    case 39:
      // console.log("right");
      // add 0 to beginning of grouping
      if (localGrouping.length < groups.length) {
        setCurrentGrouping([0, ...localGrouping])
      };
      break;
    case 38:
      // console.log("up");
      // remove first element, decrement current index
      if (currentIndex > 0) {
        setCurrentGrouping([currentIndex - 1, ...localGrouping.slice(0, -1)])
      };
      break;
    case 40:
      // console.log("down");
      // remove first element, increment current index
      if (currentIndex < 10) {
        setCurrentGrouping([currentIndex + 1, ...localGrouping.slice(0, -1)])
      };
      break;
    default:
      // console.log("?");
      break;
  }
}

export default handleKeys