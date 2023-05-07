import React from 'react';
import { Image, SafeAreaView, ScrollView, StatusBar, Text, View } from 'react-native';
import { ImageAssets } from '../assets';
import { COLORS, DISTANCE, FONT_FAMILY } from '../constants/themes';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

export default function TabHome() {
  const insets = useSafeAreaInsets();
  const statusBarHeight = insets.top;

  return (
    <ScrollView
      style={{

      }}>
      <View style={{
        backgroundColor: COLORS.background,
      }}>
        <View
          style={{
            height: 428,
            backgroundColor: COLORS.grey01,
          }}>
          <View
            style={{
              marginHorizontal: DISTANCE.contentPadding
            }}>
            <View
              style={{
                width: 40,
                height: 40,
                backgroundColor: COLORS.white,
                marginTop: statusBarHeight + DISTANCE.contentPadding,
                borderRadius: 20,
                justifyContent: 'center',
                alignItems: 'center',
                marginBottom: DISTANCE.distance16,
              }}>
              <Image source={ImageAssets.back} style={{
                width: 6,
                height: 12,
              }}></Image>
            </View>
            <Text
              style={{
                color: COLORS.white,
                fontSize: 32,
                fontFamily: FONT_FAMILY.BOLD,
                marginBottom: DISTANCE.distance8,
              }}>Silver Tier
            </Text>
            <Text
              style={{
                color: COLORS.grey05,
                fontSize: 16,
                fontFamily: FONT_FAMILY.REGULAR,
                lineHeight: 24,
              }}>In Silver Tier, every $1 in rental fee paid, you get 2 coins to redeem exclusive rewards.
            </Text>
          </View>
        </View>
      </View>
    </ScrollView>
  )
}