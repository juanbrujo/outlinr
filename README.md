#Outlinr

####simple and fast web inspector, neither more nor less

![Outlinr](https://dl.dropboxusercontent.com/u/3522/outlinr.png)

####Article & Demo: [CSSLab.cl | Outlinr: a bookmarklet](http://www.csslab.cl/2011/12/06/outlinr-a-bookmarklet/)

Frequently on my debugging stage (when I need to solve something within the **HTML/CSS** markup that is causing any conflict, like, a floated element) I use the **CSS outline** property to contour the **HTML** elements so as I can visually locate where they are positioned, if they’re collapsing, which elements are involving, etc. I use **outline** because it’s a property that does not modify the **box model** and won’t  break more elements that are already working fine. If I use border instead, it will add pixels to the box and can sum unnecessary problems. In addition, I use the **red** color fot the **outline** not only because it’s strongly visible, but it’s fastest writing on the keyboard (lazy huh?).

Anyway, that was the introduction. I made this **bookmarklet** that does the job for me directly on the browser, so I don’t add dirt to my *stylesheet* or to the **HTML** file. I could use the web inspector from the browser (or Firebug) but this method is quicker. The bookmarklet asks you for which selector to draw (`div is by default` if the input is empty but it could be any selector from **jQuery** sentences like `header`, `#content`, `.footer > *`) and the color (`red is the default` but it can be `blue`, `green`, `#f60`, etc).


##How to install a bookmarklet
	1. click and hold the bookmarklet link.
	2. drag it to your bookmarks bar.
	3. release it and type a name for it.

![How to install a bookmarklet](http://www.csslab.cl/wp-content/uploads/2009/02/pasos.gif)

##How to use bookmarklet
	1. click the bookmarklet link in your bookmarks bar.
	2. it will ask you for the HTML element (use jQuery selector, div default).
	3. then asks for the color of the outline (red default).
	

##Requirement
connection to the Internet because it calls **jQuery** library from **Google API’s CDN**.

####Licence: [MIT](https://github.com/juanbrujo/outlinr/blob/master/LICENSE)