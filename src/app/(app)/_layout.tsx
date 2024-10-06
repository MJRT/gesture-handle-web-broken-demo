import { Slot } from 'expo-router';
import React from 'react';
import { View } from 'react-native';

import { Sidebar } from '@/components/nav/sidebar';

export default function TabLayout() {
  return (
    <View className="flex-1 flex-row">
      <Sidebar />
      <Slot />
    </View>
  );
}
