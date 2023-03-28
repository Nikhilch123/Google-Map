Leaflet is a very powerful tool, and we can create a lot of different kinds of maps. This project will help you understand how to create an advanced map along with the help of React and  JS.

Leaflet=>
A JavaScript library for interactive maps
React=>
A JavaScript library for building user interfaces
React-Leafle =>
React components for Leaflet maps

What Is Leaflet?
 Leaflet is one of the leading open-source JavaScript libraries for mobile-friendly interactive maps. It takes advantage of HTML5 and CSS3 on modern browsers while being accessible on older ones too. All in all, it supports all the primary desktop and mobile platforms.

Leaflet weighs about 38KB and works perfectly for basic things. For additional extensions, it can be extended with a vast amount of plugins.

A lot of newspapers, including NPR, Washington Post, Boston Globe, among others, and other organizations use Leaflet for their in-depth data projects.

Limitations:
Leaflet makes direct calls to the DOM when it is loaded, therefore React Leaflet is not compatible with server-side rendering.
The components exposed are abstractions for Leaflet layers, not DOM elements. Some of them have properties that can be updated directly by calling the setters exposed by Leaflet while others should be completely replaced, by setting an unique value on their key property so they are properly handled by React's algorithm.

Using a package registry:
npm install react react-dom leaflet
npm install react-leaflet
