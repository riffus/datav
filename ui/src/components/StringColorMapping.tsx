import { Box, Button, Flex, HStack, Text, VStack } from "@chakra-ui/react"
import React, { useState } from "react"
import { palettes } from "utils/colors"
import { isEmpty } from "utils/validate"
import { ColorPicker } from "./ColorPicker"
import { EditorInputItem } from "./editor/EditorItem"
import { FaTimes } from "react-icons/fa"
import { cloneDeep } from "lodash"

const StringColorMappingEditor = (props) => {
    const [value, setValue] = useState(props.value)
    if (isEmpty(value)) {
        const v = []
        // add base threshold
        const color = 'inherit'
        v.push({
            color,
            value: null,
        })
        setValue(v)
        return
    }

    const addItem = () => {
        const color = palettes[value.length % palettes.length]
        value.unshift({
            value: "",
            color: color
        })
        changeValue(value)
    }

    const removeItem = (i) => {
        value.splice(i, 1)
        changeValue(value)
    }



    const changeValue = v => {
        const v1 = cloneDeep(v)

        setValue(v1)
        props.onChange(v1)
    }

    return (<Box>
        <Button onClick={addItem} width="100%" size="sm" colorScheme="gray">Add color mapping</Button>
        <Text fontSize="0.8rem" textStyle="annotation" mt="2">Render string with specify color</Text>
        <VStack alignItems="left" mt="2">
            {value?.map((mapping, i) =>
                <Flex key={mapping.color + mapping.value + i} justifyContent="space-between" alignItems="center">
                    <HStack spacing={1}>
                        <ColorPicker color={mapping.color} onChange={v => {
                            value[i].color = v
                            changeValue(value)
                        }} circlePicker />
                        {mapping.value !== null && <EditorInputItem value={mapping.value} onChange={v => {
                            value[i].value = v
                            changeValue(value)
                        }} placeholder="input a string value"/>}
                        {mapping.value === null && <Text pl="6px" fontSize="0.9rem">Base</Text>}
                    </HStack>
                    {mapping.value !== null && <FaTimes opacity={0.6} fontSize="0.8rem" cursor="pointer" onClick={() => removeItem(i)} />}
                </Flex>)}
        </VStack>
    </Box>)
}

export default StringColorMappingEditor

export const getStringColorMapping = (str: string, mapping) => {
    for (const m of mapping) {
        if (m.value === null) {
            return m.color 
        }

        if (str?.match(m.value)) {
            return m.color
        }
    }
}