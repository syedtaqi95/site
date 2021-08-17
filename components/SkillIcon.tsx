import React from "react";
import { VStack, Text } from "@chakra-ui/react";
import { Icon } from "@iconify/react";

interface Props {
  name: string;
  icon: string;
}

const SkillIcon = ({ name, icon }: Props) => {
  return (
    <VStack fontSize={{ base: "xs", sm: "md", md: "lg" }} fontWeight="medium"> 
      <Icon icon={icon} inline={true} height="3em" />
      <Text >
        {name}
      </Text>
    </VStack>
  );
};

export default SkillIcon;
