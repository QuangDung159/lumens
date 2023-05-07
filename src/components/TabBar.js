import { View, Text, TouchableOpacity, Image } from 'react-native';
import { TAB_HOME, TAB_NOTIFICATION, TAB_PAYMENT } from '../constants/common';
import { ImageAssets } from '../assets';
import { COLORS } from '../constants/themes';

export default function TabBar({ state, descriptors, navigation }) {
  const renderTabIcon = (tabLabel) => {
    switch (tabLabel) {
      case TAB_HOME:
        return ImageAssets.tab.home;
      case TAB_NOTIFICATION:
        return ImageAssets.tab.notification;
      case TAB_PAYMENT:
        return ImageAssets.tab.payment;
      default:
        return ImageAssets.tab.user;
    }
  }

  return (
    <View style={{ flexDirection: 'row' }}>
      {state.routes.map((route, index) => {
        const { options } = descriptors[route.key];

        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate({ name: route.name, merge: true });
          }
        };

        const onLongPress = () => {
          navigation.emit({
            type: 'tabLongPress',
            target: route.key,
          });
        };

        return (
          <TouchableOpacity
            accessibilityRole="button"
            accessibilityState={isFocused ? { selected: true } : {}}
            accessibilityLabel={options.tabBarAccessibilityLabel}
            testID={options.tabBarTestID}
            onPress={onPress}
            onLongPress={onLongPress}
            style={{ flex: 1, height: 96, alignItems: 'center', justifyContent: 'center' }}
            key={route.key}
          >
            <View>
              <Image style={{
                height: 40,
                width: 40,
                tintColor: isFocused ? COLORS.blueDark : COLORS.grey06
              }} source={renderTabIcon(route.name)}></Image>
            </View>
          </TouchableOpacity>
        );
      })}
    </View>
  );
}