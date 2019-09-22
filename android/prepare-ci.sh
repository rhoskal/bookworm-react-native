#!/usr/bin/env bash

printf "[+] Setting up env vars...\n"
cd ~
export PATH=$PATH:$ANDROID_HOME/emulator
export PATH=$PATH:$ANDROID_HOME/tools
export PATH=$PATH:$ANDROID_HOME/tools/bin
export PATH=$PATH:$ANDROID_HOME/platform-tools

printf "[+] Installing Android SDK...\n"
wget -q https://dl.google.com/android/repository/sdk-tools-linux-4333796.zip
unzip -q sdk-tools-linux-4333796.zip -d android_sdk
yes | sdkmanager --licenses && yes | sdkmanager --update || exit 1

printf "[+] Installing Fastlane...\n"
cd ~/react-native/android
gem install bundler
bundle update && bundle install
