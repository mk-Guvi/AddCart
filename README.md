#INSTRUCTIONS:

1.)delete all files from src directory

2.)add index.js file in src

3.)add bootstrap.min.css cdn link in index.html

3.)create a components folder under src and creat a counter.jsx file in it.

4.)create a class component that returns hello counter in counter.jsx and import in  index.js and call it in the reactdom.render to see the result.

5.)Add button tag in the counter component

6.)create a state with object count = 0 and create a formatfunction that returns zero if count == 0 else return the count value in the counter component.

7.)add className in button and h1 of counter component and playaround with style attribute that can change the styles manually without using bootstrap.

8.)create a classes method that changes the buttons color from warning(0) to primary(>0) based on the values of count and call the method in the className attribute of span.

9.)create a tag array in the state and call the values of tags using the map function in an ul tag

10.)create conditional rendering file and create a conditional component init that returns the some text if the array of tags holds null else prints the values of the arrays.

11.)create setstate to change the value of count on button INCREAMENT.

12.)create Counters.jsx file under components and import in index,js as  a component by removing the counter component.

13.)In counters.jsx,create counters component that has a state with arrays of id and value and it returns the counter component by using the map function.

14.)Add value attribute in coounter component in counters,jsx and in counter.jsx,in the state use props.value

Note the compnent that   owns a piece of state ,should be the one modifying it so here the to delet the counter you should use props that deletes the counter from the counters.jsx 

15.)create the delete  button in counter.jsx and add attribute the calls the props that can delete the counter button

16.)In counters.jsx,add handle delete function that removes the counter button and updates with reminng counters and call this function as an onDelete attribute  and add counter attribute with counter object so that we can access the its values.


17.)create a reset button in counters.jsx withh on click attribute tyhat calls the functtion handleReset which resets the value of counters to zero.

18.)In counter.jsx,Remove the state and the increament function,change the state to props for the increament button with including  attributes and also in formatcount and getclasses functions.

19.)In counters.jsx,add the handleincreament function that returns the increamented values of the counter and add it in the Onincreament attribute of the increament button.