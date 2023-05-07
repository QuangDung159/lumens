import React from 'react'
import { Image, ImageBackground, TouchableOpacity, View } from 'react-native'
import { ImageAssets } from '../assets'
import { COLORS, DISTANCE, FONT_FAMILY } from '../constants/themes'
import CustomText from './common/CustomText'

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
          <CustomText
            style={{
              fontSize: 14,
              fontFamily: FONT_FAMILY.BOLD,
              marginBottom: DISTANCE.distance8,
            }}>Available Coin balance
          </CustomText>
          <CustomText
            style={{
              fontSize: 48,
              color: COLORS.grey01,
              lineHeight: 56,
              marginBottom: 34,
            }}>340</CustomText>
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
          <CustomText
            style={{
              color: COLORS.grey04,
              marginBottom: 16,
            }}>You have paid rental fee for $1,200. Pay more $800 to achieve Gold Tier.</CustomText>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              marginBottom: DISTANCE.contentPadding,
            }}>
            <CustomText
              style={{
                color: COLORS.blueDark,
                marginRight: 9,
              }}>View tier benefits
            </CustomText>
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
              <CustomText
                style={{
                  color: COLORS.white,
                  fontSize: 18,
                  fontFamily: FONT_FAMILY.BOLD,
                }}>My Coupons
              </CustomText>
            </View>
          </TouchableOpacity>
          <CustomText
            style={{
              textAlign: 'center',
              lineHeight: 20,
              fontSize: 14,
            }}>Updated : 02/11/2021
          </CustomText>
        </View>
      </ImageBackground>
    </View>
  )
}