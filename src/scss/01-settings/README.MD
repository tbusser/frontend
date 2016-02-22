# Settings
If you are using a preprocessor, start here. This holds any global settings for your project. I’d like to stress the word global – this layer should only house settings that need to be accessed from anywhere. Settings like `$heading-size-1` should be defined in the Headings partial. This ensures this layer stays nice and slim, and means that most settings can be found alongside the code that uses them, making finding things far simpler. Examples of global settings might be things like the base font size, colour palettes, config (for example, `$environment: dev;` ) and so on.

[Source](http://technotif.com/manage-large-css-projects-with-itcss/)
