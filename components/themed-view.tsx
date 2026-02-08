import { View, type ViewProps } from 'react-native';
import { useColorScheme } from 'react-native';

export type ThemedViewProps = ViewProps & {
  lightColor?: string;
  darkColor?: string;
};

export function ThemedView({ style, lightColor, darkColor, ...otherProps }: ThemedViewProps) {
  const theme = useColorScheme() ?? 'light';

  // Define your default background colors here
  const backgroundColor = theme === 'light' ? (lightColor || '#FFFFFF') : (darkColor || '#121212');

  return <View style={[{ backgroundColor }, style]} {...otherProps} />;
}
