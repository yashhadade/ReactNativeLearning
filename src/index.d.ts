declare module "*.png"

interface Currency{
    name :string,
    value:number,
    flag:string,
    symbol:string,
}
// react-native-vector-icons.d.ts
declare module 'react-native-vector-icons/FontAwesome' {
  import React from 'react';
  import { TextProps } from 'react-native';

  export interface IconProps extends TextProps {
    name: string;
    size?: number;
    color?: string;
  }

  export default class FontAwesome extends React.Component<IconProps> {}
}

interface Product {
  id:string,
  name:string,
  imageUrl:string,
  originalPrice:number,
  discountPrice:number;
  offerPercentage:name;
  rating:number;
  ratingCount:number;
  tags:string[];
}