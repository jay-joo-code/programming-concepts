

/* Q: output? QWrong QCorrect */

function SecretiveProto(specialSecret) {
  const secret = "secret text"
  this.specialSecret = specialSecret

  this.spillTheBeans = function() {
    return secret
  }
}

const blabbermouth = new SecretiveProto('special secret')
console.log('blabbermouth.secret', blabbermouth.secret)
console.log('blabbermouth.specialSecret', blabbermouth.specialSecret)
console.log('blabbermouth.spillTheBeans()', blabbermouth.spillTheBeans())