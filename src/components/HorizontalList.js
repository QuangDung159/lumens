import { View, Text, FlatList, Image } from 'react-native'
import React from 'react'
import { dummy } from '../constants/dummy'
import { COLORS, DISTANCE, FONT_FAMILY } from '../constants/themes'
import { ImageAssets } from '../assets'
import HorizontalItem from './HorizontalItem'

export default function HorizontalList({ title, list }) {
  return (
    <View>
      <Text
        style={{
          marginHorizontal: DISTANCE.contentPadding,
          marginBottom: DISTANCE.contentPadding,
          lineHeight: 24,
          fontSize: 18,
          fontFamily: FONT_FAMILY.BOLD,
          color: COLORS.grey01,
        }}>{title}</Text>
      <FlatList
        showsHorizontalScrollIndicator={false}
        horizontal
        data={list}
        renderItem={({ item }) => {
          return (
            <HorizontalItem item={item} />
          )
        }}
      />
    </View>
  )
}