import React from "react";
import { VStack, Text } from "@chakra-ui/react";
import { Icon } from "@iconify/react";

interface Props {
  name: string;
  icon: string;
}

const SkillIcon = ({ name, icon }: Props) => {
  return (
    <VStack>
      <Icon icon={icon} inline={true} height="3em" />
      <Text fontSize={{ base: "sm", sm: "md", md: "lg" }} fontWeight="medium">
        {name}
      </Text>
    </VStack>
  );
};

export default SkillIcon;
