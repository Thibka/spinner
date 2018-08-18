Description
==================
Sometimes CSS rotation can have unconsistent results depending on the browser, the type and amplitude of rotation, and the technique (transition or animation). 

For instance, a browser might choose to take the shortest path between two angles. In such a scenario, a +350deg rotation would become a -10deg rotation.

This class is intended to provide a consistent, JS based, rotation animation.

[Demo](https://jsfiddle.net/Wonderbanners/bc2xdsfq/11/).



Usage
==================

```javascript
var spinner = new Spinner({
    id: "myElement",
    axis: "z",
    start: 0,
    end: 360,
    duration: 1000,
    easing: function() { ... } // Optional. easeInOutQuad by default.
});
	
spinner.spin();
```


Easing
==================

By default the Spinner uses a easeInOutQuad easing.
However, others equations can be used. See [Robert Penners equations](https://forum.kirupa.com/t/robert-penners-easing-equations-in-pure-js-no-jquery/330985).