import React from 'react'
import { Image, ImageBackground, Text, TouchableOpacity, View } from 'react-native'
import { ImageAssets } from '../assets'
import { COLORS, DISTANCE, FONT_FAMILY } from '../constants/themes'

export default function AvailableCoinBalance() {
  return (
    <View
      style={{
        marginHorizontal: DISTANCE.distance16,
        borderRadius: 8,
        backgroundColor: COLORS.white,
        marginBottom: DISTANCE.contentPadding,
      }}>
      <ImageBackground source={ImageAssets.coinBalanceBackground} resizeMode="cover"
        style={{
          borderRadius: 8,
        }}
      >
        <View
          style={{
            marginHorizontal: DISTANCE.contentPadding,
            marginVertical: DISTANCE.contentPadding,
          }}
        >
          <Text
            style={{
              fontSize: 14,
              color: COLORS.grey05,
              fontFamily: FONT_FAMILY.BOLD,
              marginBottom: DISTANCE.distance8,
              lineHeight: 24,
            }}>Available Coin balance
          </Text>
          <Text
            style={{
              fontSize: 48,
              color: COLORS.grey01,
              fontFamily: FONT_FAMILY.REGULAR,
              lineHeight: 56,
              marginBottom: 34,
            }}>340
          </Text>
          <View
            style={{
              height: 5,
              backgroundColor: COLORS.grey07,
              borderRadius: 2.5,
              marginBottom: 34,
            }}>
            <View
              style={{
                height: 5,
                backgroundColor: COLORS.blueDark,
                borderRadius: 2.5,
                width: 192,
              }}></View>
          </View>
          <Text
            style={{
              fontSize: 16,
              fontFamily: FONT_FAMILY.REGULAR,
              lineHeight: 24,
              color: COLORS.grey04,
              marginBottom: 16,
            }}>
            You have paid rental fee for $1,200. Pay more $800 to achieve Gold Tier.
          </Text>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              marginBottom: DISTANCE.contentPadding,
            }}>
            <Text
              style={{
                fontSize: 16,
                fontFamily: FONT_FAMILY.REGULAR,
                lineHeight: 24,
                color: COLORS.blueDark,
                marginRight: 9,
              }}>
              View tier benefits
            </Text>
            <Image source={ImageAssets.next} style={{
              width: 6,
              height: 12,
              resizeMode: 'cover'
            }} />
          </View>
          <TouchableOpacity>
            <View
              style={{
                backgroundColor: COLORS.buttonActive,
                height: 80,
                borderRadius: 4,
                justifyContent: 'center',
                alignItems: 'center',
                marginBottom: DISTANCE.distance16,
              }}>
              <Text
                style={{
                  lineHeight: 24,
                  color: COLORS.white,
                  fontSize: 18,
                  fontFamily: FONT_FAMILY.BOLD,
                }}>My Coupons</Text>
            </View>
          </TouchableOpacity>
          <Text
            style={{
              textAlign: 'center',
              lineHeight: 20,
              fontFamily: FONT_FAMILY.REGULAR,
              fontSize: 14,
              color: COLORS.grey05,
            }}>
            Updated : 02/11/2021
          </Text>
        </View>
      </ImageBackground>
    </View>
  )
}