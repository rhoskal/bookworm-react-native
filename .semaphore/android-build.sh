#!/usr/bin/env bash
printf "[+] Installing Android SDK...\n"
sudo apt install -y android-sdk
yes | sdkmanager --licenses && yes | sdkmanager --update || exit 1
printf "[+] Installing Fastlane...\n"
cd android
gem install bundler
bundle update && bundle install
printf "[+] Building release...\n"
bundle exec fastlane release
