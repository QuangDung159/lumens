import React from 'react';
import { Image, ScrollView, Text, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { ImageAssets } from '../assets';
import { dummy, dummyFoodAndBeverage, dummyRentalRebate } from '../constants/dummy';
import { COLORS, DISTANCE, FONT_FAMILY } from '../constants/themes';
import AvailableCoinBalance from './AvailableCoinBalance';
import HorizontalList from './HorizontalList';

export default function TabHome() {
  const insets = useSafeAreaInsets();
  const statusBarHeight = insets.top;

  return (
    <ScrollView
      showsVerticalScrollIndicator={false}>
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
      </View>
      <View
        style={{
          marginTop: -(428 - 252)
        }}>
        <AvailableCoinBalance />
        <HorizontalList title='Petrol' list={dummy} />
        <HorizontalList title='Rental Rebate' list={dummyRentalRebate} />
        <HorizontalList title='Food and Beverage' list={dummyFoodAndBeverage} />
      </View>
    </ScrollView>
  )
}