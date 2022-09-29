// @unocss-include
import { DefineComponent } from 'vue'
import { defineComponent } from 'vue'
import { Props } from './types'
import './index.css'
export const gitFork = defineComponent({
  name: 'Component',
  props: {
    link: {
      type: String,
      default: '',
    },
    position: {
      type: String,
      default: 'right'
    },
    content: {
      type: String,
      default: 'Fork me'
    },
    color: {
      type: String,
      default: '#151513'
    },
    type: {
      type: String,
      default: 'corners'
    }
  },
  setup(props: any) {
    return props.type === 'corners'
      ? cornersType(props)
      : props.type === 'ribbons'
        ? ribbonsType(props)
        : trapeziumType(props)
  },
}) as DefineComponent<Props>


function ribbonsType(props: Props) {
  return () => props.position === 'right' ? (
    <a
      id="gitFork"
      href={props.link}
      onMouseover={e => mouseover(e, 'right')}
      onMouseout={e => mouseout(e, 'right')}
      class="fixed"
      style={{
        backgroundColor: props.color,
        top: '30px',
        right: '-103px',
        margin: '0',
        fontFamily: 'Helvetica,Arial,sans-serif',
        fontSize: '24px',
        padding: '10px 15px',
        borderRadius: '0 2px 2px 0',
        transition: 'right .4s ease',
        textDecoration: 'none',
        color: '#fff'
      }}

    >
      <svg width="41" height="41" viewBox="0 0 41 41" fill="#fff" style="vertical-align:middle;margin-right:15px;" class="pointer-events-none">
        <path d="M0 20.48c0 9.04 5.742 16.72 13.672 19.44 1.016.2 1.367-.44 1.367-1 0-.48 0-2.12-.039-3.8-5.547 1.24-6.719-2.4-6.719-2.4-.898-2.36-2.227-3-2.227-3-1.836-1.28.156-1.24.156-1.24 1.992.16 3.047 2.12 3.047 2.12 1.797 3.12 4.688 2.24 5.82 1.72.195-1.32.703-2.24 1.289-2.72-4.453-.52-9.102-2.28-9.102-10.12 0-2.24.781-4.08 2.07-5.48-.195-.52-.898-2.6.195-5.44 0 0 1.68-.56 5.508 2.12 1.602-.44 3.32-.68 5-.68 1.719 0 3.398.24 5 .68 3.828-2.64 5.508-2.12 5.508-2.12 1.094 2.84.391 4.92.195 5.44 1.289 1.44 2.07 3.24 2.07 5.48 0 7.88-4.688 9.6-9.141 10.12.703.64 1.367 1.88 1.367 3.8 0 2.72-.039 4.96-.039 5.64 0 .56.352 1.2 1.367 1 7.93-2.72 13.672-10.4 13.672-19.44 0-11.32-8.984-20.6-20.039-20.6-11.055 0-20 9.16-20 20.48z" />
      </svg>
      <span class="pointer-events-none">{props.content}</span>
    </a>
  )
    : (
      <a
        id="gitFork"
        href={props.link}
        onMouseover={e => mouseover(e, 'left')}
        onMouseout={e => mouseout(e, 'left')}
        class="fixed"
        style={{
          backgroundColor: props.color,
          top: '30px',
          left: '-103px',
          margin: '0',
          fontFamily: 'Helvetica,Arial,sans-serif',
          fontSize: '24px',
          padding: '10px 15px',
          borderRadius: '0 2px 2px 0',
          transition: 'left .4s ease',
          textDecoration: 'none',
          color: '#fff'
        }}
      >
        <span class="pointer-events-none">Fork me</span>
        <svg class="pointer-events-none" width="41" height="41" viewBox="0 0 41 41" fill="#fff" style="vertical-align:middle;margin-left:15px;">
          <path d="M0 20.48c0 9.04 5.742 16.72 13.672 19.44 1.016.2 1.367-.44 1.367-1 0-.48 0-2.12-.039-3.8-5.547 1.24-6.719-2.4-6.719-2.4-.898-2.36-2.227-3-2.227-3-1.836-1.28.156-1.24.156-1.24 1.992.16 3.047 2.12 3.047 2.12 1.797 3.12 4.688 2.24 5.82 1.72.195-1.32.703-2.24 1.289-2.72-4.453-.52-9.102-2.28-9.102-10.12 0-2.24.781-4.08 2.07-5.48-.195-.52-.898-2.6.195-5.44 0 0 1.68-.56 5.508 2.12 1.602-.44 3.32-.68 5-.68 1.719 0 3.398.24 5 .68 3.828-2.64 5.508-2.12 5.508-2.12 1.094 2.84.391 4.92.195 5.44 1.289 1.44 2.07 3.24 2.07 5.48 0 7.88-4.688 9.6-9.141 10.12.703.64 1.367 1.88 1.367 3.8 0 2.72-.039 4.96-.039 5.64 0 .56.352 1.2 1.367 1 7.93-2.72 13.672-10.4 13.672-19.44 0-11.32-8.984-20.6-20.039-20.6-11.055 0-20 9.16-20 20.48z" />
        </svg>
      </a>
    )

  function mouseover(e: MouseEvent, type: 'left' | 'right') {
    const el = e.target as HTMLElement
    if (el)
      el.style[type] = '0'

  }
  function mouseout(e: MouseEvent, type: 'left' | 'right') {
    const el = e.target as HTMLElement
    if (el)
      el.style[type] = '-103px'
  }
}

function cornersType(props: Props) {
  return () => props.position === 'right'
    ? (
      <a
        id="gitFork"
        class="fixed top-0 right-0 border-0 z-10 github-corner"
        href={props.link} aria-label="View source on GitHub">
        <svg width="80" height="80" viewBox="0 0 250 250"
          style={{
            fill: props.color,
            color: '#fff',
          }}
          aria-hidden="true">
          <path d="M0,0 L115,115 L130,115 L142,142 L250,250 L250,0 Z"></path>
          <path d="M128.3,109.0 C113.8,99.7 119.0,89.6 119.0,89.6 C122.0,82.7 120.5,78.6 120.5,78.6 C119.2,72.0 123.4,76.3 123.4,76.3 C127.3,80.9 125.5,87.3 125.5,87.3 C122.9,97.6 130.6,101.9 134.4,103.2" fill="currentColor" style="transform-origin: 130px 106px;" class="octo-arm">
          </path>
          <path d="M115.0,115.0 C114.9,115.1 118.7,116.5 119.8,115.4 L133.7,101.6 C136.9,99.2 139.9,98.4 142.2,98.6 C133.8,88.0 127.5,74.4 143.8,58.0 C148.5,53.4 154.0,51.2 159.7,51.0 C160.3,49.4 163.2,43.6 171.4,40.1 C171.4,40.1 176.1,42.5 178.8,56.2 C183.1,58.6 187.2,61.8 190.9,65.4 C194.5,69.0 197.7,73.2 200.1,77.6 C213.8,80.2 216.3,84.9 216.3,84.9 C212.7,93.1 206.9,96.0 205.4,96.6 C205.1,102.4 203.0,107.8 198.3,112.5 C181.9,128.9 168.3,122.5 157.7,114.1 C157.9,116.9 156.7,120.9 152.7,124.9 L141.0,136.5 C139.8,137.7 141.6,141.9 141.8,141.8 Z" fill="currentColor" class="octo-body">
          </path>
        </svg>
      </a>
    )
    : (
      <a
        id="gitFork"
        class="fixed top-0 right-0 border-0 z-10 github-corner"
        href={props.link} aria-label="View source on GitHub">
        <svg width="80" height="80" viewBox="0 0 250 250"
          style={{
            fill: props.color,
            color: '#fff',
            transform: 'scale(-1, 1)'
          }}
          aria-hidden="true">
          <path d="M0,0 L115,115 L130,115 L142,142 L250,250 L250,0 Z">
          </path>
          <path d="M128.3,109.0 C113.8,99.7 119.0,89.6 119.0,89.6 C122.0,82.7 120.5,78.6 120.5,78.6 C119.2,72.0 123.4,76.3 123.4,76.3 C127.3,80.9 125.5,87.3 125.5,87.3 C122.9,97.6 130.6,101.9 134.4,103.2" fill="currentColor" style="transform-origin: 130px 106px;" class="octo-arm"></path><path d="M115.0,115.0 C114.9,115.1 118.7,116.5 119.8,115.4 L133.7,101.6 C136.9,99.2 139.9,98.4 142.2,98.6 C133.8,88.0 127.5,74.4 143.8,58.0 C148.5,53.4 154.0,51.2 159.7,51.0 C160.3,49.4 163.2,43.6 171.4,40.1 C171.4,40.1 176.1,42.5 178.8,56.2 C183.1,58.6 187.2,61.8 190.9,65.4 C194.5,69.0 197.7,73.2 200.1,77.6 C213.8,80.2 216.3,84.9 216.3,84.9 C212.7,93.1 206.9,96.0 205.4,96.6 C205.1,102.4 203.0,107.8 198.3,112.5 C181.9,128.9 168.3,122.5 157.7,114.1 C157.9,116.9 156.7,120.9 152.7,124.9 L141.0,136.5 C139.8,137.7 141.6,141.9 141.8,141.8 Z" fill="currentColor" class="octo-body">
          </path>
        </svg>
      </a >
    )
}

function trapeziumType(props: Props) {
  return () => props.position === 'right'
    ? (
      <a href={props.link} class="fixed top-0 right-0 w-40 h-40 bg-transparent">
        <div
          class=" h-10 flex items-center justify-center text-5 rotate-y-10 box-border py1 text-white font-sans "
          style={{
            width: '150%',
            transform: "translate3d(-10%, 120%, 0) rotate(45deg)",
            '-webkit-font-smoothing': "antialiased",
            '-moz-osx-font-smoothing': "grayscale",
            textAlign: 'center'
          }}        >
          <div style={{
            width: '150%',
            border: '0.5rem double white',
            background: props.color,
          }} >Fork me on GitHub</div>
        </div>
      </a>
    )
    : (
      <a href={props.link} class="fixed top-0 left-0 w-40 h-40 bg-transparent">
        <div
          class="h-10 flex items-center  justify-center text-5 rotate-y-10 box-border py1 text-white font-sans"

          style={{
            width: '150%',
            transform: "translate3d(-21%, 117%, 0) rotate(-45deg)",
            '-webkit-font-smoothing': "antialiased",
            '-moz-osx-font-smoothing': "grayscale"
          }}
        >
          <div style={{
            width: '150%',
            border: '0.5rem double white',
            background: props.color
          }} >Fork me on GitHub</div>
        </div>
      </a>
    )
}

