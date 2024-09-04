import { localImages } from "@assets/localImages";
import { DevicesDTO, OnboardingDataDTO } from "./DTOs";

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
