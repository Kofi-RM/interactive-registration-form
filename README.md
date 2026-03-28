Interactive Registration Guide with HTML and JS error checking



Reflection: 

How did event.preventDefault() help in handling form submission?

It helps because it prevents the page from resetting.


What is the difference between using HTML5 validation attributes and JavaScript-based validation? Why might you use both?

HTML validation is simpler and works pretty well for small things. However Javascript allows for more advanced validation
as well as more customizable error messages. By using both you can cover both simple and complex needs without overcomplicating your code.

Explain how you used localStorage to persist and retrieve the username. What are the limitations of localStorage for storing sensitive data?

With local storage you can set a value to a key. It only allows strings.

It stores things in plain text, which is a security issue.



Describe a challenge you faced in implementing the real-time validation and how you solved it.

I used blur on my inputs and also rechecked on submit.


How did you ensure that custom error messages were user-friendly and displayed at the appropriate times?

I tried to word my error messages as straightforward as possible and they are only displayed after you click off an input without formatting it correctly or after trying to submit without formatting correctly.
