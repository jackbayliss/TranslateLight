/**
 * TranslateLight, make translation to work with. 
 *
 * Allows the user to set text to different languages (if known), making it easier to work with.
 *
 * @link   https://github.com/jackbayliss
 * @file   This file defines the TranslateLight class.
 * @author Jack Bayliss.
 * @date 02/09/2019
 */

class TranslateLight {
    /**
    * @param {object} text  Pass text object to use.
    */
    setText(text) {
             if(typeof text == "object"){
                    if(Object.keys(text).length>0){
                        this.text = text
                    }else{
                        throw("Please pass in your translations in the object");
                    }
              
             }else {
                 throw("setText() expects an object parameter.");
             }
         }
    /**
    * @param {string} lang   Set the language of the user/app.
    */
    setLang(lang) {
             if(typeof lang =="string"){
                this.lang = lang;
           }else{
                throw("setLang() expects a string parameter");
           }
   }
    /**
    * @param {string} string   Get the text from trying to translate.
    */
   get(string) {
      if(typeof string == "string"){  
        if(this.text[string]){
            if(this.text[string][this.lang]){
            return this.text[string][this.lang];
        }else{
            throw("The string you're trying to get exists, but not in the lang you're trying to get!")
        }
        }else {
                throw("The string you're trying to get does not exist!")
        }
      }else {
          throw("get() expects a string parameter!")
      }
   }
      
 
 }

if(typeof module!=="undefined"){
    module.exports = TranslateLight;
}