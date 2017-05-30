/*
INSTRUCTIONS
The input is a string str of digits. Cut the string into chunks (a chunk here is a substring of the initial string) of size sz (ignore the last chunk if its size is less than sz).

If a chunk represents an integer such as the sum of the cubes of its digits is divisible by 2, reverse that chunk; otherwise rotate it to the left by one position. Put together these modified chunks and return the result as a string.

If sz is <= 0 or if str is empty return "" or sz is greater (>) than the length of str it is impossible to take a chunk of size sz hence return "".

EXAMPLES
revrot("123456987654", 6) --> "234561876549"
revrot("123456987653", 6) --> "234561356789"
revrot("66443875", 4) --> "44668753"
revrot("66443875", 8) --> "64438756"
revrot("664438769", 8) --> "67834466"
revrot("123456779", 8) --> "23456771"
revrot("", 8) --> ""
revrot("123456779", 0) --> "" 
revrot("563000655734469485", 4) --> "0365065073456944"
*/

function revrot(str, sz) {
	console.log('Running revrot(' + str + ', ' + sz + ')')
	let string = str.split('')
	let length = str.length
	if (sz <= 0 || sz > length || length == 0) {
		console.log('returning ""\n\tReason: sz <= 0 || sz > length || length == 0')
		return ''
	} else {
		console.log('str:', str, '\tsz:', sz)

		let blockTotal = sz * Math.floor(length % sz)
		console.log('blockTotal:', blockTotal)

		let characters = str.slice(0, Math.floor(length % sz)).split('');
		console.log('characters:', characters)

		cubes = characters.map((character => Math.pow(character, 3)));
		console.log('cubes:', cubes)

		let sums = cubes.reduce(((acc, val) => acc + val), 0) % 2
		console.log('sums:', sums)

		if (sums) {
			return string.reverse().join('')
		}
	}
}


console.log(revrot("1234", 0)) //""
console.log(revrot("", 0)) // ""
console.log(revrot("1234", 5)) // ""
console.log(revrot("733049910872815764", 5)) // "330479108928157"
