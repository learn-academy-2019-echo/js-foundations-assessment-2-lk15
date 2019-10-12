# ASSESSMENT 2: FOUNDATIONS OF JAVASCRIPT
## Interview Practice Questions

### Answer the following questions. First, without external resources. Challenge yourself to answer from memory. Then, research the question to expand on your answer. Even if you feel you have answered the question completely on your own, there is always something more to learn.

Consider the function:

var text = 'outside'
function logIt(){
  console.log(text)
  var text = 'inside'
}
logIt()


1a. Look at this Javascript function and try to predict what the console show.

The console will show 'outside' since text is not defined in the function until after the console.log. Therefore, the console.log looks to the global scope.


1b. Test the function. Explain why the function returned what it did.

  Your answer: The function returns undefined because the function console.logs the variable within the function before the variable is defined within the function.  

  Researched answer: The function returns undefined due to variable hoisting. Variable hoisting means that variables and functions declarations are moved to the top of their scope while the assignments stay in place. The code can therefore be thought of as:

        var text = 'outside'
        function logIt(){
          var text
          console.log(text)
          text = 'inside'
        }
        logIt()
        
  Reference: https://scotch.io/tutorials/understanding-hoisting-in-javascript

2. What is JSON?

  Your answer: No idea

  Researched answer: JSON stands for JavaScript Object Notation. JSON is text that can be sent to a server. JSON can be read and used as a data format by any programming language. A server can only receive data from a browser as text, and therefore JavaScript objects need to be converted to JSON.
  
  Reference: https://www.w3schools.com/js/js_json_intro.asp


3. What does CRUD stand for?

  Your answer: Create Read Update Delete

  Researched answer: CRUD is a basic function of any computer database or program with consistent storage. Without these for functions, an application is not complete and will not function properly. When you are relating CRUD to web development, you will use the term REST (Representational State Transfer).
  
  Reference: http://www.softwarecareertoday.net/faq/what-does-crud-mean-in-web-development/

4. What does are the 5 HTTP verbs?

  Your answer:
  Get -> Read
  Post -> Create
  Put -> Update
  Patch -> Update
  Delete -> Delete

  Researched answer:
  The GET method requests a representation of the specified resource. Requests using GET should only retrieve data.
  The POST method is used to submit an entity to the specified resource, often causing a change in state or side effects on the server.
  The PUT method replaces all current representations of the target resource with the request payload.
  The PATCH method is used to apply partial modifications to a resource.
  The DELETE method deletes the specified resource
  
  Reference: https://developer.mozilla.org/en-US/docs/Web/HTTP/Methods

5. What is a higher-order function?

  Your answer: A higher order function is a function that returns another function.

  Researched answer: A higher order function is a function that operates on other functions - either by taking them as arguments or returning them. Higher order functions allow us to abstract over actions and not just values.
  
  Reference: https://eloquentjavascript.net/05_higher_order.html


6. STRETCH: What is a closure, what is it good for and how do you recognize one?

  Your answer: Not sure

  Researched answer: A closure gives you access to the outer function's scope from an inner function, even after the outer function has returned. Closures are created every time a function is created.
  
  A closure can be recognized as a function that is defined inside another function and then returned or passed to another function.
  
  Closures are commonly used to give objects data privacy -- the enclosed variables are only in scope within the outer function.
  
  Code example of a closure:
  
   var updateClickCount=(function(){
    var counter=0;

    return function(){
     ++counter;
     // do something with counter
    }
})();

A closure in this example would enable you to update the counter without declaring the counter as a global variable. This is helpful because a global variable can be changed by other functions in the code, and so is more prone to being updated unintentionally.

  
  Reference: https://medium.com/javascript-scene/master-the-javascript-interview-what-is-a-closure-b2f0d2152b36
             https://stackoverflow.com/questions/2728278/what-is-a-practical-use-for-a-closure-in-javascript
             
             https://www.youtube.com/watch?v=w1s9PgtEoJs
             
             https://www.youtube.com/watch?v=FYrtnS3X_Lw


7. STRETCH: What is an API?

  Your answer: Not sure

  Researched answer: An API is an Application Programming Interface. An API is the programming instructions and standards (building blocks) for making a software application that is powered by the company's service. APIs enable applications to work together (a software-to-software interface).
  
  API Examples: 
  
  Google Maps API: allows developers to embed Google Maps on their websites using a JavaScript or Flash interface.
  
  Amazon API: allows developers to access Amazon product information. Using the Amazon API, third-party websites can post direct links to Amazon products with the option to "buy now"
  
  References:
  https://money.howstuffworks.com/business-communications/how-to-leverage-an-api-for-conferencing1.htm
  https://www.webopedia.com/TERM/A/API.html

### Additional Feedback Questions.

1. Do you have a suggestion for a Check In question?
What is your favorite TV show?/Do you have any Netflix recommendations?


2. What was your favorite topic this week?
I liked learning about React and had fun working on the projects and using trial and error to get things to work.



3. What was your "A-ha!" moment this week?
The state and props lectures really helped me understand the concepts.
