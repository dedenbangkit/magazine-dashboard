angular.module('starter.controllers', [])

.controller('AppCtrl', function($scope, $ionicModal, $timeout) {

  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //$scope.$on('$ionicView.enter', function(e) {
  //});

  // Form data for the login modal
  $scope.registerData = {};

  // Create the login modal that we will use later
  $ionicModal.fromTemplateUrl('templates/register.html', {
    scope: $scope
  }).then(function(modal) {
    $scope.modal = modal;
  });

  // Triggered in the login modal to close it
  $scope.closeRegister = function() {
    $scope.modal.hide();
  };

  // Open the login modal
  $scope.register = function() {
    $scope.modal.show();
  };

  // Perform the login action when the user submits the login form
  $scope.doRegister = function() {
    console.log('Register Account', $scope.loginData);

    // Simulate a login delay. Remove this and replace with your login
    // code if using a login system
    $timeout(function() {
      $scope.closeRegister();
    }, 1000);
  };

})

.controller('IssuesCtrl', function($scope) {
  $scope.Issues = [
    { title: 'Issue #61', date:'2017-02-24', desc:'Memajukan Pesantren Melalui Digitalisasi', cover: 'ed61.jpg', id: 1 },
    { title: 'Issue #60', date:'2017-01-24', desc:'Mengulik Standarisasi Kurikulum Syariah', cover: 'ed60.jpg', id: 2 },
    { title: 'Issue #59', date:'2016-12-24', desc:'Jurus Memperkuat Kebijakan Moneter', cover: 'ed59.jpg', id: 3 }
  ];
})

.controller('IssueCtrl', function($scope, $stateParams, $ionicModal) {

    $ionicModal.fromTemplateUrl('image-modal.html', {
      scope: $scope,
      animation: 'slide-in-up'
    }).then(function(modal) {
      $scope.modal = modal;
    });

    $scope.openModal = function() {
      $scope.modal.show();
    };

    $scope.closeModal = function() {
      $scope.modal.hide();
    };

    //Cleanup the modal when we're done with it!
    $scope.$on('$destroy', function() {
      $scope.modal.remove();
    });
    // Execute action on hide modal
    $scope.$on('modal.hide', function() {
      // Execute action
    });
    // Execute action on remove modal
    $scope.$on('modal.removed', function() {
      // Execute action
    });
    $scope.$on('modal.shown', function() {
      console.log('Modal is shown!');
    });

    $scope.imageSrc = 'img/help.jpg';

    $scope.showImage = function() {
      $scope.imageSrc  = 'img/help.jpg';
      $scope.openModal();
    }

});
