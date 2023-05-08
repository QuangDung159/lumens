import React from 'react'
import { Image, View } from 'react-native'
import { ImageAssets } from '../assets'
import { COLORS, DISTANCE, FONT_FAMILY, SHADOW } from '../constants/themes'
import CustomText from './common/CustomText'

export default function HorizontalItem({ item, isLast }) {
  return (
    <View
      style={[{
        marginLeft: DISTANCE.contentPadding,
        marginRight: isLast ? DISTANCE.contentPadding : 0,
        backgroundColor: COLORS.white,
        justifyContent: 'flex-start',
        width: 200,
        borderRadius: 1,
        borderColor: COLORS.grey08,
        borderWidth: 1,
        marginBottom: 48,
        minHeight: 240,
      },
        SHADOW,
      ]}>
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
          <CustomText
            style={{
              color: item.isInsufficient ? COLORS.grey03 : COLORS.blueDark,
              fontFamily: FONT_FAMILY.BOLD,
            }}>{item.title}
          </CustomText>
        </View>
        <CustomText
          numberOfLines={3}
          style={{
            color: COLORS.grey04,
            marginBottom: item.isInsufficient ? 8 : 20,
          }}>{item.content}
        </CustomText>
        {item.isInsufficient && (
          <CustomText
            style={{
              lineHeight: 20,
              color: COLORS.blueDark,
              fontSize: 14,
              marginBottom: 16,
            }}>Insufficient coins
          </CustomText>
        )}
      </View>
    </View>
  )
}