var sum_pairs = function(ints, s) {
		//console.log('')
		//console.log('NEW SET')
		//console.log('ints:', ints, '| s:', s)
		for (let i = 0; i < ints.length - 1; i++) {
				let target = s - ints[i]
						//console.log(i, '(' + ints[i] + ')', 'target:', target, 'sum:', s)

				for (let j = i + 1; j < ints.length; j++) {
						//console.log('\tj:', j, '(' + ints[j] + ')')
						//console.log('\t\ti + j:', ints[i] + ints[j], '=', target)
						if (ints[j] == target) {
								//console.log('Solution found:', ints[i], '+', ints[j], '=', s)
								i++
								return [ints[i - 1], ints[j]]
						}
				}
		}
		//console.log('Solution found:', null)
		return null
}

l1 = [1, 4, 8, 7, 3, 15];
l2 = [1, -2, 3, 0, -6, 1];
l3 = [20, -13, 40];
l4 = [1, 2, 3, 4, 1, 0];
l5 = [10, 5, 2, 3, 7, 5];
l6 = [4, -2, 3, 3, 4];
l7 = [0, 2, 0];
l8 = [5, 9, 13, -3];

/*
sum_pairs(l1, 8)
sum_pairs(l2, -6)
sum_pairs(l3, -7)
sum_pairs(l4, 2)
sum_pairs(l5, 10)
sum_pairs(l6, 8)
sum_pairs(l7, 0)
sum_pairs(l8, 10)
*/

console.log('sum_pairs(l1, 8): [1, 7]', sum_pairs(l1, 8), sum_pairs(l1, 8) == [1, 7])
console.log('sum_pairs(l2, -6): [0, -6]', sum_pairs(l2, -6), sum_pairs(l2, -6) == [0, -6])
console.log('sum_pairs(l3, -7): undefined', sum_pairs(l3, -7), sum_pairs(l3, -7) == undefined)
console.log('sum_pairs(l4, 2): [1, 1]', sum_pairs(l4, 2), sum_pairs(l4, 2) == [1, 1])
console.log('sum_pairs(l5, 10): [3, 7]', sum_pairs(l5, 10), sum_pairs(l5, 10) == [3, 7])
console.log('sum_pairs(l6, 8): [4, 4]', sum_pairs(l6, 8), sum_pairs(l6, 8) == [4, 4])
console.log('sum_pairs(l7, 0): [0, 0]', sum_pairs(l7, 0), sum_pairs(l7, 0) == [0, 0])
console.log('sum_pairs(l8, 10): [13, -3]', sum_pairs(l8, 10), sum_pairs(l8, 10) == [13, -3])
