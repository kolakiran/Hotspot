# Hotspot UX Challange
How to install and run your project

Please clone the repository and open index.html using any browser. No need to use any tools to run the application
2. What design choices you made, and why?

As search functionality is the heart for the application, made search as the major showcase. 
Features that are implemented.
 Based on user location hot spots will show-up. 
 Single page auto search 
 Used exiting API to extract the hotspots.   Also with considering timeframe given to me in mind, I’ve implemented slick layout without using any illustrations or graphics. 
   Areas need to be improved. 
Showcasing only 2 rows of data and opening the rest by clicking on load all results button.
Map view implementation
Adding some illustrations to banner.

3 If you had the option, what frame/libraries work you would use and not use, and why

Since it is less time duration, used jQuey to make Ajax calls. And also used Google API to get the zip code based on current location. HTML5 and CSS3 for frontend design.

# Hotspot




Upon further investigation into our AWS Lambda setup, we have identified that subscription filters are correctly configured for all but 44 of our Lambda functions. This discrepancy likely stems from either an oversight during the initial deployment on February 24 or an issue arising from subsequent deployments on February 28 and March 1.

To resolve this, we propose adding a dummy environment variable to the affected Lambda functions through a pull request (PR). This modification will trigger a redeployment of these Lambda functions, ensuring the correct establishment of subscription filters.

We recommend incorporating this fix in our upcoming production deployment. Could you please confirm if this approach aligns with our deployment schedule?

Additionally, it has come to our attention that one Lambda function is not associated with any stack. Raj, could you please investigate this particular function to determine the cause and recommend a solution?

Thank you for your attention to this matter. Your prompt feedback will be greatly appreciated to ensure a seamless resolution.
