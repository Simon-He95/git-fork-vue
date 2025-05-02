// @unocss-include
import type { DefineComponent, PropType } from 'vue'
import type { Props } from './types'

import { defineComponent } from 'vue'
import './index.css'
import './gitFork-uno.css'

export const gitForkVue = defineComponent({
  name: 'Component',
  props: {
    link: {
      type: String,
      default: '',
    },
    position: {
      type: String as PropType<'left' | 'right'>,
      default: 'right',
    },
    content: {
      type: String,
      default: 'Fork me',
    },
    color: {
      type: String,
      default: '#151513',
    },
    type: {
      type: String as PropType<'corners' | 'ribbons' | 'trapezium' | 'banner' | 'circle' | 'badge' | 'tab' | 'sticky' | 'wave'>,
      default: 'corners',
    },
    top: {
      type: [Number, String],
      default: '',
    },
    bottom: {
      type: [Number, String],
      default: '',
    },
  },
  setup(props: any) {
    return props.type === 'corners'
      ? cornersType(props)
      : props.type === 'ribbons'
        ? ribbonsType(props)
        : props.type === 'banner'
          ? bannerType(props)
          : props.type === 'circle'
            ? circleType(props)
            : props.type === 'trapezium'
              ? trapeziumType(props)
              : props.type === 'badge'
                ? badgeType(props)
                : props.type === 'tab'
                  ? tabType(props)
                  : props.type === 'sticky'
                    ? stickyType(props)
                    : props.type === 'wave'
                      ? waveType(props)
                      : cornersType(props)
  },
}) as DefineComponent<Props>

function ribbonsType(props: Props) {
  return () => props.position === 'right'
    ? (
        <a
          id="gitFork"
          href={props.link}
          onMouseover={e => mouseover(e, 'right')}
          onMouseout={e => mouseout(e, 'right')}
          class="fixed z-[9999] flex items-center decoration-none whitespace-nowrap text-white m-0"
          style={{
            backgroundColor: props.color,
            top: `${String(props.top)?.replace('px', '')}px`,
            bottom: `${String(props.bottom)?.replace('px', '')}px`,
            left: '100%',
            transform: 'translateX(-58px)',
            fontFamily: 'Helvetica,Arial,sans-serif',
            fontSize: '24px',
            padding: '10px 15px',
            borderRadius: '0 2px 2px 0',
            transition: 'transform .4s ease',
          }}

        >
          <svg width="41" height="41" viewBox="0 0 41 41" fill="#fff" style="vertical-align:middle;margin-right:15px;" class="pointer-events-none">
            <path d="M0 20.48c0 9.04 5.742 16.72 13.672 19.44 1.016.2 1.367-.44 1.367-1 0-.48 0-2.12-.039-3.8-5.547 1.24-6.719-2.4-6.719-2.4-.898-2.36-2.227-3-2.227-3-1.836-1.28.156-1.24.156-1.24 1.992.16 3.047 2.12 3.047 2.12 1.797 3.12 4.688 2.24 5.82 1.72.195-1.32.703-2.24 1.289-2.72-4.453-.52-9.102-2.28-9.102-10.12 0-2.24.781-4.08 2.07-5.48-.195-.52-.898-2.6.195-5.44 0 0 1.68-.56 5.508 2.12 1.602-.44 3.32-.68 5-.68 1.719 0 3.398.24 5 .68 3.828-2.64 5.508-2.12 5.508-2.12 1.094 2.84.391 4.92.195 5.44 1.289 1.44 2.07 3.24 2.07 5.48 0 7.88-4.688 9.6-9.141 10.12.703.64 1.367 1.88 1.367 3.8 0 2.72-.039 4.96-.039 5.64 0 .56.352 1.2 1.367 1 7.93-2.72 13.672-10.4 13.672-19.44 0-11.32-8.984-20.6-20.039-20.6-11.055 0-20 9.16-20 20.48z" />
          </svg>
          <span class="pointer-events-none">{props.content || 'Fork me'}</span>
        </a>
      )
    : (
        <a
          id="gitFork"
          href={props.link}
          onMouseover={e => mouseover(e, 'left')}
          onMouseout={e => mouseout(e, 'left')}
          class="fixed z-[9999] flex items-center decoration-none m-0 l-0 text-white whitespace-nowrap"
          style={{
            backgroundColor: props.color,
            top: `${String(props.top)?.replace('px', '')}px`,
            bottom: `${String(props.bottom)?.replace('px', '')}px`,
            transform: 'translateX(calc(-100% + 58px))',
            fontFamily: 'Helvetica,Arial,sans-serif',
            fontSize: '24px',
            padding: '10px 15px',
            borderRadius: '0 2px 2px 0',
            transition: 'transform .4s ease',
          }}
        >
          <span class="pointer-events-none">{props.content || 'Fork me'}</span>
          <svg class="pointer-events-none" width="41" height="41" viewBox="0 0 41 41" fill="#fff" style="vertical-align:middle;margin-left:15px;">
            <path d="M0 20.48c0 9.04 5.742 16.72 13.672 19.44 1.016.2 1.367-.44 1.367-1 0-.48 0-2.12-.039-3.8-5.547 1.24-6.719-2.4-6.719-2.4-.898-2.36-2.227-3-2.227-3-1.836-1.28.156-1.24.156-1.24 1.992.16 3.047 2.12 3.047 2.12 1.797 3.12 4.688 2.24 5.82 1.72.195-1.32.703-2.24 1.289-2.72-4.453-.52-9.102-2.28-9.102-10.12 0-2.24.781-4.08 2.07-5.48-.195-.52-.898-2.6.195-5.44 0 0 1.68-.56 5.508 2.12 1.602-.44 3.32-.68 5-.68 1.719 0 3.398.24 5 .68 3.828-2.64 5.508-2.12 5.508-2.12 1.094 2.84.391 4.92.195 5.44 1.289 1.44 2.07 3.24 2.07 5.48 0 7.88-4.688 9.6-9.141 10.12.703.64 1.367 1.88 1.367 3.8 0 2.72-.039 4.96-.039 5.64 0 .56.352 1.2 1.367 1 7.93-2.72 13.672-10.4 13.672-19.44 0-11.32-8.984-20.6-20.039-20.6-11.055 0-20 9.16-20 20.48z" />
          </svg>
        </a>
      )

  function mouseover(e: MouseEvent, type: 'left' | 'right') {
    const el = e.target as HTMLElement
    if (!el)
      return

    if (type === 'right')
      el.style.transform = 'translateX(-100%)'
    else
      el.style.transform = 'translateX(0)'
  }
  function mouseout(e: MouseEvent, type: 'left' | 'right') {
    const el = e.target as HTMLElement
    if (!el)
      return

    if (type === 'right')
      el.style.transform = 'translateX(-58px)'
    else
      el.style.transform = 'translateX(calc(-100% + 58px))'
  }
}

function cornersType(props: Props): any {
  return () => props.position === 'right'
    ? (
        <a
          id="gitFork"
          class="fixed top-0 z-[9999] right-0 border-0 z-[9999] github-corner"
          href={props.link}
          aria-label="View source on GitHub"
        >
          <svg
            width="80"
            height="80"
            viewBox="0 0 250 250"
            class="text-white"
            style={{
              fill: props.color,
            }}
            aria-hidden="true"
          >
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
          class="fixed top-0 z-[9999] left-0 border-0 github-corner"
          href={props.link}
          aria-label="View source on GitHub"
        >
          <svg
            width="80"
            height="80"
            viewBox="0 0 250 250"
            class="text-white"
            style={{
              fill: props.color,
              transform: 'scale(-1, 1)',
            }}
            aria-hidden="true"
          >
            <path d="M0,0 L115,115 L130,115 L142,142 L250,250 L250,0 Z">
            </path>
            <path d="M128.3,109.0 C113.8,99.7 119.0,89.6 119.0,89.6 C122.0,82.7 120.5,78.6 120.5,78.6 C119.2,72.0 123.4,76.3 123.4,76.3 C127.3,80.9 125.5,87.3 125.5,87.3 C122.9,97.6 130.6,101.9 134.4,103.2" fill="currentColor" style="transform-origin: 130px 106px;" class="octo-arm"></path>
            <path d="M115.0,115.0 C114.9,115.1 118.7,116.5 119.8,115.4 L133.7,101.6 C136.9,99.2 139.9,98.4 142.2,98.6 C133.8,88.0 127.5,74.4 143.8,58.0 C148.5,53.4 154.0,51.2 159.7,51.0 C160.3,49.4 163.2,43.6 171.4,40.1 C171.4,40.1 176.1,42.5 178.8,56.2 C183.1,58.6 187.2,61.8 190.9,65.4 C194.5,69.0 197.7,73.2 200.1,77.6 C213.8,80.2 216.3,84.9 216.3,84.9 C212.7,93.1 206.9,96.0 205.4,96.6 C205.1,102.4 203.0,107.8 198.3,112.5 C181.9,128.9 168.3,122.5 157.7,114.1 C157.9,116.9 156.7,120.9 152.7,124.9 L141.0,136.5 C139.8,137.7 141.6,141.9 141.8,141.8 Z" fill="currentColor" class="octo-body">
            </path>
          </svg>
        </a>
      )
}

function trapeziumType(props: Props): any {
  return () => props.position === 'right'
    ? (
        <a href={props.link} class="fixed z-[9999] top-0 right-0 w-40 h-40 bg-transparent pointer-events-none">
          <div
            class="w-[150%] text-center hover:text-shadow-md hover:text-shadow-color-light h-10 flex items-center justify-center text-5 rotate-y-10 box-border py1 text-white font-sans transition-all-200 pointer-events-all"
            style={{
              'transform': 'translate3d(-10%, 120%, 0) rotate(45deg)',
              '-webkit-font-smoothing': 'antialiased',
              '-moz-osx-font-smoothing': 'grayscale',
            }}
          >
            <div
              class="w-[150%] pointer-events-none"
              style={{
                border: '0.5rem double white',
                background: props.color,
              }}
            >
              {props.content || 'Fork me on GitHub'}
            </div>
          </div>
        </a>
      )
    : (
        <a href={props.link} class="fixed top-0 z-[9999] left-0 w-40 h-40 bg-transparent text-center">
          <div
            class="hover:text-shadow-color-light hover:text-shadow-md h-10 flex items-center  justify-center text-5 rotate-y-10 box-border py1 text-white font-sans transition-all-200 w-[150%]"
            style={{
              'transform': 'translate3d(-21%, 117%, 0) rotate(-45deg)',
              '-webkit-font-smoothing': 'antialiased',
              '-moz-osx-font-smoothing': 'grayscale',
            }}
          >
            <div
              class="w-[150%]"
              style={{
                border: '0.5rem double white',
                background: props.color,
              }}
            >
              {props.content || 'Fork me on GitHub'}
            </div>
          </div>
        </a>
      )
}

function bannerType(props: Props): any {
  return () => (
    <a
      id="gitFork"
      href={props.link}
      class="fixed z-[9999] text-white left-0 right-0 top-0 flex justify-center items-center h-[48px] text-[20px]"
      style={{
        backgroundColor: props.color,
      }}
    >
      <svg width="28" height="28" viewBox="0 0 41 41" fill="#fff" style="vertical-align:middle;margin-right:10px;">
        <path d="M0 20.48c0 9.04 5.742 16.72 13.672 19.44 1.016.2 1.367-.44 1.367-1 0-.48 0-2.12-.039-3.8-5.547 1.24-6.719-2.4-6.719-2.4-.898-2.36-2.227-3-2.227-3-1.836-1.28.156-1.24.156-1.24 1.992.16 3.047 2.12 3.047 2.12 1.797 3.12 4.688 2.24 5.82 1.72.195-1.32.703-2.24 1.289-2.72-4.453-.52-9.102-2.28-9.102-10.12 0-2.24.781-4.08 2.07-5.48-.195-.52-.898-2.6.195-5.44 0 0 1.68-.56 5.508 2.12 1.602-.44 3.32-.68 5-.68 1.719 0 3.398.24 5 .68 3.828-2.64 5.508-2.12 5.508-2.12 1.094 2.84.391 4.92.195 5.44 1.289 1.44 2.07 3.24 2.07 5.48 0 7.88-4.688 9.6-9.141 10.12.703.64 1.367 1.88 1.367 3.8 0 2.72-.039 4.96-.039 5.64 0 .56.352 1.2 1.367 1 7.93-2.72 13.672-10.4 13.672-19.44 0-11.32-8.984-20.6-20.039-20.6-11.055 0-20 9.16-20 20.48z" />
      </svg>
      <span>{props.content || 'Fork me on GitHub'}</span>
    </a>
  )
}

function circleType(props: Props): any {
  return () => (
    <a
      id="gitFork"
      href={props.link}
      class="fixed z-[9999] flex items-center justify-center rounded-full shadow-lg cursor-pointer decoration-none"
      style={{
        backgroundColor: props.color,
        color: '#fff',
        width: '56px',
        height: '56px',
        bottom: props.bottom ? `${String(props.bottom).replace('px', '')}px` : '32px',
        right: props.position === 'right' ? '32px' : undefined,
        left: props.position === 'left' ? '32px' : undefined,
        top: props.top ? `${String(props.top).replace('px', '')}px` : undefined,
        fontSize: '28px',
        transition: 'box-shadow .2s',
      }}
      aria-label="Fork me on GitHub"
    >
      <svg width="28" height="28" viewBox="0 0 41 41" fill="#fff" style="vertical-align:middle;">
        <path d="M0 20.48c0 9.04 5.742 16.72 13.672 19.44 1.016.2 1.367-.44 1.367-1 0-.48 0-2.12-.039-3.8-5.547 1.24-6.719-2.4-6.719-2.4-.898-2.36-2.227-3-2.227-3-1.836-1.28.156-1.24.156-1.24 1.992.16 3.047 2.12 3.047 2.12 1.797 3.12 4.688 2.24 5.82 1.72.195-1.32.703-2.24 1.289-2.72-4.453-.52-9.102-2.28-9.102-10.12 0-2.24.781-4.08 2.07-5.48-.195-.52-.898-2.6.195-5.44 0 0 1.68-.56 5.508 2.12 1.602-.44 3.32-.68 5-.68 1.719 0 3.398.24 5 .68 3.828-2.64 5.508-2.12 5.508-2.12 1.094 2.84.391 4.92.195 5.44 1.289 1.44 2.07 3.24 2.07 5.48 0 7.88-4.688 9.6-9.141 10.12.703.64 1.367 1.88 1.367 3.8 0 2.72-.039 4.96-.039 5.64 0 .56.352 1.2 1.367 1 7.93-2.72 13.672-10.4 13.672-19.44 0-11.32-8.984-20.6-20.039-20.6-11.055 0-20 9.16-20 20.48z" />
      </svg>
    </a>
  )
}

// badgeType: 右下角/左下角小圆角矩形徽章
function badgeType(props: Props): any {
  return () => (
    <a
      id="gitFork"
      href={props.link}
      class="fixed z-[9999] px3 py1 rounded-full shadow bg-gray-800 text-white text-xs font-bold decoration-none cursor-pointer"
      style={{
        right: props.position === 'right' ? '16px' : undefined,
        left: props.position === 'left' ? '16px' : undefined,
        bottom: props.bottom ? `${String(props.bottom).replace('px', '')}px` : '16px',
        top: props.top ? `${String(props.top).replace('px', '')}px` : undefined,
        backgroundColor: props.color,
      }}
    >
      {props.content || 'Fork me'}
    </a>
  )
}

// tabType: 侧边栏标签样式，半隐藏，鼠标悬停展开
function tabType(props: Props): any {
  // 只用 CSS hover 实现半隐藏展开
  const isLeft = props.position === 'left'
  return () => (
    <a
      id="gitFork"
      href={props.link}
      class={`fixed z-[9999] flex items-center bg-gray-800 text-white px-3 py-2 rounded-r-full shadow transition-all duration-300 group ${isLeft ? 'left-0' : 'right-0'} top-1/2 decoration-none cursor-pointer`}
      style={{
        transform: isLeft ? 'translate(-80%, -50%)' : 'translate(80%, -50%)',
        backgroundColor: props.color,
      }}
      onMouseenter={(e) => {
        const el = e.currentTarget as HTMLElement
        el.style.transform = isLeft ? 'translate(0, -50%)' : 'translate(0, -50%)'
      }}
      onMouseleave={(e) => {
        const el = e.currentTarget as HTMLElement
        el.style.transform = isLeft ? 'translate(-80%, -50%)' : 'translate(80%, -50%)'
      }}
    >
      <svg width="24" height="24" viewBox="0 0 41 41" fill="#fff" style="vertical-align:middle;margin-right:8px;">
        <path d="M0 20.48c0 9.04 5.742 16.72 13.672 19.44 1.016.2 1.367-.44 1.367-1 0-.48 0-2.12-.039-3.8-5.547 1.24-6.719-2.4-6.719-2.4-.898-2.36-2.227-3-2.227-3-1.836-1.28.156-1.24.156-1.24 1.992.16 3.047 2.12 3.047 2.12 1.797 3.12 4.688 2.24 5.82 1.72.195-1.32.703-2.24 1.289-2.72-4.453-.52-9.102-2.28-9.102-10.12 0-2.24.781-4.08 2.07-5.48-.195-.52-.898-2.6.195-5.44 0 0 1.68-.56 5.508 2.12 1.602-.44 3.32-.68 5-.68 1.719 0 3.398.24 5 .68 3.828-2.64 5.508-2.12 5.508-2.12 1.094 2.84.391 4.92.195 5.44 1.289 1.44 2.07 3.24 2.07 5.48 0 7.88-4.688 9.6-9.141 10.12.703.64 1.367 1.88 1.367 3.8 0 2.72-.039 4.96-.039 5.64 0 .56.352 1.2 1.367 1 7.93-2.72 13.672-10.4 13.672-19.44 0-11.32-8.984-20.6-20.039-20.6-11.055 0-20 9.16-20 20.48z" />
      </svg>
      <span>{props.content || 'Fork me'}</span>
    </a>
  )
}

// stickyType: 随页面滚动固定在角落的小块
function stickyType(props: Props): any {
  return () => (
    <a
      id="gitFork"
      href={props.link}
      class="fixed z-[9999] px4 py2 rounded shadow bg-gray-800 text-white text-sm font-bold decoration-none cursor-pointer"
      style={{
        right: props.position === 'right' ? '24px' : undefined,
        left: props.position === 'left' ? '24px' : undefined,
        bottom: `${String(props.bottom)?.replace('px', '')}px`,
        top: `${String(props.top)?.replace('px', '')}px`,
        backgroundColor: props.color,
      }}
    >
      {props.content || 'Fork me'}
    </a>
  )
}

// waveType: 顶部/底部横幅，底部有波浪 SVG
function waveType(props: Props & { waveColor?: string }): any {
  const isTop = !props.bottom
  const waveColor = (props as any).waveColor || props.color || '#fff'
  return () => isTop
    ? (
        <div class="fixed l-0 r-0 t-0 z-[9999] w-screen m-0 p-0">
          <a
            id="gitFork"
            href={props.link}
            class="block w-full text-center text-white text-lg font-bold decoration-none bock p-0 m-0"
          >
            <div class="py-12px" style={{ backgroundColor: props.color }}>{props.content || 'Fork me'}</div>
            <svg
              width="100vw"
              height="24"
              viewBox="0 0 1440 80"
              fill="none"
              class="block w-screen m-0 p-0"
              xmlns="http://www.w3.org/2000/svg"
              style={{ transform: 'scaleY(-1)' }}
            >
              <path d="M0,40 C360,80 1080,0 1440,40 L1440,80 L0,80 Z" fill={waveColor} fillOpacity="0.6" />
            </svg>
          </a>
        </div>
      )
    : (
        <div class="fixed l-0 r-0 b-0 z-[9999] w-screen m-0 p-0">
          <a
            id="gitFork"
            href={props.link}
            class="block w-full text-center text-white text-lg font-bold decoration-none bock p-0 m-0"
          >
            <svg
              width="100vw"
              height="24"
              viewBox="0 0 1440 80"
              fill="none"
              class="block w-screen m-0 p-0"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M0,40 C360,80 1080,0 1440,40 L1440,80 L0,80 Z" fill={waveColor} fillOpacity="0.6" />
            </svg>
            <div style={{ padding: '12px 0', backgroundColor: props.color }}>{props.content || 'Fork me'}</div>
          </a>
        </div>
      )
}
