import { useState } from 'react'
import {Box, Button, Flex, HStack, Input, Stack, Text, Textarea, Heading, Link} from '@chakra-ui/react'
import ListItem from './components/ListItem'
import { AddIcon } from '@chakra-ui/icons'
import parse from 'json-templates'
import * as wasm from 'wasm-pdf'

function App() {
  const [template, setTemplate] = useState('')
  const [data, setData] = useState<{[key: string]: any}>({})

  const handleTemplateChange = (e: any) => {
    let inputValue = e.target.value
    setTemplate(inputValue)
    const jsonTemplate = parse(template);
    setData(jsonTemplate.parameters.reduce((prev: any, curr) => {
      prev[curr.key] = curr.defaultValue ?? ''
      return prev
    }, {}))
  }

  const handleValueChange = (key: string, value: string) => {
    const newData = {...data}
    newData[key] = value
    setData(newData)
  }

  function generatePDF() {
    if(template) {
      const jsonTemplate = parse(template);
      const pdfTemplate = JSON.parse(jsonTemplate(data));
      wasm.run(pdfTemplate)
    }
  }

  return (
    <Flex w="100vw" h="100vh" justifyContent="center" alignItems="center">
      <Stack w="50%">
        <Heading>WASM PDF Experiment</Heading>
        <Text>
          Test your <Link href='https://github.com/jussiniinikoski/wasm-pdf'>wasm-pdf template</Link> by pasting your template in the text area.
        </Text>
        <Text>JSON Template</Text>
        <Textarea
          value={template}
          onChange={handleTemplateChange}
          placeholder='Add you json template'
          size="lg"
          />
          <Text>Data</Text>
          {
            Object.entries(data).map(([key, value]) =>
            <ListItem key={`key-${key}`} keyValue={key as string} value={value as string} onValueChanged={handleValueChange}/>
            )
          }
          <Button disabled={!template} onClick={generatePDF}>Generate PDF</Button>
      </Stack>
    </Flex>
  )
}

export default App
