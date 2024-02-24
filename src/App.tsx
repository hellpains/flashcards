import { Tabs, TabsContent } from '@/components/ui'

export function App() {
  return (
    <div
      style={{
        // backgroundColor: '#171717',
        height: '600px',
        margin: '300px',
        padding: '50px',
        width: '600px',
      }}
    >
      <Tabs
        defaultValue={'2'}
        label={'Tab Switcher'}
        tabs={[
          { title: 'Switcher', value: '1' },
          { title: 'Switcher', value: '2' },
          { title: 'Switcher', value: '3' },
          { title: 'Switcher', value: '4' },
        ]}
      >
        <TabsContent value={'1'}>Switcher1</TabsContent>
        <TabsContent value={'2'}>Switcher2</TabsContent>
        <TabsContent value={'3'}>Switcher3</TabsContent>
        <TabsContent value={'4'}>Switcher4</TabsContent>
      </Tabs>
    </div>
  )
}
