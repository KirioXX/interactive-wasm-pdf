import { HStack, IconButton, Input, Text } from "@chakra-ui/react";
import {DeleteIcon} from '@chakra-ui/icons'

export default function ListItem({keyValue, value, onValueChanged}: {keyValue: string, value: string, onValueChanged: (key: string, value: string) => void}) {
  return (
    <HStack spacing={5}>
      <Text>{keyValue}: </Text><Input value={value} onChange={(e) =>
        onValueChanged(keyValue, e.target.value)
      }/>
    </HStack>
  )
}
