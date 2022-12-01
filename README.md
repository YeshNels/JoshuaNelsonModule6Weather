# JoshuaNelsonModule6Weather
A quick weather application.

This fetches data from openweathermap.org to display forecasts for up to five days in the future. To display the UV index, I used two different API calls, one which does the bulk of the forecast and one which require longitude and latitude coordinates and supplies the UVI.
To make these separate API calls work together, I nested them one within the other and used axios.get rather than fetch to tinker with the two datasets having different variable names.
To handle search history, the former cities that have been searched are a locally stored array that begins as blank and then has each city that is searched loaded into it. To prevent adding the same city over and over, the button to trigger a past search will run a separate instance of the same search function without the push part added to it. It is still possible to load this array with the same city if the main search bar is used multiple times, but I find this acceptable.
The code for the forecast is largely repeated with the changes in which part of the dataset they draw from being what creates each instance with its own icon.

The application should be deployed to https://yeshnels.github.io/JoshuaNelsonModule6Weather/.