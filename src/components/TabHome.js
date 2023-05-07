import React from 'react';
import { FlatList, Image, ScrollView, Text, View, Dimensions } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { ImageAssets } from '../assets';
import { dummy } from '../constants/dummy';
import { COLORS, DISTANCE, FONT_FAMILY } from '../constants/themes';
import AvailableCoinBalance from './AvailableCoinBalance';

export default function TabHome() {
  const insets = useSafeAreaInsets();
  const statusBarHeight = insets.top;

  return (
    <ScrollView>
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
              marginHorizontal: DISTANCE.contentPadding,
              marginBottom: DISTANCE.distance40,
            }}>
            <View
              style={{
                width: DISTANCE.distance40,
                height: DISTANCE.distance40,
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
          <AvailableCoinBalance />
          <View>
            <Text
              style={{
                marginHorizontal: DISTANCE.contentPadding,
                marginVertical: DISTANCE.contentPadding,
                lineHeight: 24,
                fontSize: 18,
                fontFamily: FONT_FAMILY.BOLD,
                color: COLORS.grey01,
              }}>Petrol</Text>
            <View>
              <FlatList
                horizontal
                data={dummy}
                renderItem={({ item, index }) => {
                  console.log('item :>> ', item);
                  return (
                    <Text key={item.id}>{item.title}</Text>
                  )
                }}
              />
            </View>
          </View>
        </View>
      </View>
    </ScrollView>
  )
}