/* globals TestApp */
/* globals Shared */

(function() {

  "use strict";

  Trillo.CSS.selected = "active";

  TestApp.TestAppC = Trillo.inherits(Shared.AppC, function(viewSpec) {
    Shared.AppC.call(this, viewSpec);
  });

  var TestAppC = TestApp.TestAppC.prototype;
  var AppC = Shared.AppC.prototype;

  TestAppC.handleAction = function(actionName, selectedObj) {
    if (actionName === "sideBarToggler") {
      $('body').toggleClass('sidebar-hidden');
      this.view().windowResized();
      return true;
    } else if (actionName === "asideBarToggler") {
      $('body').toggleClass('aside-menu-hidden');
      this.view().windowResized();
      return true;
    } else if (actionName === "mobileSideBarToggler") {
      $('body').toggleClass('sidebar-mobile-show');
      this.view().windowResized();
      return true;
    }
    return AppC.handleAction.call(this, actionName, selectedObj);
  };

})();
