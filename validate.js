const  alphanumeric = (string) => { return /\w+/gi.test(string) && !/[_! ]+/.test(string) }

  console.log(alphanumeric('I7N3kKg MnbUAv5W0qrW5QgfR234'))