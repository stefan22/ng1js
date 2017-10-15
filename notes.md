# closure to remember (modular pattern)

```
function person(name) {
   //private
   function speak() {
      console.log('hello ' +name);
   }//speak fn
   
   //outside - represents the public api for the module
   return {
      speak: speak
   }
   
}//person fn

```

var name = person('Mark');
name.speak();

- or pass another argument and change the scope
- call the function directly from return object
- call it without a return object

```
function person(name) {

   function upper(x) {
      return x.toUpperCase();
   }//upper

   function speak() {
      console.log('Hello' + upper(name));
   }//speak

   return {
      speak:speak
   };


}//person

var mark = person('Mark');

mark.speak();




```