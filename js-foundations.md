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

  Your answer:

  Researched answer:


7. STRETCH: What is an API?

  Your answer:

  Researched answer:


### Additional Feedback Questions.

1. Do you have a suggestion for a Check In question?



2. What was your favorite topic this week?



3. What was your "A-ha!" moment this week?
