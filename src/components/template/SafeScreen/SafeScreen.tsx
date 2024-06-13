import { StatusBar, View } from 'react-native';
import type { PropsWithChildren } from 'react';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { useTheme } from '@/theme';
import LinearGradient from 'react-native-linear-gradient';

function SafeScreen({ children }: PropsWithChildren) {
  const { layout, variant, navigationTheme } = useTheme();
  const colorLinear = ['#F37261', '#142131', '#000113', '#842CF2'];
  const insets = useSafeAreaInsets();

  return (
    <LinearGradient
      colors={colorLinear}
      useAngle
      angle={-225}
      style={[
        layout.flex_1,
        {
          // Paddings to handle safe area
          paddingTop: insets.top,
          paddingBottom: insets.bottom,
          paddingLeft: insets.left,
          paddingRight: insets.right,
        },
      ]}
    >
      <StatusBar
        barStyle={variant === 'dark' ? 'light-content' : 'dark-content'}
        backgroundColor={navigationTheme.colors.background}
      />

      {children}
    </LinearGradient>
  );
}

export default SafeScreen;
