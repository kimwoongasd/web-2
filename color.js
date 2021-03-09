var links={
  setColor:function(color){
    // var alist = document.querySelectorAll('a');
    // var i = 0;
    // while(i<alist.length){
    // alist[i].style.color =color;
    // i = i +1;
    // }
    $('a').css('color',color);
  }
}
function linkssetColor(color){
}
var Body={
  setColor:function(color){
    //document.querySelector('body').style.color=color;
    $('body').css('color',color);
  },
  setbackgroundColor:function(color){
    //document.querySelector('body').style.backgroundColor=color;
    $('body').css('backgroundColor',color);
  }
}
  function nightdayhandler(self){
var target=document.querySelector('body')
if(self.value==='night')
{
 Body.setbackgroundColor('black');
 Body.setColor('white');
 self.value='day';

 links.setColor('red');

}
else{
Body.setbackgroundColor('white');
Body.setColor('black');
 self.value='night';

links.setColor('blue');
  }
}
