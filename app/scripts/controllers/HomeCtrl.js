(function(){
  function HomeCtrl(Room) {
    this.roomObject = Room;
  }

  angular
    .module('blocChat')
    .controller('HomeCtrl', ['Room',HomeCtrl]);
})();