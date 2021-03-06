import * as React from 'react';
import { View, Text, ViewStyle, Pressable, TextStyle } from 'react-native';
import Node from '../node';
import Icon from '../icon';
import styles from './style';
import { $fontColor3 } from '@styles/theme';

const prefixCls = 'cell';

export interface CellProps {
  label?: React.ReactNode;
  children?: React.ReactNode;
  description?: React.ReactNode;
  labelDescription?: React.ReactNode;
  style?: ViewStyle;
  labelStyle?: ViewStyle;
  valueStyle?: ViewStyle;
  labelDescriptionStyle?: ViewStyle | TextStyle;
  vertical?: boolean;
  icon?: string;
  required?: boolean;
  border?: boolean;
  arrow?: boolean;
  extra?: React.ReactNode;
  field?: boolean;
  defaultNullValue?: string;
  onPress?: () => void;
}

const Cell = (props: CellProps) => {
  const {
    label,
    style,
    labelStyle,
    valueStyle,
    labelDescription,
    labelDescriptionStyle,
    children,
    vertical,
    icon,
    arrow,
    extra,
    required,
    defaultNullValue = '',
    onPress,
  } = props;

  if (vertical) {
    return (
      <Pressable style={[styles[prefixCls], style]} onPress={onPress}>
        {label ? (
          <View style={styles[`${prefixCls}-vertical-top`]}>
            {required ? <Text style={styles[`${prefixCls}-required`]}>*</Text> : null}
            {label ? (
              <View style={styles[`${prefixCls}-vertical-label`]}>
                <Node style={[styles[`${prefixCls}-label-text`], labelStyle]}>{label}</Node>
                <Node style={[styles[`${prefixCls}-label-description`], labelDescriptionStyle]}>
                  {labelDescription}
                </Node>
              </View>
            ) : null}
          </View>
        ) : null}
        <Node style={[styles[`${prefixCls}-vertical-value`], valueStyle]}>{children}</Node>
      </Pressable>
    );
  }

  return (
    <Pressable
      style={[styles[prefixCls], styles[`${prefixCls}-horizontal`], style]}
      onPress={onPress}
    >
      <View style={styles[`${prefixCls}-left`]}>
        {required ? <Text style={styles[`${prefixCls}-required`]}>*</Text> : null}
        {icon ? (
          <View style={styles[`${prefixCls}-icon`]}>
            <Icon name={icon} size={18} style={{ marginRight: '10px' }} color="#333" />
          </View>
        ) : null}
        {label ? (
          <View style={styles[`${prefixCls}-label`]}>
            <Node style={[styles[`${prefixCls}-label-text`], labelStyle]}>{label}</Node>
            <Node style={[styles[`${prefixCls}-label-description`], labelDescriptionStyle]}>
              {labelDescription}
            </Node>
          </View>
        ) : null}
      </View>
      <View style={styles[`${prefixCls}-right`]}>
        <Node style={[styles[`${prefixCls}-value`], valueStyle]}>
          {children || children === 0 ? children : defaultNullValue}
        </Node>
        {extra ? <Node style={styles[`${prefixCls}-extra`]}>{extra}</Node> : null}
        {arrow ? (
          <View style={{ marginLeft: 3 }}>
            <Icon name="line-return-center-24" size={12} color={$fontColor3} />
          </View>
        ) : null}
      </View>
    </Pressable>
  );
};

export default Cell;
