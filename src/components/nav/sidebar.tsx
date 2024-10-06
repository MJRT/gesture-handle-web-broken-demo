import type { Href } from 'expo-router';
import { Link } from 'expo-router';
import React from 'react';
import { View } from 'react-native';

import type { IconNames } from '@/components/lucide-icons';
import LucideIcons from '@/components/lucide-icons';
import { Button } from '@/components/ui/button';
import { Text } from '@/components/ui/text';

export type NavItem = {
  link: string;
  icon: IconNames;
  title: string;
};

export function Sidebar() {
  return (
    <View className="w-300 left-0 flex flex-col gap-4 border-b bg-muted px-4 md:px-6">
      <NavItems />
    </View>
  );
}

export const navItems: NavItem[] = [
  {
    title: 'Tab1',
    link: '/',
    icon: 'CalendarFold',
  },
  {
    title: 'Tab2',
    link: '/tab',
    icon: 'ListTodo',
  },
];

function NavItems() {
  return navItems.map((navItem) => {
    return (
      <Link
        href={navItem.link as Href}
        className="w-full"
        key={`side-nav-${navItem.title}`}
        asChild
      >
        <Button
          variant="ghost"
          size="icon"
          className="w-full flex-row items-center justify-start gap-6"
        >
          <LucideIcons name={navItem.icon} />
          <Text>{navItem.title}</Text>
        </Button>
      </Link>
    );
  });
}
