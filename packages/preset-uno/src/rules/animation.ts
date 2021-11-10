import { Rule } from '@unocss/core'
import { handler as h } from '../utils'

const keyframes: any = {
  'spin': '@keyframes spin {from {transform:rotate(0deg);} to {transform:rotate(360deg);}}',
  'ping': '@keyframes ping {0% {transform:scale(1);opacity:1;} 75%, 100% {transform:scale(2);opacity:0;}}',
  // https://windicss.org/plugins/community/animations.html
  'bounce': '@keyframes bounce {from, 20%, 53%, 80%, to {animation-timing-function:cubic-bezier(0.215,0.61,0.355,1); transform:translate3d(0,0,0);} 40%, 43% {animation-timing-function:cubic-bezier(0.755,0.05,0.855,0.06); transform:translate3d(0,-30px,0);} 70% {animation-timing-function:cubic-bezier(0.755,0.05,0.855,0.06); transform:translate3d(0,-15px,0);} 90% {transform:translate3d(0,-4px,0);}}',
  'flash': '@keyframes flash {from, 50%, to {opacity:1;} 25%, 75% {opacity:0;}}',
  'pulse': '@keyframes pulse {from {transform:scale3d(1,1,1);} 50% {transform:scale3d(1.05,1.05,1.05);} to {transform:scale3d(1,1,1);}}',
  'rubber-band': '@keyframes rubber-band {from {transform:scale3d(1,1,1);} 30% {transform:scale3d(1.25,0.75,1);} 40% {transform:scale3d(0.75,1.25,1);} 50% {transform:scale3d(1.15,0.85,1);} 65% {transform:scale3d(0.95,1.05,1);} 75% {transform:scale3d(1.05,0.95,1);} to {transform:scale3d(1,1,1);}}',
  'shake-x': '@keyframes shake-x {from, to {transform:translate3d(0,0,0);} 10%, 30%, 50%, 70%, 90% {transform:translate3d(-10px,0,0);} 20%, 40%, 60%, 80% {transform:translate3d(10px,0,0);}}',
  'shake-y': '@keyframes shake-y {from, to {transform:translate3d(0,0,0);} 10%, 30%, 50%, 70%, 90% {transform:translate3d(0,-10px,0);} 20%, 40%, 60%, 80% {transform:translate3d(0,10px,0);}}',
  'head-shake': '@keyframes head-shake {0% {transform:translateX(0);} 6.5% {transform:translateX(-6px) rotateY(-9deg);} 18.5% {transform:translateX(5px) rotateY(7deg);} 31.5% {transform:translateX(-3px) rotateY(-5deg);} 43.5% {transform:translateX(2px) rotateY(3deg);} 50% {transform:translateX(0);}}',
  'swing': '@keyframes swing {20% {transform:rotate3d(0,0,1,15deg);} 40% {transform:rotate3d(0,0,1,-10deg);} 60% {transform:rotate3d(0,0,1,5deg);} 80% {transform:rotate3d(0,0,1,-5deg);} to {transform:rotate3d(0,0,1,0deg);}}',
  'tada': '@keyframes tada {from {transform:scale3d(1,1,1);} 10%, 20% {transform:scale3d(0.9,0.9,0.9) rotate3d(0,0,1,-3deg);} 30%, 50%, 70%, 90% {transform:scale3d(1.1,1.1,1.1) rotate3d(0,0,1,3deg);} 40%, 60%, 80% {transform:scale3d(1.1,1.1,1.1) rotate3d(0,0,1,-3deg);} to {transform:scale3d(1,1,1);}}',
  'wobble': '@keyframes wobble {from {transform:translate3d(0,0,0);} 15% {transform:translate3d(-25%,0,0) rotate3d(0,0,1,-5deg);} 30% {transform:translate3d(20%,0,0) rotate3d(0,0,1,3deg);} 45% {transform:translate3d(-15%,0,0) rotate3d(0,0,1,-3deg);} 60% {transform:translate3d(10%,0,0) rotate3d(0,0,1,2deg);} 75% {transform:translate3d(-5%,0,0) rotate3d(0,0,1,-1deg);} to {transform:translate3d(0,0,0);}}',
  'jello': '@keyframes jello {from, 11.1% to {transform:translate3d(0,0,0);} 22.2% {transform:skewX(-12.5deg) skewY(-12.5deg);} 33.3% {transform:skewX(6.25deg) skewY(6.25deg);} 44.4% {transform:skewX(-3.125deg)skewY(-3.125deg);} 55.5% {transform:skewX(1.5625deg) skewY(1.5625deg);} 66.6% {transform:skewX(-0.78125deg) skewY(-0.78125deg);} 77.7% {transform:skewX(0.390625deg) skewY(0.390625deg);} 88.8% {transform:skewX(-0.1953125deg) skewY(-0.1953125deg);}}',
  'heart-beat': '@keyframes heart-beat {0% {transform:scale(1);} 14% {transform:scale(1.3);} 28% {transform:scale(1);} 42% {transform:scale(1.3);} 70% {transform:scale(1);}}',
  'hinge': '@keyframes hinge {0% {transform-origin:top left; animation-timing-function:ease-in-out;} 20%, 60% {transform:rotate3d(0,0,1,80deg); transform-origin:top left; animation-timing-function:ease-in-out;}40%, 80% {transform:rotate3d(0,0,1,60deg); transform-origin:top left; animation-timing-function:ease-in-out;} to {transform:translate3d(0,700px,0); opacity:0;}}',
  'jack-in-the-box': '@keyframes jack-in-the-box {from {opacity:0; transform-origin:center bottom; transform:scale(0.1) rotate(30deg);} 50% {transform:rotate(-10deg);} 70% {transform:rotate(3deg);} to {transform:scale(1);}}',
  'light-speed-in-left': '@keyframes light-speed-in-left {from {opacity:0; transform:translate3d(100%,0,0) skewX(-30deg);} 60% {opacity:1; transform:skewX(20deg);} 80% {transform:skewX(-5deg);} to {transform:translate3d(0,0,0);}}',
  'light-speed-in-right': '@keyframes light-speed-in-right {from {opacity:0; transform:translate3d(100%,0,0) skewX(-30deg);} 60% {opacity:1; transform:skewX(20deg);} 80% {transform:skewX(-5deg);} to {transform:translate3d(0,0,0);}}',
  'light-speed-out-left': '@keyframes light-speed-out-left {from {opacity:1;} to {opacity:0; transform:translate3d(100%,0,0) skewX(30deg);}}',
  'light-speed-out-right': '@keyframes light-speed-out-right {from {opacity:1;} to {opacity:0; transform:translate3d(100%,0,0) skewX(30deg);}}',
  'flip': '@keyframes flip {from {transform:perspective(400px) scale3d(1,1,1) translate3d(0,0,0) rotate3d(0,1,0,-360deg); animation-timing-function:ease-out;} 40% {transform:perspective(400px) scale3d(1,1,1) translate3d(0,0,150px) rotate3d(0,1,0,-190deg); animation-timing-function:ease-out;} 50% {transform:perspective(400px) scale3d(1,1,1) translate3d(0,0,150px) rotate3d(0,1,0,-170deg); animation-timing-function:ease-in;} 80% {transform:perspective(400px) scale3d(0.95,0.95,0.95) translate3d(0,0,0) rotate3d(0,1,0,0deg); animation-timing-function:ease-in;} to {transform:perspective(400px) scale3d(1,1,1) translate3d(0,0,0) rotate3d(0,1,0,0deg); animation-timing-function:ease-in;}}',
  'flip-in-x': '@keyframes flip-in-x {from {transform:perspective(400px) rotate3d(1,0,0,90deg); animation-timing-function:ease-in; opacity:0;} 40% {transform:perspective(400px) rotate3d(1,0,0,-20deg); animation-timing-function:ease-in;} 60% {transform:perspective(400px) rotate3d(1,0,0,10deg); opacity:1;} 80% {transform:perspective(400px) rotate3d(1,0,0,-5deg);} to {transform:perspective(400px);}}',
  'flip-in-y': '@keyframes flip-in-y {from {transform:perspective(400px) rotate3d(0,1,0,90deg); animation-timing-function:ease-in; opacity:0;} 40% {transform:perspective(400px) rotate3d(0,1,0,-20deg); animation-timing-function:ease-in;} 60% {transform:perspective(400px) rotate3d(0,1,0,10deg); opacity:1;} 80% {transform:perspective(400px) rotate3d(0,1,0,-5deg);} to {transform:perspective(400px);}}',
  'flip-out-x': '@keyframes flip-out-x {from {transform:perspective(400px);} 30% {transform:perspective(400px) rotate3d(1,0,0,-20deg); opacity:1;} to {transform:perspective(400px) rotate3d(1,0,0,90deg); opacity:0;}}',
  'flip-out-y': '@keyframes flip-out-y {from {transform:perspective(400px);} 30% {transform:perspective(400px) rotate3d(0,1,0,-15deg); opacity:1;} to {transform:perspective(400px) rotate3d(0,1,0,90deg); opacity:0;}}',
  'rotate-in': '@keyframes rotate-in {from {transform-origin:center; transform:rotate3d(0,0,1,-200deg); opacity:0;} to {transform-origin:center; transform:translate3d(0,0,0); opacity:1;}}',
  'rotate-in-down-left': '@keyframes rotate-in-down-left {from {transform-origin:left bottom; transform:rotate3d(0,0,1,-45deg); opacity:0;} to {transform-origin:left bottom; transform:translate3d(0,0,0); opacity:1;}}',
  'rotate-in-down-right': '@keyframes rotate-in-down-right {from {transform-origin:right bottom; transform:rotate3d(0,0,1,45deg); opacity:0;} to {transform-origin:right bottom; transform:translate3d(0,0,0); opacity:1;}}',
  'rotate-in-up-left': '@keyframes rotate-in-up-left {from {transform-origin:left top; transform:rotate3d(0,0,1,45deg); opacity:0;} to {transform-origin:left top; transform:translate3d(0,0,0); opacity:1;}}',
  'rotate-in-up-right': '@keyframes rotate-in-up-right {from {transform-origin:right bottom; transform:rotate3d(0,0,1,-90deg); opacity:0;} to {transform-origin:right bottom; transform:translate3d(0,0,0); opacity:1;}}',
  'rotate-out': '@keyframes rotate-out {from {transform-origin:center; opacity:1;} to {transform-origin:center; transform:rotate3d(0,0,1,200deg); opacity:0;}}',
  'rotate-out-down-left': '@keyframes rotate-out-down-left {from {transform-origin:left bottom; opacity:1;} to {transform-origin:left bottom; transform:rotate3d(0,0,1,45deg); opacity:0;}}',
  'rotate-out-down-right': '@keyframes rotate-out-down-right {from {transform-origin:right bottom; opacity:1;} to {transform-origin:right bottom; transform:rotate3d(0,0,1,-45deg); opacity:0;}}',
  'rotate-out-up-left': '@keyframes rotate-out-up-left {from {transform-origin:left bottom; opacity:1;} to {transform-origin:left bottom; transform:rotate3d(0,0,1,-45deg); opacity:0;}}',
  'rotate-out-up-right': '@keyframes rotate-out-up-right {from {transform-origin:right bottom; opacity:1;} to {transform-origin:left bottom; transform:rotate3d(0,0,1,90deg); opacity:0;}}',
  'roll-in': '@keyframes roll-in {from {opacity:0; transform:translate3d(-100%,0,0) rotate3d(0,0,1,-120deg);} to {opacity:1; transform:translate3d(0,0,0);}}',
  'roll-out': '@keyframes roll-out {from {opacity:1;} to {opacity:0; transform:translate3d(100%,0,0) rotate3d(0,0,1,120deg);}}',
  'zoom-in': '@keyframes zoom-in {from {opacity:0; transform:scale3d(0.3,0.3,0.3);} 50% {opacity:1;}}',
  'zoom-in-down': '@keyframes zoom-in-down {from {opacity:0; transform:scale3d(0.1,0.1,0.1) translate3d(0,-1000px,0); animation-timing-function:cubic-bezier(0.55,0.055,0.675,0.19);} 60% {opacity:1; transform:scale3d(0.475,0.475,0.475) translate3d(0,60px,0); animation-timing-function:cubic-bezier(0.175,0.885,0.32,1);}}',
  'zoom-in-left': '@keyframes zoom-in-left {from {opacity:0; transform:scale3d(0.1,0.1,0.1) translate3d(-1000px,0,0); animation-timing-function:cubic-bezier(0.55,0.055,0.675,0.19);} 60% {opacity:1; transform:scale3d(0.475,0.475,0.475) translate3d(10px,0,0); animation-timing-function:cubic-bezier(0.175,0.885,0.32,1);}}',
  'zoom-in-right': '@keyframes zoom-in-right {from {opacity:0; transform:scale3d(0.1,0.1,0.1) translate3d(1000px,0,0); animation-timing-function:cubic-bezier(0.55,0.055,0.675,0.19);} 60% {opacity:1; transform:scale3d(0.475,0.475,0.475) translate3d(-10px,0,0); animation-timing-function:cubic-bezier(0.175,0.885,0.32,1);}}',
  'zoom-in-up': '@keyframes zoom-in-up {from {opacity:0; transform:scale3d(0.1,0.1,0.1) translate3d(0,1000px,0); animation-timing-function:cubic-bezier(0.55,0.055,0.675,0.19);} 60% {opacity:1; transform:scale3d(0.475,0.475,0.475) translate3d(0,-60px,0); animation-timing-function:cubic-bezier(0.175,0.885,0.32,1);}}',
  'zoom-out': '@keyframes zoom-out {from {opacity:1;} 50% {opacity:0; transform:scale3d(0.3,0.3,0.3);} to {opacity:0;}}',
  'zoom-out-down': '@keyframes zoom-out-down {40% {opacity:1; transform:scale3d(0.475,0.475,0.475) translate3d(0,-60px,0); animation-timing-function:cubic-bezier(0.55,0.055,0.675,0.19);} to {opacity:0; transform:scale3d(0.1,0.1,0.1) translate3d(0,2000px,0); transform-origin:center bottom; animation-timing-function:cubic-bezier(0.175,0.885,0.32,1);}}',
  'zoom-out-left': '@keyframes zoom-out-left {40% {opacity:1; transform:scale3d(0.475,0.475,0.475) translate3d(42px,0,0);} to {opacity:0; transform:scale(0.1) translate3d(-2000px,0,0); transform-origin:left center;}}',
  'zoom-out-right': '@keyframes zoom-out-right {40% {opacity:1; transform:scale3d(0.475,0.475,0.475) translate3d(-42px,0,0);} to {opacity:0; transform:scale(0.1) translate3d(2000px,0,0); transform-origin:right center;}}',
  'zoom-out-up': '@keyframes zoom-out-up {40% {opacity:1; transform:scale3d(0.475,0.475,0.475) translate3d(0,60px,0); animation-timing-function:cubic-bezier(0.55,0.055,0.675,0.19);} to {opacity:0; transform:scale3d(0.1,0.1,0.1) translate3d(0,-2000px,0); transform-origin:center bottom; animation-timing-function:cubic-bezier(0.175,0.885,0.32,1);}}',
  'bounce-in': '@keyframes bounce-in {from, 20%, 40%, 60%, 80%, to {animation-timing-function:ease-in-out;} 0% {opacity:0; transform:scale3d(0.3,0.3,0.3);} 20% {transform:scale3d(1.1,1.1,1.1);} 40% {transform:scale3d(0.9,0.9,0.9);} 60% {transform:scale3d(1.03,1.03,1.03); opacity:1;} 80% {transform:scale3d(0.97,0.97,0.97);} to {opacity:1; transform:scale3d(1,1,1);}}',
  'bounce-in-down': '@keyframes bounce-in-down {from, 60%, 75%, 90%, to {animation-timing-function:cubic-bezier(0.215,0.61,0.355,1);} 0% {opacity:0; transform:translate3d(0,-3000px,0);} 60% {opacity:1; transform:translate3d(0,25px,0);} 75% {transform:translate3d(0,-10px,0);} 90% {transform:translate3d(0,5px,0);} to {transform:translate3d(0,0,0);}}',
  'bounce-in-left': '@keyframes bounce-in-left {from, 60%, 75%, 90%, to {animation-timing-function:cubic-bezier(0.215,0.61,0.355,1);} 0% {opacity:0; transform:translate3d(-3000px,0,0);} 60% {opacity:1; transform:translate3d(25px,0,0);} 75% {transform:translate3d(-10px,0,0);} 90% {transform:translate3d(5px,0,0);} to {transform:translate3d(0,0,0);}}',
  'bounce-in-right': '@keyframes bounce-in-right {from, 60%, 75%, 90%, to {animation-timing-function:cubic-bezier(0.215,0.61,0.355,1);} 0% {opacity:0; transform:translate3d(3000px,0,0);} 60% {opacity:1; transform:translate3d(-25px,0,0);} 75% {transform:translate3d(10px,0,0);} 90% {transform:translate3d(-5px,0,0);} to {transform:translate3d(0,0,0);}}',
  'bounce-in-up': '@keyframes bounce-in-up {from, 60%, 75%, 90%, to {animation-timing-function:cubic-bezier(0.215,0.61,0.355,1);} 0% {opacity:0; transform:translate3d(0,3000px,0);} 60% {opacity:1; transform:translate3d(0,-20px,0);} 75% {transform:translate3d(0,10px,0);} 90% {transform:translate3d(0,-5px,0);} to {transform:translate3d(0,0,0);}}',
  'bounce-out': '@keyframes bounce-out {20% {transform:scale3d(0.9,0.9,0.9);} 50%, 55% {opacity:1; transform:scale3d(1.1,1.1,1.1);} to {opacity:0; transform:scale3d(0.3,0.3,0.3);}}',
  'bounce-out-down': '@keyframes bounce-out-down {20% {transform:translate3d(0,10px,0);} 40%, 45% {opacity:1; transform:translate3d(0,-20px,0);} to {opacity:0; transform:translate3d(0,2000px,0);}}',
  'bounce-out-left': '@keyframes bounce-out-left {20% {opacity:1; transform:translate3d(20px,0,0);} to {opacity:0; transform:translate3d(-2000px,0,0);}}',
  'bounce-out-right': '@keyframes bounce-out-right {20% {opacity:1; transform:translate3d(-20px,0,0);} to {opacity:0; transform:translate3d(2000px,0,0);}}',
  'bounce-out-up': '@keyframes bounce-out-up {20% {transform:translate3d(0,-10px,0);} 40%, 45% {opacity:1; transform:translate3d(0,20px,0);} to {opacity:0; transform:translate3d(0,-2000px,0);}}',
  'slide-in-down': '@keyframes slide-in-down {from {transform:translate3d(0,-100%,0); visibility:visible;} to {transform:translate3d(0,0,0);}}',
  'slide-in-left': '@keyframes slide-in-left {from {transform:translate3d(-100%,0,0); visibility:visible;} to {transform:translate3d(0,0,0);}}',
  'slide-in-right': '@keyframes slide-in-right {from {transform:translate3d(100%,0,0); visibility:visible;} to {transform:translate3d(0,0,0);}}',
  'slide-in-up': '@keyframes slide-in-up {from {transform:translate3d(0,100%,0); visibility:visible;} to {transform:translate3d(0,0,0);}}',
  'slide-out-down': '@keyframes slide-out-down {from {transform:translate3d(0,0,0);} to {visibility:hidden; transform:translate3d(0,100%,0);}}',
  'slide-out-left': '@keyframes slide-out-left {from {transform:translate3d(0,0,0);} to {visibility:hidden; transform:translate3d(-100%,0,0);}}',
  'slide-out-right': '@keyframes slide-out-right {from {transform:translate3d(0,0,0);} to {visibility:hidden; transform:translate3d(100%,0,0);}}',
  'slide-out-up': '@keyframes slide-out-up {from {transform:translate3d(0,0,0);} to {visibility:hidden; transform:translate3d(0,-100%,0);}}',
  'fade-in': '@keyframes fade-in {from {opacity:0;} to {opacity:1;}}',
  'fade-in-down': '@keyframes fade-in-down {from {opacity:0; transform:translate3d(0,-100%,0);} to {opacity:1; transform:translate3d(0,0,0);}}',
  'fade-in-down-big': '@keyframes fade-in-down-big {from {opacity:0; transform:translate3d(0,-2000px,0);} to {opacity:1; transform:translate3d(0,0,0);}}',
  'fade-in-left': '@keyframes fade-in-left {from {opacity:0; transform:translate3d(-100%,0,0);} to {opacity:1; transform:translate3d(0,0,0);}}',
  'fade-in-left-big': '@keyframes fade-in-left-big {from {opacity:0; transform:translate3d(-2000px,0,0);} to {opacity:1; transform:translate3d(0,0,0);}}',
  'fade-in-right': '@keyframes fade-in-right {from {opacity:0; transform:translate3d(100%,0,0);} to {opacity:1; transform:translate3d(0,0,0);}}',
  'fade-in-right-big': '@keyframes fade-in-right-big {from {opacity:0; transform:translate3d(2000px,0,0);} to {opacity:1; transform:translate3d(0,0,0);}}',
  'fade-in-up': '@keyframes fade-in-up {from {opacity:0; transform:translate3d(0,100%,0);} to {opacity:1; transform:translate3d(0,0,0);}}',
  'fade-in-up-big': '@keyframes fade-in-up-big {from {opacity:0; transform:translate3d(0,2000px,0);} to {opacity:1; transform:translate3d(0,0,0);}}',
  'fade-in-top-left': '@keyframes fade-in-top-left {from {opacity:0; transform:translate3d(-100%,-100%,0);} to {opacity:1; transform:translate3d(0,0,0);}}',
  'fade-in-top-right': '@keyframes fade-in-top-right {from {opacity:0; transform:translate3d(100%,-100%,0);} to {opacity:1; transform:translate3d(0,0,0);}}',
  'fade-in-bottom-left': '@keyframes fade-in-bottom-left {from {opacity:0; transform:translate3d(-100%,100%,0);} to {opacity:1; transform:translate3d(0,0,0);}}',
  'fade-in-bottom-right': '@keyframes fade-in-bottom-right {from {opacity:0; transform:translate3d(100%,100%,0);} to {opacity:1; transform:translate3d(0,0,0);}}',
  'fade-out': '@keyframes fade-out {from {opacity:1;} to {opacity:0;}}',
  'fade-out-down': '@keyframes fade-out-down {from {opacity:1;} to {opacity:0; transform:translate3d(0,100%,0);}}',
  'fade-out-down-big': '@keyframes fade-out-down-big {from {opacity:1;} to {opacity:0; transform:translate3d(0,2000px,0);}}',
  'fade-out-left': '@keyframes fade-out-left {from {opacity:1;} to {opacity:0; transform:translate3d(-100%,0,0);}}',
  'fade-out-left-big': '@keyframes fade-out-left-big {from {opacity:1;} to {opacity:0; transform:translate3d(-2000px,0,0);}}',
  'fade-out-right': '@keyframes fade-out-right {from {opacity:1;} to {opacity:0; transform:translate3d(100%,0,0);}}',
  'fade-out-right-big': '@keyframes fade-out-right-big {from {opacity:1;} to {opacity:0; transform:translate3d(2000px,0,0);}}',
  'fade-out-up': '@keyframes fade-out-up {from {opacity:1;} to {opacity:0; transform:translate3d(0,-100%,0);}}',
  'fade-out-up-big': '@keyframes fade-out-up-big {from {opacity:1;} to {opacity:0; transform:translate3d(0,-2000px,0);}}',
  'fade-out-top-left': '@keyframes fade-out-top-left {from {opacity:1; transform:translate3d(0,0,0);} to {opacity:0; transform:translate3d(-100%,-100%,0);}}',
  'fade-out-top-right': '@keyframes fade-out-top-right {from {opacity:1; transform:translate3d(0,0,0);} to {opacity:0; transform:translate3d(100%,-100%,0);}}',
  'fade-out-bottom-left': '@keyframes fade-out-bottom-left {from {opacity:1; transform:translate3d(0,0,0);} to {opacity:0; transform:translate3d(-100%,100%,0);}}',
  'fade-out-bottom-right': '@keyframes fade-out-bottom-right {from {opacity:1; transform:translate3d(0,0,0);} to {opacity:0; transform:translate3d(100%,100%,0);}}',
  'back-in-up': '@keyframes back-in-up {0% {opacity:0.7; transform:translateY(1200px) scale(0.7);} 80% {opacity:0.7; transform:translateY(0px) scale(0.7);} 100% {opacity:1; transform:scale(1);}}',
  'back-in-down': '@keyframes back-in-down {0% {opacity:0.7; transform:translateY(-1200px) scale(0.7);} 80% {opacity:0.7; transform:translateY(0px) scale(0.7);} 100% {opacity:1; transform:scale(1);}}',
  'back-in-right': '@keyframes back-in-right {0% {opacity:0.7; transform:translateX(2000px) scale(0.7);} 80% {opacity:0.7; transform:translateY(0px) scale(0.7);} 100% {opacity:1; transform:scale(1);}}',
  'back-in-left': '@keyframes back-in-left {0% {opacity:0.7; transform:translateX(-2000px) scale(0.7);} 80% {opacity:0.7; transform:translateX(0px) scale(0.7);} 100% {opacity:1; transform:scale(1);}}',
  'back-out-up': '@keyframes back-out-up {0% {opacity:1; transform:scale(1);} 80% {opacity:0.7; transform:translateY(0px) scale(0.7);} 100% {opacity:0.7; transform:translateY(-700px) scale(0.7);}}',
  'back-out-down': '@keyframes back-out-down {0% {opacity:1; transform:scale(1);} 80% {opacity:0.7; transform:translateY(0px) scale(0.7);} 100% {opacity:0.7; transform:translateY(700px) scale(0.7);}}',
  'back-out-right': '@keyframes back-out-right {0% {opacity:1; transform:scale(1);} 80% {opacity:0.7; transform:translateY(0px) scale(0.7);} 100% {opacity:0.7; transform:translateX(2000px) scale(0.7);}}',
  'back-out-left': '@keyframes back-out-left {0% {opacity:1; transform:scale(1);} 80% {opacity:0.7; transform:translateX(-2000px) scale(0.7);} 100% {opacity:0.7; transform:translateY(-700px) scale(0.7);}}',
}

export const animations: Rule[] = [
  [/^animate-(.*)$/, ([, name], { constructCSS }) => {
    const kf = keyframes[name]
    if (kf)
      return `${kf}\n${constructCSS({ animation: `${name} 1s linear infinite` })}`
  }],
  ['animate-none', { animation: 'none' }],
  [/^animate(?:-duration)?-((.+)(?:(s|ms)?))$/, ([, d]) => ({ 'animation-duration': h.bracket.time(d.replace(/-duration/, '')) })],
  [/^animate-delay-((.+)(?:(s|ms)?))$/, ([, d]) => ({ 'animation-delay': h.bracket.time(d) })],
  [/^animate-(?:fill-)?mode-(none|forwards|backwards|both|inherit|initial|revert|unset)$/, ([, d]) => ({ 'animation-fill-mode': d })],
  [/^animate-(?:direction-)?(normal|reverse|alternate|alternate-reverse|inherit|initial|revert|unset)$/, ([, d]) => ({ 'animation-direction': d })],
  [/^animate-(?:iteration-)?count-(.+)$/, ([, d]) => ({ 'animation-iteration-count': d.replace(/\-/g, ', ') })],
  [/^animate-name-(.+)/, ([, d]) => ({ 'animation-name': d })],
  [/^animate-play(?:-state)?-(paused|running|inherit|initial|revert|unset)$/, ([, d]) => ({ 'animation-play-state': d })],
]
