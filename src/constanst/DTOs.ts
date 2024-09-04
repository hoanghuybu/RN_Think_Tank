import React from "react";

// #region APP DTO
export type _screensDTO = {
  name: string;
  component: () => React.JSX.Element;
  route: string;
};

export type OnboardingDataDTO = {
  id: string;
  image: any;
  title: string;
  content?: string;
};

export type DevicesDTO = {
  [deviceName: string]: {
    width: number;
    height: number;
  };
};

export enum Based {
  WIDTH = "width",
  HEIGTH = "heigth"
}

//#endregion

// #region auth dtos
export type LoginRequestParam = {
  userName: string;
  password: string;
  fcm: string;
};

export type LoginResponseParam = {
  id: number;
  code: string;
  fullName: string;
  userName: string;
  email: string;
  gender: string;
  dateOfBirth: string;
  avatar: string;
  coin: number;
  isOnline: boolean;
  refreshToken: string;
  fcm: string;
  status: boolean;
  googleId: string;
  registrationDate: string;
  accessToken: string;
  amountReport: number;
  version: string;
  versionToken: number;
};
//#endregion
