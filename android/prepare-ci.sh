#!/usr/bin/env bash

printf "[+] Setting up env vars...\n"
pwd && cd ~
export PATH=$PATH:$ANDROID_HOME/emulator
export PATH=$PATH:$ANDROID_HOME/tools
export PATH=$PATH:$ANDROID_HOME/tools/bin
export PATH=$PATH:$ANDROID_HOME/platform-tools
env | grep ANDROID
echo $PATH

printf "[+] Installing Android SDK...\n"
pwd
wget -q https://dl.google.com/android/repository/sdk-tools-linux-4333796.zip
unzip -q sdk-tools-linux-4333796.zip -d android_sdk
ll
yes | sdkmanager --licenses && yes | sdkmanager --update || exit 1

printf "[+] Installing Fastlane...\n"
pwd && cd ~/react-native/android
gem install bundler
bundle update && bundle install
