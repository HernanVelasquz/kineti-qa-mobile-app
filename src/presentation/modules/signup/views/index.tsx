import { FC } from "react";
import { RegistrationStepTemplate } from "../../../ui/templates/RegistrationStepTemplate";
import { RegistrationHeader } from "../../../ui/organisms/RegistrationHeader";
import { HeaderTitle } from "../../../ui/molecules/HeaderTitle";
import { PersonalProfileForm } from "../../../ui/organisms/PersonalProfileForm";
import { useTranslation } from "react-i18next";

export const PersonalProfileView: FC = () => {
  const { t } = useTranslation();

  const handleBack = () => {
    // Navigation go back logic here
    console.log("Go back");
  };

  const handleSubmit = () => {
    // ViewModel integration here
    console.log("Submit profile");
  };

  return (
    <RegistrationStepTemplate
      header={
        <RegistrationHeader
          step={1}
          totalSteps={3}
          onBack={handleBack}
        />
      }
      title={
        <HeaderTitle
          title={t("personalProfile.header_title", "Perfil Personal")}
          subtitle={t("personalProfile.header_subtitle", "Cuéntanos un poco sobre ti para empezar.")}
        />
      }
    >
      <PersonalProfileForm onSubmit={handleSubmit} />
    </RegistrationStepTemplate>
  );
};

export default PersonalProfileView;
