[![Status](https://github.com/jackbayliss/translatelight/workflows/Node%20CI/badge.svg)](https://github.com/{jackbayliss}/{translatelight}/actions)



![TEXGINE](https://i.imgur.com/CZztHWL.png)
 Super easy translation API, making it easier for you to set your own translation languages & text. It's still a work in progress, and is by no means bullet proof, but it works.
 
 **This won't automatically translate your text, but is more of an API to make it easier to manage when having to self translate.**
 
 ## How to use (Use cases)

### Normal JS
```js
// Call the TranslateLight class
let trans = new TranslateLight();
// Within your app / js, set the language to a reference of your choice
trans.setLang("en");
// Pass in an object with a reference key to the text. Inside that give it your languages, and include the text in that language. Like below.
trans.setText({"Hello" : {"en" : "Hello", "fr" : "Bonjour", "ger" : "Hallo"}});

// Use the get method to retrieve your key, in this case "Hello"
console.log(trans.get("Hello"));

// You can also call setLang at any point, and it will alter any methods called after it.
trans.setLang("fr");

console.log(trans.get("Hello"));

// You can also use this to set text on a page for example - 

var element = document.getElementById("id");
element.innerHTML = trans.get("Hello");
```

## Authors
  * Jack Bayliss - Initial work
  
## License
This project is licensed under the MIT License - see the [LICENSE](https://github.com/jackbayliss/TranslateLight/blob/master/LICENSE) file for details
  
  
That's all folks 👍
