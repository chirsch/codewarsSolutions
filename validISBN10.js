// https://www.codewars.com/kata/51fc12de24a9d8cb0e000001/train/javascript

/*
INSTRUCTIONS
ISBN-10 identifiers are ten digits long. The first nine characters are digits 0-9.
The last digit can be 0-9 or X, to indicate a value of 10.

An ISBN-10 number is valid if the sum of the digits multiplied by their position modulo 11 equals zero.

For example:

ISBN     : 1 1 1 2 2 2 3 3 3  9
position : 1 2 3 4 5 6 7 8 9 10
This is a valid ISBN, because:

(1*1 + 1*2 + 1*3 + 2*4 + 2*5 + 2*6 + 3*7 + 3*8 + 3*9 + 9*10) % 11 = 0

Examples
1112223339   -->  true
111222333    -->  false
1112223339X  -->  false
1234554321   -->  true
1234512345   -->  false
048665088X   -->  true
X123456788   -->  false
*/

function validISBN10(isbn) {
  let n = isbn.toUpperCase().split('')
  let sum = 0

  // isbn must be 10 characters long
  if (n.length !== 10) {
    return false
  }
  
  for (let i = 0; i < 10; i++) {
    n[i] === 'X' ? n[i] = 10 : n[i] = parseInt(n[i])

    // first 9 characters must be integers
    if (i < 9 && n[i] > 9) {
      return false
    }

    sum += (i + 1) * n[i]
  }

  console.log(sum)
  return sum % 11 === 0
}

let x = '048665088XZ'
console.log(validISBN10(x))