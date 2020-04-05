### Coding Test

This Javascript code snippet accepts a json object, format its data and restructure.

#### Before restructure:

* Music festival X
  * bands Y
    * band name Y 
    * record label Z
    
* Music festival Y
  * bands Z
    * band name Z 
    * record label X 
    
#### After restructure:

* Music record label Z
  * bands name Y
    * Music festival X
    
* Music record label X
  * bands name Z
    * Music festival Y 
    
    
#### Testing

Simply open the `index.html` on a browser window. 
