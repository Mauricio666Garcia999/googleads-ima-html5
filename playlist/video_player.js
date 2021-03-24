// Copyright 2013 Google Inc. All Rights Reserved.
// You may study, modify, and use this example for any purpose.
// Note that this example is provided "as is", WITHOUT WARRANTY
// of any kind either expressed or implied.

<<<<<<< HEAD
goog.module('google3.personalization.zipit.frontend.javascript.external-javascript.ads.interactivemedia.sdk.clientside.samples.googleads-ima-html5.playlist.video_player');

=======
>>>>>>> gh-pages
/**
 * Handles video player functionality.
 */
var VideoPlayer = function() {
  this.contentPlayer = document.getElementById('content');
  this.adContainer = document.getElementById('adcontainer');
  this.videoPlayerContainer_ = document.getElementById('videoplayer');

  this.contentIndex = 0;
<<<<<<< HEAD
  this.contentUrls = [
    'https://storage.googleapis.com/gvabox/media/samples/stock.mp4',
    'https://storage.googleapis.com/gvabox/media/samples/android.mp4'
  ];
=======
  this.contentUrls = ['http://rmcdn.2mdn.net/Demo/vast_inspector/android.mp4',
                      'http://rmcdn.2mdn.net/Demo/html5/output.mp4'];
>>>>>>> gh-pages

  this.width = 640;
  this.height = 360;
};

VideoPlayer.prototype.preloadContent = function(contentLoadedAction) {
  // If this is the initial user action on iOS or Android device,
  // simulate playback to enable the video element for later program-triggered
  // playback.
  if (this.isMobilePlatform()) {
    this.preloadListener_ = contentLoadedAction;
    this.contentPlayer.addEventListener(
<<<<<<< HEAD
        'loadedmetadata', contentLoadedAction, false);
=======
        'loadedmetadata',
        contentLoadedAction,
        false);
>>>>>>> gh-pages
    this.setContentVideoSource_(this.contentIndex);
  } else {
    this.setContentVideoSource_(this.contentIndex);
    contentLoadedAction();
  }
};

VideoPlayer.prototype.removePreloadListener = function() {
  if (this.preloadListener_) {
    this.contentPlayer.removeEventListener(
<<<<<<< HEAD
        'loadedmetadata', this.preloadListener_, false);
=======
        'loadedmetadata',
        this.preloadListener_,
        false);
>>>>>>> gh-pages
    this.preloadListener_ = null;
  }
};

VideoPlayer.prototype.play = function() {
  this.contentPlayer.play();
};

VideoPlayer.prototype.pause = function() {
  this.contentPlayer.pause();
};

VideoPlayer.prototype.isMobilePlatform = function() {
  return this.contentPlayer.paused &&
      (navigator.userAgent.match(/(iPod|iPhone|iPad)/) ||
       navigator.userAgent.toLowerCase().indexOf('android') > -1);
};

<<<<<<< HEAD
VideoPlayer.prototype.resize = function(position, top, left, width, height) {
=======
VideoPlayer.prototype.resize = function(
    position, top, left, width, height) {
>>>>>>> gh-pages
  this.videoPlayerContainer_.style.position = position;
  this.videoPlayerContainer_.style.top = top + 'px';
  this.videoPlayerContainer_.style.left = left + 'px';
  this.videoPlayerContainer_.style.width = width + 'px';
  this.videoPlayerContainer_.style.height = height + 'px';
  this.contentPlayer.style.width = width + 'px';
  this.contentPlayer.style.height = height + 'px';
};

VideoPlayer.prototype.registerVideoEndedCallback = function(callback) {
  this.contentPlayer.addEventListener('ended', callback, false);
};

VideoPlayer.prototype.removeVideoEndedCallback = function(callback) {
  this.contentPlayer.removeEventListener('ended', callback, false);
};

VideoPlayer.prototype.setContentVideoIndex = function(index) {
  this.contentIndex = index;
};

VideoPlayer.prototype.setContentVideoSource_ = function(index) {
  this.contentIndex = index;
  this.contentPlayer.src = this.contentUrls[index];
  this.contentPlayer.load();
};
