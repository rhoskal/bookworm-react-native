#!/usr/bin/env bash
printf "[+] Installing Android SDK...\n"
sudo apt install -y android-sdk

printf "[+] Setting up env vars...\n"
export ANDROID_HOME=/usr/lib/android-sdk
export PATH=$PATH:$ANDROID_HOME/emulator
export PATH=$PATH:$ANDROID_HOME/tools
export PATH=$PATH:$ANDROID_HOME/tools/bin
export PATH=$PATH:$ANDROID_HOME/platform-tools

printf "[+] Accepting Android SDK licenses...\n"
tail -f /dev/null
yes | sdkmanager --licenses && yes | sdkmanager --update || exit 1

printf "[+] Installing Fastlane...\n"
cd android
gem install bundler
bundle update && bundle install
