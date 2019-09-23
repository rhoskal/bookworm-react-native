#!/usr/bin/env bash
printf "[+] Installing Android SDK...\n"
cd ~
wget -q https://dl.google.com/android/repository/sdk-tools-linux-4333796.zip
unzip -q sdk-tools-linux-4333796.zip -d android-sdk
yes | android-sdk/tools/bin/sdkmanager --licenses
yes | android-sdk/tools/bin/sdkmanager --update
export ANDROID_HOME=$HOME/android-sdk

printf "[+] Installing Fastlane...\n"
cd ~/$SEMAPHORE_GIT_DIR/android
ls -al ../
gem install bundler
bundle update && bundle install

printf "[+] Building release...\n"
bundle exec fastlane release
