import React from 'react'
import { FlatList, View } from 'react-native'
import { COLORS, DISTANCE, FONT_FAMILY } from '../constants/themes'
import HorizontalItem from './HorizontalItem'
import CustomText from './common/CustomText'

export default function HorizontalList({ title, list }) {
  return (
    <View>
      <CustomText
        style={{
          marginHorizontal: DISTANCE.contentPadding,
          marginBottom: DISTANCE.contentPadding,
          fontSize: 18,
          fontFamily: FONT_FAMILY.BOLD,
          color: COLORS.grey01,
        }}>{title}
      </CustomText>
      <FlatList
        showsHorizontalScrollIndicator={false}
        horizontal
        data={list}
        renderItem={({ item, index }) => {
          return (
            <HorizontalItem
              item={item}
              isLast={index === list.length - 1} />
          )
        }}
      />
    </View>
  )
}