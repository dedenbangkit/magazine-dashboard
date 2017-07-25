<?php

/*
|--------------------------------------------------------------------------
| Application Routes
|--------------------------------------------------------------------------
|
| Here is where you can register all of the routes for an application.
| It's a breeze. Simply tell Laravel the URIs it should respond to
| and give it the controller to call when that URI is requested.
|
*/
//Route::group(['middleware' => ['auth']], function () {
/* home controler*/
Route::get('/', 'HomeController@index');
Route::get('/home', 'HomeController@index');

/*projects*/
Route::get('/projects', 'ProjectController@project');
Route::get('/create-project', 'ProjectController@createProject');
Route::post('/create-project', 'ProjectController@createProjectProcess');
Route::get('/history', 'ProjectController@history');
Route::get('/issue', 'ProjectController@issue');
Route::get('/create-issue', 'ProjectController@createIssue');
Route::get('/edit-issue/{id}', 'ProjectController@editIssue');
Route::post('/create-issue', 'ProjectController@createIssueProcess');
Route::post('/edit-issue', 'ProjectController@editIssueProcess');
Route::post('/del-issue', 'ProjectController@deleteIssueProcess');
Route::post('/publish-issue', 'ProjectController@publishIssueProcess');
Route::get('/published', 'ProjectController@published');

/*page*/
Route::get('/get-page', 'PageController@getPage');
Route::get('/load-page', 'PageController@loadPage');
Route::post('/save-page', 'PageController@savePage');
Route::get('/add-page', 'PageController@addPage');
Route::get('/del-page', 'PageController@deletePage');
Route::post('/iupload', 'PageController@iupload');
Route::post('/bgupload', 'PageController@bgupload');
Route::post('/slideupload', 'PageController@slideupload');
Route::post('/editor-issue', 'PageController@editorIssue');
Route::post('/save', 'PageController@exportIssue');
Route::get('/compile/{id}', 'PageController@exportIssueById');

/*userController*/
Route::get('/registration', 'UserController@showRegistrationForm');
Route::get('/user-list', 'UserController@userList');
Route::post('/registration', 'UserController@registrationProcess');
Route::post('/remove-user', 'UserController@removeUser');
Route::post('/change-user-password', 'UserController@changeUserPassword');
Route::post('/change-user-position', 'UserController@changeUserPosition');
Route::get('/user', 'UserController@showUser');

/*buildController*/
Route::post('/app-setting-update', 'BuildController@updateApp')->name('updateapp');
Route::post('/setup-app', 'BuildController@setupApp')->name('setupapp');
Route::get('/build-info', 'BuildApiController@getAppInfo')->name('getappinfo');
/*Testing*/
Route::post('/build-app', 'BuildApiController@Build');
Route::post('/build-update', 'BuildApiController@updateBuild');

/*subscribe*/
Route::get('/new-subscribe', 'SubscribeController@showFormSubscribe');
Route::Post('/subscribe-process', 'SubscribeController@subscribeProcessAdd');
Route::Post('/subscribe-process-update', 'SubscribeController@subscribeProcessUpdate');
Route::get('/client', 'SubscribeController@showClient');
Route::get('/client-list', 'SubscribeController@clientList');
Route::get('/get-invoice-detail', 'SubscribeController@getInvoiceDetail');
Route::get('/get-invoice-list', 'SubscribeController@getInvoiceList');
Route::get('/invoice-list', 'SubscribeController@invoicelist');
Route::post('/invoice-detail', 'SubscribeController@invoiceDetail');
Route::get('/services', 'SubscribeController@getService');
Route::get('/invoice-detail', function () {
    return view('errors.404');
});
/*mail service*/
Route::post('/send', 'EmailController@send');

/* sample */
Route::get('/sample', function () {
    return view('interact-sample');
});
Route::get('/editor-page', function () {
    return view('editor-page');
});
Route::get('/page', 'PageController@index');
Route::get('/sample-get-image', 'PageController@testing_get_ur_image');
Route::get('/sample-page', 'PageController@sample');
Route::get('/page-editor', 'PageController@sample2');

//});
