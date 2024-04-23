<?php

use Illuminate\Support\Facades\Route;

Route::get('/', function () {
    return view('index');
});

Route::get('/index-2', function () {
    return view('index-2');
});

Route::get('/dates', function () {
    return view('dates');
});

// Participation Routes
Route::prefix('participation')->group(function () {
    Route::get('/program', function () {
        return view('program');
    });

    Route::get('/guidelines', function () {
        return view('guidelines');
    });

    Route::get('/call-for-papers', function () {
        return view('call-for-papers');
    });

    Route::get('/registration', function () {
        return view('registration');
    });

    Route::get('/social-events', function () {
        return view('social-events');
    });
});

// Presentation Routes

    Route::get('/keynotes', function () {
        return view('keynotes');
    });

    Route::get('/topics', function () {
        return view('topics');
    });

    Route::get('/special-sessions', function () {
        return view('special-sessions');
    });

    Route::get('/special-sessions/future-settlement-growth-modelling-with-eo-products', function () {
        return view('special-sessions.future-settlement-growth-modelling-with-eo-products');
    });

    // Add routes for other special sessions...

    Route::get('/technical-tutorials', function () {
        return view('technical-tutorials');
    });

    Route::get('/student-contest', function () {
        return view('student-contest');
    });

    Route::get('/exhibitors', function () {
        return view('exhibitors');
    });


Route::get('/committees', function () {
    return view('committees');
});

Route::get('/sponsors', function () {
    return view('sponsors');
});

// Venue Routes

    Route::get('/heraklion-and-crete', function () {
        return view('heraklion-and-crete');
    });

    Route::get('/venue', function () {
        return view('venue');
    });

    Route::get('/hotels', function () {
        return view('hotels');
    });

Route::get('/videos-and-photos', function () {
    return view('videos-and-photos');
});

Route::get('/contact', function () {
    return view('contact');
});


