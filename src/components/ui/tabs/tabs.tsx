import { ComponentPropsWithoutRef, ElementRef, forwardRef } from 'react'

import * as RadixTabs from '@radix-ui/react-tabs'

import s from './tabs.module.scss'

type TabType = {
  title: string
  value: string
}

export type TabsProps = {
  disabled?: boolean
  fullWidth?: boolean
  label?: string
  tabs: TabType[]
} & ComponentPropsWithoutRef<typeof RadixTabs.Root>

export const Tabs = forwardRef<ElementRef<typeof RadixTabs.Root>, TabsProps>(
  ({ children, disabled, label, tabs, ...rest }, ref) => {
    return (
      <RadixTabs.Root className={s.root} ref={ref} {...rest}>
        <RadixTabs.List className={s.list}>
          <div>
            {tabs.map(tab => (
              <RadixTabs.Trigger className={s.trigger} disabled={disabled} value={tab.value}>
                {tab.title}
              </RadixTabs.Trigger>
            ))}
          </div>
        </RadixTabs.List>
        {children}
      </RadixTabs.Root>
    )
  }
)

export const TabsContent = forwardRef<
  ElementRef<typeof RadixTabs.Content>,
  ComponentPropsWithoutRef<typeof RadixTabs.Content>
>(({ children, value, ...rest }, ref) => {
  return (
    <RadixTabs.Content ref={ref} value={value} {...rest}>
      {children}
    </RadixTabs.Content>
  )
})
