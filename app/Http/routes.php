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
Route::group(['middleware' => ['web']], function () {
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
Route::post('/create-issue', 'ProjectController@createIssueProcess');
Route::post('/del-issue', 'ProjectController@deleteIssueProcess');
Route::post('/publish-issue', 'ProjectController@publishIssueProcess');
Route::get('/review', 'ProjectController@review');
Route::get('/published', 'ProjectController@published');

/*page*/
Route::get('/get-page', 'PageController@getPage');
Route::post('/save-page', 'PageController@savePage');
Route::post('/iupload', 'PageController@iupload');
Route::post('/editor-issue', 'PageController@editorIssue');
Route::post('/save', 'PageController@exportIssue');

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
Route::post('/build-setting-update', 'BuildController@buildApp')->name('buildapp');

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
Route::get('/invoice-detail', function () {
    return view('errors.404');
});
/* sample */
Route::get('/sample', function () {
    return view('interact-sample');
});
Route::get('/editor-page', function () {
    return view('editor-page');
});
Route::get('/page', 'PageController@index');
Route::get('/sample-page', 'PageController@sample');
Route::get('/sample-page2', 'PageController@sample2');

});

