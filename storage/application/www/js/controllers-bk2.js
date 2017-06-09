angular.module('starter.controllers', ['ui.router', 'ngSanitize'])

.controller('AppCtrl', function($scope, $timeout, $http, $state, $window, appService, StorageService) {
  // ApplicationData
  appService.async().then(function(response) {
    $scope.company = response;
    });

  $http.get('appinfo.json')
    .success(function(data, status, headers,config){
      $scope.company = data; // for UI
    })
    .error(function(data, status, headers,config){
      console.log('data error');
    })
    .then(function(result){
      things = result.data;
    });

  $scope.changeStatus = function(active, user) {
      $scope.isLogged = active;
      $scope.user = user;
      console.log($scope.isLogged);
  };

  // Form data for the login
  $scope.isLogged = parseInt(StorageService.getStatus());
  $scope.$watch('isLogged', function() {});
  console.log($scope.isLogged);
  $scope.loginData = {};
  userLog = StorageService.getAll();
  $scope.user = userLog[0];
  $scope.$watch('user', function() {});
  console.log(StorageService.getAll());

  // Perform the login action
  $scope.doLogin = function() {
    StorageService.add({'username': $scope.loginData.username, 'password': $scope.loginData.password});
    StorageService.changeStatus('1');
    $scope.changeStatus('1', {'username': $scope.loginData.username, 'password': $scope.loginData.password});
    // $window.location.reload(true);
    // $state.go('app.settings');
    };
})

.controller('SettingsCtrl', function($scope) {
  $scope.apps = "";
})

.controller('MaglistsCtrl', function(
  $scope,
  $http,
  $cordovaProgress,
  $cordovaFile,
  $cordovaFileTransfer,
  $cordovaZip,
  $timeout,
  $location,
  lodash
  ) {
  $http.get('appinfo.json').success(function(data){
    var project = data['project_id'];
    $http.get('http://api-dev.publixx.id/find/MagzApis/'+ project +'/2JKDLFCUER')
      .success(function(data, status, headers,config){
        $scope.maglists = _.map(data.results, function(thing) {
          thing.folderName = thing.zipFile.substring(thing.zipFile.lastIndexOf('/')+1).slice(0,-4);
          thing.progress = 0;
          thing.index = thing.magazineId - 1;
          return thing;
        });
        console.log($scope.maglists);
      })
      .error(function(data, status, headers,config){
        console.log('data error');
      })
      .then(function(result){
        // data = result.data.results[0];
        // $scope.folderName = data.zipFile.substring(data.zipFile.lastIndexOf('/')+1).slice(0,-4);
        // console.log(data.zipFile);
      });
  });
  $scope.goRead = function (folderName, issueName){
    $location.path('#app/maglists/'+folderName+'/'+issueName);
  }
  //Downloading File
  $scope.downloadContent = function (fn, zf, idx){
    // DownloadService.createFolder(fn);

    var url = zf;
    var targetPath = cordova.file.cacheDirectory + "contents/" + fn + ".zip";
    var unzipPath = cordova.file.cacheDirectory + "contents/" + fn + "/";
    var trustHosts = true;
    var options = {};
    alert(targetPath);

    $cordovaFileTransfer.download(url, targetPath, options, trustHosts)
      .then(function(result) {
        $cordovaZip.unzip(targetPath, unzipPath).then(function () {
            $scope.removeFile(fn);
            alert('unzip success');
          }, function () {
            console.log('error');
          }, function (progressEvent) {
            console.log(progressEvent);
          });
      }, function(err) {
        alert('download failed');
      }, function (progress) {
        $timeout(function () {
          progressBar = (progress.loaded / progress.total) * 100;
          document.getElementById(fn).value = progressBar;
          $scope.$watch('maglists['+idx+'].progress', function() {});
          $scope.maglists[idx].progress = progressBar;
        });
      });

  };

  //Removing File
  $scope.removeFile = function (fn) {
    $cordovaFile.removeFile(cordova.file.cacheDirectory + "contents/", fn + ".zip")
      .then(function (success) {
        alert('file removed');
      }, function (error) {
        alert('file not removed');
      });
  };


})

//Read Page

.controller('MaglistCtrl', function(
  $scope,
  $http,
  $stateParams,
  $ionicSideMenuDelegate,
  $ionicScrollDelegate,
  $timeout,
  $ionicModal,
  $cordovaFile
  ) {
  $scope.details = [];
  $scope.id = $stateParams.magazineId;
  $scope.issueName = $stateParams.issueName;
  $scope.folderName = $stateParams.folderName;

  $http.get('http://api-dev.publixx.id/issue/'+ $scope.id +'/MagzApis/')
    .success(function(data, status, headers,config){
      $scope.pages = _.map(data.results, function(thing, total) {
        thing.filePath = cordova.file.cacheDirectory + "contents/" + $scope.folderName + "/" + (total+1) + ".html";
        return thing;
      });
      console.log($scope.pages);
    })
    .error(function(data, status, headers,config){
      console.log('data error');
    })
    .then(function(result){

    });

  $scope.options = {
            noSwiping: true,
            noSwipingClass: 'do_not_swipe',
            watchSlidesVisibility:true,
            pagination:false,
  };

  $ionicSideMenuDelegate.canDragContent(false)
  $ionicModal.fromTemplateUrl('templates/modal.html', {
    scope: $scope,
    animation:'jelly'
  }).then(function(modal) {
    $scope.modal = modal;
  });

  $scope.openModal = function() {
    $scope.modal.show()
    $scope.imgUrl = "http://placekitten.com/g/500/800";
  }

});
