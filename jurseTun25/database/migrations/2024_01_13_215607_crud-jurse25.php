<?php

use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;
use Illuminate\Support\Facades\Schema;

class CreateTables extends Migration
{
    public function up()
    {
       

        Schema::create('tweets', function (Blueprint $table) {
            $table->id();
            $table->integer('tweet_id'); // Changed from 'id' to 'tweet_id' to avoid conflict
            $table->string('hinck');
            $table->dateTime('datetweet');
            $table->timestamps();
        });

        Schema::create('specialsessions', function (Blueprint $table) {
            $table->id();
            $table->integer('hd');
            $table->string('title');
            $table->text('description')->nullable();
            $table->integer('order');
            $table->timestamps();
        });

        Schema::create('videos', function (Blueprint $table) {
            $table->id();
            $table->integer('hid');
            $table->string('vpath');
            $table->string('title');
            $table->integer('order');
            $table->timestamps();
        });

        Schema::create('inntry', function (Blueprint $table) {
            $table->id();
            $table->string('content');
            $table->timestamps();
        });

        Schema::create('organizers', function (Blueprint $table) {
            $table->id();
            $table->string('src');
            $table->string('alt');
            $table->integer('order');
            $table->timestamps();
        });

        Schema::create('photos', function (Blueprint $table) {
            $table->id();
            $table->integer('hd');
            $table->string('vpath');
            $table->string('alt');
            $table->string('title');
            $table->integer('order');
            $table->timestamps();
        });

        Schema::create('pages', function (Blueprint $table) {
            $table->id();
            $table->string('name');
            $table->timestamps();
        });

        Schema::create('sponsors', function (Blueprint $table) {
            $table->id();
            $table->string('src');
            $table->string('alt');
            $table->integer('order');
            $table->timestamps();
        });

        Schema::create('authors', function (Blueprint $table) {
            $table->id();
            $table->timestamps();
        });

        Schema::create('users', function (Blueprint $table) {
            $table->id();
            $table->string('username');
            $table->string('password');
            $table->string('fullname');
            $table->timestamps();
        });

        Schema::create('keynotespeakers', function (Blueprint $table) {
            $table->id();
            $table->string('firstname');
            $table->string('lastname');
            $table->text('description')->nullable();
            $table->string('website')->nullable();
            $table->integer('hid');
            $table->timestamps();
        });

        Schema::create('countries', function (Blueprint $table) {
            $table->id();
            $table->string('name');
            $table->timestamps();
        });
    }

    public function down()
    {
        Schema::dropIfExists('countries');
        Schema::dropIfExists('keynotespeakers');
        Schema::dropIfExists('users');
        Schema::dropIfExists('authors');
        Schema::dropIfExists('sponsors');
        Schema::dropIfExists('pages');
        Schema::dropIfExists('photos');
        Schema::dropIfExists('inntry');
        Schema::dropIfExists('organizers');
        Schema::dropIfExists('videos');
        Schema::dropIfExists('specialsessions');
        Schema::dropIfExists('tweets');
        Schema::dropIfExists('links');
    }
}
