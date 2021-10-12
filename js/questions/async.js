/* Q: implement promise object */

function Promise(fn) {
  this.fn = fn;
  this.error = null;

  this.then = function(cb) {
    try {
      
    } catch (error) {
      this.error = error;
    }
  }

  this.catch = function(errorCb) {
    if (this.error) {
      errorCb(error)
    }
  }
}

const promise = new Promise((resolve, reject) => {

})

promise
  .then((res) => {

  })
  .catch((error) => {

  })


