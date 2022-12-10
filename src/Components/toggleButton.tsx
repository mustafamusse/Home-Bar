import { useState } from 'react'
import { Switch } from '@headlessui/react'



export default function ToggleButton() {

  const [enabled, setEnabled] = useState(false);

  return (
    
    <Switch.Group as="div" className="items-center flex flex-col align-items-center mx-5">

      <Switch
        checked={enabled}
        onChange={function toggleEnabled(){
          setEnabled((oldValue) => !oldValue)
          }}
        className={enabled ? 'bg-light-green relative inline-flex flex-shrink-0 h-6 w-11 border-2 border-transparent rounded-full cursor-pointer transition-colors ease-in-out duration-200' : 'bg-gray-500 relative inline-flex flex-shrink-0 h-6 w-11 border-2 border-transparent rounded-full cursor-pointer transition-colors ease-in-out duration-200'
        }
      >
        <span
          aria-hidden="true"
          className={
            enabled ? 'translate-x-5 pointer-events-none inline-block h-5 w-5 rounded-full bg-white shadow transform ring-0 transition ease-in-out duration-200' : 'translate-x-0 pointer-events-none inline-block h-5 w-5 rounded-full bg-white shadow transform ring-0 transition ease-in-out duration-200'
          }
        />
      </Switch>
      
    </Switch.Group>
  )
}