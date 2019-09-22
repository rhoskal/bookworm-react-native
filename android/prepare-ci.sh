#!/usr/bin/env bash
printf "[+] Installing Android SDK...\n"
wget -q https://dl.google.com/android/repository/sdk-tools-linux-4333796.zip
unzip -q sdk-tools-linux-4333796.zip -d android_sdk
yes | sdkmanager --licenses && yes | sdkmanager --update || exit 1

printf "[+] Installing Fastlane...\n"
pwd && cd ~/bookworm-react-native/android
gem install bundler
bundle update && bundle install
