 if( navigator.userAgent.match(/Android/i)
 || navigator.userAgent.match(/webOS/i)
 || navigator.userAgent.match(/iPhone/i)
 || navigator.userAgent.match(/iPad/i)
 || navigator.userAgent.match(/iPod/i)
 || navigator.userAgent.match(/BlackBerry/i)
 || navigator.userAgent.match(/Windows Phone/i)
 ){
     document.querySelector('#headFullScreen').classList.add('d-none');
     document.querySelector('#headShartphone').classList.remove('d-none');
  }
 else {
     document.querySelector('#headFullScreen').classList.remove('d-none');
     //document.querySelector('#headShartphone').classList.add('d-none');
  }

  console.log("Funcionando!!!!")