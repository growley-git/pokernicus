<template>
    <div :class="classes">
        <div class="poker-table__inner shadow" :data-table="no">
            <!-- <BlindTimer class="my-5 py-3 px-5"/> -->
        </div>
        <div class="poker-table__dealer">
            <Avatar class="poker-table__avatar" :size="42" :seed="dealer.username"/>
            <div class="poker-table__username">{{ dealer.username }}</div>
            <div class="poker-table__currency">DEALER</div>
        </div>
        <div v-for="player, i in playerAssignment" class="poker-table__player" :class="{[`poker-table__player--${(i + 1)}`]: true }">
            <div v-if="(i + 1) === 7" class="poker-table__bounty d-flex align-items-center justify-content-center position-absolute text-center text-white bg-danger rounded-circle ms-2 top-50 start-100 translate-middle" style="width:30px;height:30px;padding-left:1px;">
                <Icon icon="chess-king"/>
            </div>
            <Avatar class="poker-table__avatar shadow-sm" :size="48" :seed="player.username"/>
            <div class="position-relative">
                <div class="poker-table__username">{{ player.username }}</div>
                <div class="poker-table__currency">
                    <Icon icon="crown-circle" fixed-width/>
                    <span>{{ player.currency.toLocaleString() }}</span>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import Icon from '../Icon.vue'
import Avatar from '../Avatar.vue'
// import BlindTimer from './BlindTimer.vue'

const props = withDefaults(defineProps<{
    no?: number,
    dealer?: any,
    players?: any,
}>(), {
    no: 1,
    dealer: {
        username: 'Laborum'
    },
    players: [
        {
            username: 'Ut0elit',
            currency: 234828,
        },
        {
            username: 'Reprehenderit',
            currency: 2382372,
        },
        {
            username: 'Proident',
            currency: 34534,
        },
        {
            username: 'Consectetur',
            currency: 43523431,
        },
        {
            username: 'Pariatur',
            currency: 2344342,
        },
        {
            username: 'Nulla',
            currency: 34543,
        },
        {
            username: 'Laboris',
            currency: 7654756,
        },
        {
            username: 'Elit',
            currency: 3443,
        },
        {
            username: 'Amet',
            currency: 34534,
        }
    ]
})

function shuffle<T>(array: T[]): T[] {
    let currentIndex = array.length,  randomIndex;

    // While there remain elements to shuffle.
    while (currentIndex != 0) {
  
      // Pick a remaining element.
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;
  
      // And swap it with the current element.
      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex], array[currentIndex]];
    }
  
    return array;
}

const classes = computed(() => ({
    'poker-table': true
}))

const playerAssignment = computed(() => {
    return shuffle(props.players)
})
</script>

<style scoped lang="scss">
.poker-table {
    $this: &;

    width: 800px;
    height: 450px;
    margin: 32px auto;

    display: grid; 
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr; 
    grid-template-rows: 1fr 1fr 1fr 1fr; 
    gap: 0px 0px; 
    grid-template-areas: 
        ". seat-9 dealer seat-1 ."
        "seat-8 table table table seat-2"
        "seat-7 table table table seat-3"
        ". seat-6 seat-5 seat-4 .";

    &__inner {
        border: 18px solid burlywood;
        background-color: olivedrab;
        border-top-left-radius: 225px;
        border-top-right-radius: 225px;
        border-bottom-left-radius: 225px;
        border-bottom-right-radius: 225px;

        grid-area: table;

        width: 480px;
        height: 225px;
        position: relative;

        &:before {
            content: 'Table ' attr(data-table);
            text-transform: uppercase;
            font-weight: 900;
            font-style: italic;
            font-size: 34px;
            letter-spacing: -1px;
            opacity: 0.33;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            position: absolute;
        }
    }

    &__username {
        font-weight: bold;
        font-size: 14px;
        line-height: 1;
        letter-spacing: -.5px;
        font-variant: small-caps;
        text-align: center;
    }

    &__currency {
        display: flex;
        align-items: center;
        justify-content: center;
        font-weight: bold;
        font-size: 14px;
        line-height: 1;
        letter-spacing: -.5px;
        font-variant: small-caps;
    }
    
    &__dealer {
        align-items: center;
        display: flex;
        flex-direction: column;
        grid-area: dealer;
        justify-content: center;
        position: relative;
        top: 12px;
    }

    &__player {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        position: relative;

        &--1 {
            grid-area: seat-1;
            flex-direction: column-reverse;
            justify-content: end;
            top: 30px;
            #{$this}__currency {
                flex-direction: row-reverse;
            }
        }
        &--2 {
            grid-area: seat-2;
            flex-direction: row;
            justify-content: start;
            left: -30px;
            #{$this}__username,
            #{$this}__currency {
                text-align: left;
            }
            #{$this}__currency {
                flex-direction: row-reverse;
            }
        }
        &--3 {
            grid-area: seat-3;
            flex-direction: row;
            justify-content: start;
            left: -30px;
            #{$this}__username,
            #{$this}__currency {
                text-align: left;
            }
            #{$this}__currency {
                flex-direction: row-reverse;
            }
        }
        &--4 {
            grid-area: seat-4;
            justify-content: flex-start;
            top: -30px;
            #{$this}__currency {
                flex-direction: row-reverse;
            }
        }
        &--5 {
            grid-area: seat-5;
            justify-content: flex-start;
            top: -30px;
        }
        &--6 {
            grid-area: seat-6;
            justify-content: flex-start;
            top: -30px;
        }
        &--7 {
            grid-area: seat-7;
            flex-direction: row-reverse;
            justify-content: end;
            right: -30px;
            #{$this}__username,
            #{$this}__currency {
                text-align: right;
            }
        }
        &--8 {
            grid-area: seat-8;
            flex-direction: row-reverse;
            justify-content: end;
            right: -30px;
            #{$this}__username,
            #{$this}__currency {
                text-align: right;
            }
        }
        &--9 {
            top: 30px;
            grid-area: seat-9;
            flex-direction: column-reverse;
            justify-content: end;
        }
    }

    &__avatar {
        background-color: white;
        border: 3px solid white;
        border-radius: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
    }

    // &__sb,
    // &__bb {
    //     background: red;
    //     border-radius: 100%;
    //     width: 32px;
    //     height: 32px;
    //     position: absolute;
    // }

    // &__sb {
    //     grid-area: seat-1;
    // }
}
</style>