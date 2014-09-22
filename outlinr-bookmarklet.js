/**
 * 
 * Outlinr: simple and fast web inspector, neither more nor less
 * article & demo: http://www.csslab.cl/2011/12/06/outlinr-a-bookmarklet/
 * ©2011 csslab.cl
 * license: MIT
 * 
**/

javascript:(function(e,a,g,h,f,c,b,d)%7Bif(!(f=e.jQuery)%7C%7Cg%3Ef.fn.jquery%7C%7Ch(f))%7Bc=a.createElement(%22script%22);c.type=%22text/javascript%22;c.src=%22http://ajax.googleapis.com/ajax/libs/jquery/%22+g+%22/jquery.min.js%22;c.onload=c.onreadystatechange=function()%7Bif(!b&&(!(d=this.readyState)%7C%7Cd==%22loaded%22%7C%7Cd==%22complete%22))%7Bh((f=e.jQuery).noConflict(1),b=1);f(c).remove()%7D%7D;a.documentElement.childNodes%5B0%5D.appendChild(c)%7D%7D)(window,document,%221.3.2%22,function($,L)%7B$(prompt('HTML Element? Use jQuery Selectors','div')).css('outline','1px%20solid%20'+prompt('Color? Use HEX or ColorNames','red'));%7D);