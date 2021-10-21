const input1 = 'awegoiwjepgoi'
const input2 = 'abc dwe gejigow'

/* Q: count characters */

String.prototype.countChars = function() {
  const count = {}
  this.split('').forEach((char) => {
    if (count[char]) {
      count[char] = count[char] + 1;
    } else {
      count[char] = 1;
    }
  })
  return count
}

console.log(input1.countChars())

/* Q: find duplicate chars */

String.prototype.dupChars = function() {
  const count = this.countChars()
  const dups = []
  Object.entries(count).forEach(([char, count]) => {
    if (count > 1) {
      dups.push(char)
    }
  })
  return dups
}

console.log(input1.dupChars())

/* Q: reverse words in string */

String.prototype.reverseWords = function() {
  return this.split(' ').map((word) => {
    return word.split('').reverse().join('')
  }).join(' ')
}

console.log(input2.reverseWords())

