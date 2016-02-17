## Iconfont folder

###Initially contains
Iconfont scss template. Will be used by iconfont generator to generate include file.

###SVG icons
Place svg icons for font generation in this folder.
Minimal height of svg's: 500px 

###Usage
For generating font and scss files in '/src/icons'.
```
gulp iconfont
```

For copying files to dist folder
```
gulp iconfont:copy
```

###Generated items (gulp iconfont command)
Font files (woff, ttf, etc.)
Include file: '_generated.icons.scss' > included in '/src/scss/styles.scss' under 02-tools and Mixin is called under 07-trumps.



Finetuning of settings can be done in '/build/tasks/iconfont.js' task.