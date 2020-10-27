function findSolution (target) {
  function findingTheSolution (current, history) {
    if (current === target) {
      return history;
    } else if (current > target) {
      return null;
    } else {
      return (
        findingTheSolution (current + 2, `(${history}) + 2`) ||
        findingTheSolution (current * 4, `(${history}) * 4`)
      );
    }
  }
  return findingTheSolution (1, '1');
}

console.log (findSolution (20));
