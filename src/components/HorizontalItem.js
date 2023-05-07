import { View, Text, Image } from 'react-native'
import React from 'react'
import { COLORS, DISTANCE, FONT_FAMILY } from '../constants/themes'
import { ImageAssets } from '../assets'

export default function HorizontalItem({ item }) {
  return (
    <View
      style={{
        marginLeft: DISTANCE.contentPadding,
        backgroundColor: COLORS.white,
        justifyContent: 'flex-start',
        width: 200,
        borderRadius: 1,
        borderColor: COLORS.grey08,
        borderWidth: 1,
        marginBottom: 48,
        minHeight: 240,
      }}>
      <Image source={item.image} style={{
        width: 200,
        height: 98,
        borderTopLeftRadius: 1,
        borderTopRightRadius: 1,
        marginBottom: DISTANCE.distance16,
      }} />
      <View
        style={{
          marginHorizontal: DISTANCE.distance16,
        }}
      >
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            marginBottom: 8,
          }}>
          {item.isInsufficient && (
            <Image source={ImageAssets.insufficientIcon}
              style={{
                width: 16,
                height: 16,
                marginRight: 4,
              }} />
          )}
          <Text
            style={{
              lineHeight: 24,
              color: item.isInsufficient ? COLORS.grey03 : COLORS.blueDark,
              fontSize: 16,
              fontFamily: FONT_FAMILY.BOLD,
            }}>{item.title}
          </Text>
        </View>
        <Text
          numberOfLines={3}
          style={{
            lineHeight: 24,
            color: COLORS.grey04,
            fontSize: 16,
            fontFamily: FONT_FAMILY.REGULAR,
            marginBottom: item.isInsufficient ? 8 : 20,
          }}>{item.content}
        </Text>
        {item.isInsufficient && (
          <Text
            style={{
              lineHeight: 20,
              color: COLORS.blueDark,
              fontSize: 14,
              fontFamily: FONT_FAMILY.REGULAR,
              marginBottom: 16,
            }}>Insufficient coins
          </Text>
        )}
      </View>
    </View>
  )
}