import React from 'react'
import { Text, Group, ThemeIcon } from '@mantine/core'
import { Server } from 'tabler-icons-react'

const Logo = () => {
  return (
    <Group>
      <ThemeIcon size="lg" variant="gradient" gradient={{ from: 'pink', to: 'purple' }}>
        <Server size={20} />
      </ThemeIcon>
      <Text
        variant="gradient"
        gradient={{ from: 'purple', to: 'pink', deg: 45 }}
        size="xl"
        weight={700}
      >
        Server Hosting Reviews
      </Text>
    </Group>
    
  )
}

export default Logo