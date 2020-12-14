function DayNightHandler(self){
   if (self.value === 'night'){
      toBlack();
     }
   else if (self.value === 'day') {
      toWhite();
   }
   else if (self.value === 'toNight'){
      toBlack();
      self.value = 'toDay';
    }
   else if (self.value === 'toDay'){
      toWhite();
      self.value = 'toNight';
   }
}

var Color = {
    setBackground : function (tg,color){
        tg.backgroundColor=color;
    },

    setFont : function (tg,color){
        tg.color=color;
    },

    setLink : function (tg,color){
      for (i=0;i<tg.length; i++) {
          tg[i].style.color= color;
       }
    }

}

function toBlack(){
  var target=document.querySelector('body').style;
  var select = document.querySelectorAll('a');
  Color.setBackground(target,'black');
  Color.setFont(target,'white');
  Color.setLink(select,'white');
}

function toWhite(){
  var target=document.querySelector('body').style;
  var select = document.querySelectorAll('a');
  Color.setBackground(target,'white');
  Color.setFont(target,'black');
  Color.setLink(select,'black');
}
