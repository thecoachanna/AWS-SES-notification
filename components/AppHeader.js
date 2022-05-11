import { Heading, Text } from '@chakra-ui/react'

export const AppHeader = () => {
  return (
    <>
      <Heading
        fontWeight={600}
        fontSize={{ base: '2xl', sm: '4xl', md: '6xl' }}
        lineHeight={'110%'}>
        AWS SES Send Notification <br />
      </Heading>
      <Text color={'gray.500'}>To send notification click below button</Text>
    </>
  )
}
