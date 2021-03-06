<script>
import * as types from '@editor/types'
import * as _ from 'lodash-es'
import Seeder from '@editor/seeder'
import defaults from '../../mixins/defaults'
import sectionMedia from '../../mixins/sectionMedia'

const GROUP_NAME = 'FirstScreen'
const NAME = 'FirstScreenFantasyVideoBack'
const BG_SECTION = 'url(https://s3.protocol.one/src/o_JEnQO.jpg)'
const date = Date.parse(new Date()) + 15 * 24 * 60 * 60 * 1000

const COMPONENTS = [
  {
    name: 'Logo',
    element: types.Logo,
    type: 'image',
    class: 'b-logo-fs',
    label: 'logo'
  },
  {
    name: 'TextElement',
    element: types.Text,
    type: 'text',
    class: 'b-text-fs',
    label: 'text'
  },
  {
    name: 'TextElement',
    element: types.Text,
    type: 'text',
    class: 'b-text-fs',
    label: 'text'
  },
  {
    name: 'Timer',
    element: types.Timer,
    type: 'timer',
    class: 'b-timer-fs',
    label: 'timer'
  },
  {
    name: 'Button',
    element: types.Button,
    type: 'button',
    class: 'b-button-fs',
    label: 'button'
  }
]

const C_CUSTOM = [
  {
    element: {
      styles: {
        'background-image': 'url("https://s3.protocol.one/src/o_18R5TC.svg")',
        'background-color': 'rgba(0, 0, 0, 0)',
        'background-repeat': 'no-repeat',
        'background-size': 'contain',
        'width': '500px',
        'height': '121px',
        'margin-top': '25px',
        'margin-right': '0px',
        'margin-bottom': '20px',
        'margin-left': '0px'
      },
      media: {
        'is-mobile': {
          width: '270px',
          height: '100px',
          'margin-top': '25px',
          'margin-right': '0',
          'margin-bottom': '0',
          'margin-left': '0'
        }
      }
    }
  },
  {
    element: {
      text: '<p>HERE SHOULD BE A LITTLE TEXT ABOUT YOURE GAME</b></p>',
      styles: {
        'font-family': 'Cinzel',
        'font-size': '5.6rem',
        'line-height': '1.2',
        'color': '#ffffff',
        'margin-top': '25px',
        'margin-right': '0px',
        'margin-bottom': '20px',
        'margin-left': '0px'
      },
      media: {
        'is-mobile': {
          'font-size': '2rem',
          'line-height': '1.4',
          'text-align': 'center',
          'margin-top': '16px',
          'margin-bottom': '16px',
          'margin-left': '32px',
          'margin-right': '32px'
        }
      }
    }
  },
  {
    element: {
      text: '<p><b>Time left</b></p>',
      styles: {
        'font-family': 'Cinzel',
        'font-size': '3.6rem',
        'line-height': '1.2',
        'color': '#ffffff',
        'margin-top': '25px',
        'margin-right': '0px',
        'margin-bottom': '12px',
        'margin-left': '0px'
      }
    }
  },
  {
    element: {
      timer: {
        timestamp: date,
        UTC: new Date().getTimezoneOffset() / 60 * (-1),
        labels: {
          show: false
        },
        colorTile: 'rgba(0,0,0,0)'
      },
      styles: {
        'background-color': 'rgba(0,0,0,0)',
        'font-family': 'Cinzel',
        'font-size': '4rem',
        'font-weight': 'normal',
        'line-height': '1',
        'color': '#ffffff',
        'margin-top': '0px',
        'margin-right': '0px',
        'margin-bottom': '27px',
        'margin-left': '0px'
      }
    }
  },
  {
    element: {
      text: '<b>Call to Action</b>',
      styles: {
        'background-color': '#AF2E12',
        'color': '#ffffff',
        'font-family': 'Cinzel',
        'font-size': '2rem',
        'text-align': 'center',
        'width': '240px',
        'height': '64px',
        'border': '1px solid #000000',
        'margin-top': '25px',
        'margin-right': '0px',
        'margin-bottom': '25px',
        'margin-left': '0px'
      },
      pseudo: {
        'hover': {
          'background-color': '#333333 !important',
          'border': '1px solid #AF2E12 !important'
        }
      }
    }
  }
]

const SCHEMA_CUSTOM = {
  mainStyle: {
    styles: {
      'background-image': BG_SECTION,
      'background-size': 'cover',
      'background-color': '#4A4A4A',
      'background-repeat': 'no-repeat',
      'background-attachment': 'scroll',
      'height': '100vh'
    },
    backgroundType: 'video',
    backgroundVideo: 'https://s3.protocol.one/src/o_1vLDJn.mp4',
    overlay: {
      color: '#000000',
      opacity: '0.5'
    }
  },
  components: _.merge({}, C_CUSTOM),
  container: {
    width: 9,
    media: {
      'is-mobile': {
        'padding-bottom': '25px'
      }
    }
  },
  edited: true
}

export default {
  name: NAME,

  group: GROUP_NAME,

  description: 'Fantasy title animated background main screen',

  mixins: [defaults, sectionMedia],

  cover: '/img/covers/first-screen-fantasy-video-back.jpg',

  $schema: {
    mainStyle: types.StyleObject,
    container: types.StyleObject,
    components: COMPONENTS
  },

  created () {
    if (this.$sectionData.edited === undefined) {
      Seeder.seed(_.merge(this.$sectionData, SCHEMA_CUSTOM))
    }
  }
}
</script>

<template>
  <section
    class="b-first-screen-space-video-back"
    :class="$sectionData.mainStyle.classes"
    :style="[$sectionData.mainStyle.styles, $sectionData.objVarsMedia]"
    v-styler:section="$sectionData.mainStyle"
  >
    <slot name="menu"/>
    <slot name="video"/>
    <slot name="overlay"/>
    <div class="b-grid">
      <div class="b-grid__row">
        <div class="b-grid__col-m-12" :class="`b-grid__col-${$sectionData.container.width}`">
          <sandbox
              container-path="$sectionData.container"
              components-path="$sectionData.components"
              class="b-sandbox">

            <draggable v-model="$sectionData.components" class="b-draggable-slot b-draggable-slot_100" :style="$sectionData.container.styles" @start="$_drag('components')" @change="$_dragStop">
              <div v-for="(component, index) in $sectionData.components" v-if="$sectionData.components.length !== 0" :key="index">
                <component
                  v-styler:for="{ el: $sectionData.components[index].element, path: `$sectionData.components[${index}].element`, type: $sectionData.components[index].type, label: component.label }"
                  :is="component.name"
                  :href="$sectionData.components[index].element.link.href"
                  :target="$sectionData.components[index].element.link.target"
                  :path="`components[${index}].element`"
                  :style="$sectionData.components[index].element.styles"
                  :class="[$sectionData.components[index].element.classes, $sectionData.components[index].class]"
                  >
                  <div v-html="$sectionData.components[index].element.text"></div>
                </component>
              </div>
            </draggable>
          </sandbox>
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="sass" scoped>
</style>
