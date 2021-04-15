// @js-check
import Stack from '../../../data-structures/stack/stack.js';

// plates - 盘子数
function towerOfHanoi(plates, source, helper, dest, sourceName, helperName, destName, moves = []) {
  if (plates <= 0) {
    return moves;
  }
  if (plates === 1) {
    dest.push(source.pop());
    const move = {};
    move[sourceName] = source.toString();
    move[helperName] = helper.toString();
    move[destName] = dest.toString();
    moves.push(move);
  } else {
    towerOfHanoi(plates - 1, source, dest, helper, sourceName, destName, helperName, moves);
    dest.push(source.pop());
    const move = {};
    move[sourceName] = source.toString();
    move[helperName] = helper.toString();
    move[destName] = dest.toString();
    moves.push(move);
    towerOfHanoi(plates - 1, helper, source, dest, helperName, sourceName, destName, moves);
  }
  return moves;
}

export function hanoiStack(plates) {
  const source = new Stack();
  const dest = new Stack();
  const helper = new Stack();

  for (let i = plates; i > 0; i--) {
    source.push(i);
  }

  return towerOfHanoi(plates, source, helper, dest, 'source', 'helper', 'dest');
}

export function hanoi(plates, source, helper, dest, moves = []) {
  if (plates <= 0) {
    return moves;
  }
  if (plates === 1) {
    moves.push([source, dest]);
  } else {
    //先把上面n-1个盘子挪到helper 柱子上， 以目标盘子为帮助盘子
    hanoi(plates - 1, source, dest, helper, moves);
    //把最下面的盘子挪到目的地盘子
    moves.push([source, dest]);
    //再把helper柱子上的盘子挪到目标柱子上，以原来source柱子为帮助盘子
    hanoi(plates - 1, helper, source, dest, moves);
  }
  return moves;
}
