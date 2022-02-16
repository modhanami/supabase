import { FC } from 'react'
import Link from 'next/link'
import * as Tooltip from '@radix-ui/react-tooltip'

import { Route } from 'components/ui/ui.types'

interface Props {
  route: Route
  isActive?: boolean
}

const NavigationIconButton: FC<Props> = ({ route, isActive = false }) => {
  return (
    <Tooltip.Root delayDuration={0}>
      <Tooltip.Trigger>
        <Link href={route.link}>
          <a
            className={[
              'transition-all',
              'flex items-center justify-center h-10 w-10 rounded', // Layout
              'bg-scale-200 hover:bg-scale-500', // Light mode
              'text-scale-900 hover:text-scale-1200 ', // Dark mode
              `${isActive ? 'bg-scale-500 shadow-sm hover:bg-scale-1200 text-scale-1200' : ''}`,
            ].join(' ')}
          >
            {route.icon}
          </a>
        </Link>
      </Tooltip.Trigger>
      <Tooltip.Content side="right">
        <Tooltip.Arrow className="radix-tooltip-arrow" />
        <div
          className={[
            'bg-scale-100 shadow py-1 px-2 rounded leading-none', // background
            'border border-scale-200 ', //border
          ].join(' ')}
        >
          <span className="text-scale-1200 text-xs">{route.label}</span>
        </div>
      </Tooltip.Content>
    </Tooltip.Root>
  )
}

export default NavigationIconButton
