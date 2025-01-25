import { localImages } from "@assets/localImages";
import {
  blue557DB0,
  blue5595B0,
  orangeFC902A,
  redEA5455,
  yellowF5AB2B
} from "./Colors";
import { DevicesDTO, ItemCardGameDTO, OnboardingDataDTO } from "./DTOs";

export const OnboardingData: OnboardingDataDTO[] = [
  {
    id: "1",
    image: localImages().onboarding_image_1,
    title: "Memory challenge",
    content:
      "With a collection of engaging games, we offer you diverse challenges to enhance your memory every day. By conquering these games, you'll boost your focus and effectively improve your ability to retain information."
  },
  {
    id: "2",
    image: localImages().onboarding_image_2,
    title: "Track your progress",
    content:
      "Our memory training app not only helps you play engaging games but also utilizes your scores for analysis and evaluation. We provide memory improvement charts, allowing you to easily track progress and witness clear improvements over time."
  },
  {
    id: "3",
    image: localImages().onboarding_image_3,
    title: "The result of effort",
    content:
      "We help you achieve goals and reward you with interesting badges as a part of the accomplishment. You can share your achievements and progress through social media, showcasing to friends and the community your progress in enhancing your memory."
  },
  {
    id: "4",
    image: localImages().logo_text,
    title: `Are you ready for your own \n memory journey?`
  }
];

export const ListItemCardGameData: ItemCardGameDTO[] = [
  {
    id: "1",
    imgBg: localImages().img_bg_flipcard,
    gameName: "Flip Card Challenge",
    description:
      "Experience the thrill of our Flip Card game! Memorize cards and seek out matching pairs, enhancing both your visual and short-term memory skills.",
    type: ["Visual memory", "Short-term memory"],
    bgColor: orangeFC902A
  },
  {
    id: "2",
    imgBg: localImages().img_bg_music_password,
    gameName: "Music Password",
    description:
      "Players will listen to a piece of music provided by the host to decipher the password for the house, enhancing their auditory memory skills.",
    type: ["Auditory memory", "Interactive memory", "Sensory memory"],
    bgColor: yellowF5AB2B
  },
  {
    id: "3",
    imgBg: localImages().img_bg_anonymous,
    gameName: "Find The Anonymous",
    description:
      "The player's mission is to identify the 'anonymous' within a group of people after being provided with a description of that person.",
    type: ["Short-term memory", "Associative memory"],
    bgColor: redEA5455
  },
  {
    id: "4",
    imgBg: localImages().img_bg_walkthrough,
    gameName: "Images Walkthrough",
    description:
      "Experience the thrill of our Flip Card game! Memorize cards and seek out matching pairs, enhancing both your visual and short-term memory skills.",
    type: ["Sequential memory", "Short-term memory"],
    bgColor: blue557DB0
  },
  {
    id: "5",
    imgBg: localImages().img_bg_room_party,
    gameName: "Room Party",
    description:
      "Create a common playroom for friends to improve memory together.",
    bgColor: blue5595B0
  }
];

export const devicesSimulator: DevicesDTO = {
  Iphone15And15Pro: {
    width: 393,
    height: 852
  },
  Iphone15ProMax: {
    width: 430,
    height: 932
  }
};
