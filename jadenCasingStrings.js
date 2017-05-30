String.prototype.toJadenCase = function () {
  var stringArray = this.split(' ')
  var jadenCased = []
  for (var i = 0; i < stringArray.length; i++) {
    jadenWord = stringArray[i]
    console.log(jadenWord)
    jadenCased.push(jadenWord[0].toUpperCase())
    for (var j = 1; j < stringArray.length; j++) {
      jadenCased.push(jadenWord[j])
    }
    jadenCased.push(' ')
  }
  jadenCased.slice(0,jadenCased.length)
  return jadenCased
};

var str = "How can mirrors be real if our eyes aren't real";
str.toJadenCase()
