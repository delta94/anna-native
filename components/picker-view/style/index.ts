import { StyleSheet, Dimensions } from 'react-native';
import { $brandColor } from '@styles/theme';

const screen = Dimensions.get('screen');

const styles = StyleSheet.create<any>({
  'picker-view': {},
  'picker-view-toolbar': {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  'picker-view-cancel': {
    paddingHorizontal: 12,
    color: '#999',
    height: 44,
    lineHeight: 44,
    fontWeight: '500',
  },
  'picker-view-title': {
    color: '#333',
    fontWeight: '500',
    height: 44,
    lineHeight: 44,
  },
  'picker-view-confirm': {
    paddingHorizontal: 12,
    color: $brandColor,
    height: 44,
    lineHeight: 44,
    fontWeight: '500',
  },
  'picker-view-columns': {
    position: 'relative',
    // height: 220,
    minHeight: 132,
    maxHeight: screen.height - 300,
  },
  'picker-view-selected': {
    position: 'absolute',
    left: 0,
    top: 88,
    width: '100%',
    height: 44,
    backgroundColor: 'rgba(102, 204, 255, 0.08)',
  },
  'picker-view-mask': {
    position: 'absolute',
    left: 0,
    top: 0,
    width: '100%',
    height: '100%',
  },
});

export default styles;
