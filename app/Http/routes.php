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

/* home controler*/
Route::get('/', 'HomeController@index');
Route::get('/home', 'HomeController@index');

/*projects*/
Route::get('/projects', 'ProjectController@project');
Route::get('/create-project', 'ProjectController@createProject');
Route::get('/history', 'ProjectController@history');
Route::get('/issue', 'ProjectController@issue');
Route::get('/review', 'ProjectController@review');
Route::get('/published', 'ProjectController@published');

/*userController*/
Route::get('/registration', 'UserController@showRegistrationForm');
Route::post('/registration', 'UserController@registrationProcess');
Route::get('/user', 'UserController@showUser');