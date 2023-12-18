import React from 'react'
import { Button } from '../components/Button'
import { Section } from '../components/Section'
import { Icon } from '../components/Icon'
import styles from './Home.module.css'

export function Home() {
  return (
    <div className={styles.banner}>
      <Section>
        <h2>
          Its raining cats and dogs!
        </h2>
        <p style={{ wordWrap: 'break-word' }}>
          Place bets to win sol and earn points. Each bet placed adds liquidity to the LP pool. Tokens will be airdropped based on points.
        </p>
        <div style={{ display: 'flex', gap: '10px' }}>
          <Button
            as="a"
            color="white"
            href="https://gamba.so"
            target="_blank"
            icon={<Icon.ExternalLink />}
          >
            Play
          </Button>
        </div>
      </Section>
    </div>
  )
}
