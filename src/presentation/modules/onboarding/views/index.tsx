import { FC } from "react";

import OnboardingTemplate from "@/presentation/ui/templates/OnboardingTemplate";
import LoginBottomSheet from "@/presentation/ui/organisms/LoginBottomSheet";
import useOnboardingViewModel from "../viewModels/useOnboardingViewModel";
import OnboardingContentCard from "@/presentation/ui/organisms/OnboardingContentCard";

export const OnBoardingScreen: FC = () => {
  const viewModel = useOnboardingViewModel();

  return (
    <>
      <OnboardingTemplate
        backgroundImageSource={require("@/presentation/assets/img/onboarding.png")}
      >
        <OnboardingContentCard
          onStartPress={viewModel.handleStart}
          onGooglePress={viewModel.handleGoogleSignIn}
          onLoginLinkPress={viewModel.openLoginSheet}
        />
      </OnboardingTemplate>

      <LoginBottomSheet
        isVisible={viewModel.isBottomSheetVisible}
        onClose={viewModel.closeLoginSheet}
        onLoginSubmit={viewModel.handleLoginSubmit}
      />
    </>
  );
};

export default OnBoardingScreen;
