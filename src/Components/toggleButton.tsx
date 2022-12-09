import { useState } from 'react'
import { Switch } from '@headlessui/react'

function classNames({...classes}) {
  return classes.filter(Boolean).join(' ')
}

export default function ToggleButton({enabled} : {enabled:any}) {

  return (
    
    <Switch.Group as="div" className="items-center flex flex-col align-items-center mx-5">

      
      <Switch
        checked={enabled}
        className={enabled ? 'bg-light-green relative inline-flex flex-shrink-0 h-6 w-11 border-2 border-transparent rounded-full cursor-pointer transition-colors ease-in-out duration-200' : 'bg-gray-500'
        }
      >
        <span
          aria-hidden="true"
          className={
            enabled ? 'translate-x-5 pointer-events-none inline-block h-5 w-5 rounded-full bg-white shadow transform ring-0 transition ease-in-out duration-200' : 'translate-x-0'
          }
        />
      </Switch>
      
    </Switch.Group>
  )
}