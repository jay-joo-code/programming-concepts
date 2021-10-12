
/* TOPIC: encapsulation with closures */

function SecretiveProto() {
  const secret = "secret text"

  this.spillTheBeans = function() {
    return secret
  }
}

const blabbermouth = new SecretiveProto('special secret')
console.log('blabbermouth.secret', blabbermouth.secret) // undefined, only accessible within SecretiveProto
console.log('blabbermouth.spillTheBeans()', blabbermouth.spillTheBeans()) // secret text, methods can still access 
